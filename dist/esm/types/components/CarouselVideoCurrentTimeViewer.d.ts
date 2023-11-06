import React from 'react';
import { CarouselItemViewerProgressBarScreenshotPreviewProps } from './item-viewer/progress-bar/CarouselItemViewerProgressBarScreenshotViewer';
import { CarouselItemViewerToolbarProps } from './item-viewer/toolbar/CarouselItemViewerToolbar';
type CarouselVideoCurrentTimeViewerPropsProps = {
    isVideoPlaying: boolean;
    itemContainerHeight: string | number;
} & Pick<CarouselItemViewerProgressBarScreenshotPreviewProps, 'percent' | 'type' | 'srcMain'> & Pick<CarouselItemViewerToolbarProps, 'isProgressBarMouseDownRef'>;
export declare const CarouselVideoCurrentTimeViewer: (props: CarouselVideoCurrentTimeViewerPropsProps) => React.JSX.Element;
export {};
