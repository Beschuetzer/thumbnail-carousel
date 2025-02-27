import React from "react";
import { useBusinessLogic } from "../../../hooks/useBusinessLogic";

type CarouselVideoProgressBarScreenshotViewerBackdropPropsProps = {
  isVisible: boolean;
};

export default function CarouselVideoProgressBarScreenshotViewerBackdrop(
  props: CarouselVideoProgressBarScreenshotViewerBackdropPropsProps
) {
  const { isVisible } = props;
  const { stylingLogic } = useBusinessLogic();
  if (!isVisible) return null;
  return (
    <div
      style={stylingLogic.getCarouselVideoProgressScreenshotViewerBackdropStyle()}
    />
  );
}
