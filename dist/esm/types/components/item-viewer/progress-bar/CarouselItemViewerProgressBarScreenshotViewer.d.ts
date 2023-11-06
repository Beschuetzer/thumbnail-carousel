import React from 'react';
import { CarouselItemViewerToolbarProps } from '../toolbar/CarouselItemViewerToolbar';
import { CarouselItemProps } from '../../CarouselItem';
export type CarouselItemViewerProgressBarScreenshotPreviewProps = {
    toolbarRef: React.MutableRefObject<HTMLDivElement>;
    type: string | undefined;
} & Pick<CarouselItemViewerToolbarProps, 'videoRef' | 'currentVideoSection' | 'percent'> & Pick<CarouselItemProps, 'srcMain'>;
export type TextTranslateOffset = {
    left: number;
    maxCursorLeftValue: number;
    minCursorLeftValue: number;
    right: number;
};
export declare const TEXT_TRANSLATION_AMOUNT_REF_INITIAL = 0;
export declare const CarouselVideoProgressBarScreenshotViewerMemoized: React.MemoExoticComponent<(props: CarouselItemViewerProgressBarScreenshotPreviewProps) => React.JSX.Element>;
