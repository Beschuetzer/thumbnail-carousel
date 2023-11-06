import React, { ReactNode } from 'react';
import { CarouselTitleOptions as CarouselContainerOptions } from '../types';
type CarouselTitleContainerProps = {
    children: ReactNode | ReactNode[];
    container?: CarouselContainerOptions;
};
export declare const CarouselContainer: (props: CarouselTitleContainerProps) => React.JSX.Element;
export {};
