import React from "react";
import { useCarouselContext } from "../context";
import {
  CLASSNAME__CAROUSEL_ITEM,
  CLASSNAME__CAROUSEL_ITEM_THUMBNAIL,
} from "../constants";
import { useBusinessLogic } from "../hooks/useBusinessLogic";
import { resolveSrcMain } from "../utils/getCarouselVideo";
import { CarouselItemProps } from "../types";

export const CarouselItem = (props: CarouselItemProps) => {
  //#region Init
  const { description, index, srcMain, srcThumbnail } = props;
  const { setCurrentItemIndex, currentItemIndex, setIsFullscreenMode } =
    useCarouselContext();
  const { stylingLogic, optionsLogic } = useBusinessLogic({
    isCurrentItem: index === currentItemIndex,
  });
  //#endregion

  //#region Functions/Handlers
  async function onPress(e: MouseEvent) {
    setCurrentItemIndex(index as any);

    if (optionsLogic.isDefaultItemDisplayLocation) {
      setIsFullscreenMode(true);
    }
  }
  //#endregion

  //#region JSX
  return (
    <div
      onClick={(e) => onPress(e as any)}
      className={CLASSNAME__CAROUSEL_ITEM}
      style={stylingLogic.carouselItemStyle}
    >
      {description ? (
        <div style={stylingLogic.thumbnailOverlayBackgroundStyle}>
          <p style={stylingLogic.thumbnailOverlayTextStyle}>{description}</p>
        </div>
      ) : null}
      <img
        data-index={index}
        draggable={false}
        style={stylingLogic.carouselItemCursorStyle}
        className={CLASSNAME__CAROUSEL_ITEM_THUMBNAIL}
        src={srcThumbnail || resolveSrcMain(srcMain)}
        alt={description || "user picture or video"}
      />
    </div>
  );
  //#endregion
};
