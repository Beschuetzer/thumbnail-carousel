import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useBusinessLogic } from "../../../hooks/useBusinessLogic";
import { getFormattedTimeString } from "../../../utils/utils";
import { useCarouselContext } from "../../../context";
import { CarouselItemViewerToolbarProps } from "../toolbar/CarouselItemViewerToolbar";
import {
  CLASSNAME__VIDEO_SCREENSHOT_VIEWER,
  CLASSNAME__VIDEO_SCREENSHOT_VIEWER_TEXT_CONTAINER,
} from "../../../constants";
import { CarouselItemProps } from "../../../types";
import { useSetVideoCurrentTime } from "../../../hooks/useSetVideoCurrentTime";
import { resolveSrcMain } from "../../../utils/getCarouselVideo";

export type CarouselItemViewerProgressBarScreenshotPreviewProps = {
  toolbarRef: React.MutableRefObject<HTMLDivElement>;
  type: string | undefined;
} & Pick<
  CarouselItemViewerToolbarProps,
  "videoRef" | "currentVideoSection" | "percent"
> &
  Pick<CarouselItemProps, "srcMain">;

export type TextTranslateOffset = {
  maxCursorValue: number;
  minCursorValue: number;
  textOverflow: number;
};

export const TEXT_TRANSLATION_AMOUNT_REF_INITIAL = 0;
const CarouselVideoProgressBarScreenshotViewer = (
  props: CarouselItemViewerProgressBarScreenshotPreviewProps,
) => {
  //#region Init
  const {
    currentVideoSection,
    percent = 0,
    srcMain,
    toolbarRef,
    type,
    videoRef,
  } = props;
  const { currentItem } = useCarouselContext();
  const { sections } = currentItem?.video || {};

  const { stylingLogic } = useBusinessLogic();
  const screenShotTextContainerRef = useRef<HTMLDivElement>();
  const textTranslateOffsetRef = useRef<TextTranslateOffset>(
    {} as TextTranslateOffset,
  );
  const videoThumbnailRef = useRef<HTMLVideoElement>();
  useSetVideoCurrentTime({ percent, video: videoThumbnailRef?.current });
  //#endregion

  //#region Functions/Handlers
  //#endregion

  //#region Side FX
  useEffect(() => {
    if (!sections || (sections && sections?.length <= 1)) {
      return;
    }

    const screenShotTextContainerRect = screenShotTextContainerRef.current
      ?.querySelector("div")
      ?.getBoundingClientRect();
    const screenShotCanvasRect =
      videoThumbnailRef.current?.getBoundingClientRect();
    const videoRect = videoRef?.current?.getBoundingClientRect();

    if (!screenShotCanvasRect || !screenShotTextContainerRect || !videoRect) {
      return;
    }

    const textOverflow = Math.max(
      (screenShotTextContainerRect.width - screenShotCanvasRect.width) / 2,
      0,
    );

    textTranslateOffsetRef.current = {
      minCursorValue: screenShotCanvasRect.width / 2 + textOverflow,
      maxCursorValue:
        videoRect.right - (screenShotCanvasRect.width / 2 + textOverflow),
      textOverflow,
    };
  }, [currentVideoSection, currentItem]);
  //#endregion

  //#region JSX
  return (
    <div
      className={CLASSNAME__VIDEO_SCREENSHOT_VIEWER}
      style={stylingLogic.getCarouselVideoProgressScreenshotViewerContainerStyle(
        percent,
        videoRef,
        toolbarRef.current,
        screenShotTextContainerRef.current?.querySelector("div"),
        videoThumbnailRef.current,
        textTranslateOffsetRef,
      )}
    >
      <video
        style={stylingLogic.carouselVideoProgressScreenshotViewerVideoStyle}
        ref={videoThumbnailRef as any}
        autoPlay={false}
        muted={true}
        loop={false}
      >
        <source src={resolveSrcMain(srcMain)} type={`video/${type}`} />
      </video>
      <div
        ref={screenShotTextContainerRef as any}
        className={CLASSNAME__VIDEO_SCREENSHOT_VIEWER_TEXT_CONTAINER}
        style={
          stylingLogic.carouselVideoProgressScreenshotViewerTextContainerStyle
        }
      >
        <div>
          {currentVideoSection !== undefined
            ? sections?.[currentVideoSection]?.[0]
            : ""}
        </div>
        <div>
          {videoRef?.current && !isNaN(percent * videoRef?.current?.duration)
            ? getFormattedTimeString(percent * videoRef?.current?.duration)
            : ""}
        </div>
      </div>
    </div>
  );
  //#endregion
};

export const CarouselVideoProgressBarScreenshotViewerMemoized = React.memo(
  CarouselVideoProgressBarScreenshotViewer,
);
