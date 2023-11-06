import React from 'react';
import { CarouselDotsProps } from './CarouselDots';
export declare const CarouselItems: React.ForwardRefExoticComponent<{
    interItemSpacing: number;
    translationAmount: number;
    isLastPage: boolean;
    translationAmountChangeRef: React.MutableRefObject<number>;
} & Pick<CarouselDotsProps, "items"> & React.RefAttributes<HTMLDivElement>>;
