import React from "react";
import { useInView } from "react-intersection-observer";
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
  
  // Set up Intersection Observer hook
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
      ref={inViewRef}
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
        // Only set the src if the item is in view; otherwise, leave it undefined
        src={inView ? (srcThumbnail || resolveSrcMain(srcMain)) : undefined}
        alt={description || "user picture or video"}
      />
    </div>
  );
  //#endregion
};