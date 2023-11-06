import React from 'react';
import { VideoTimeStrings } from '../../../types';
import { CarouselItemViewerToolbarProps } from '../toolbar/CarouselItemViewerToolbar';
import { CarouselModalInternalProps } from '../../modal/CarouselModal';
type CarouselItemViewerProgressBarProps = {
    isMouseDownRef: React.MutableRefObject<boolean | undefined> | undefined;
    setTimeStrings: React.Dispatch<React.SetStateAction<VideoTimeStrings>>;
} & Pick<CarouselItemViewerToolbarProps, 'videoRef'> & Required<Pick<CarouselItemViewerToolbarProps, 'toggleIsVideoPlaying' | 'currentVideoSection' | 'setCurrentVideoSection' | 'seekPercent' | 'setSeekPercent' | 'percent' | 'setPercent'>> & Pick<CarouselModalInternalProps, 'isProgressBarBeingHoveredRef'>;
export declare const CarouselItemViewerProgressBar: (props: CarouselItemViewerProgressBarProps) => React.JSX.Element;
export {};
