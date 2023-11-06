import React from 'react';
import { CarouselItemProps } from './CarouselItem';
import { ArrowProps, CarouselNavigationProps } from '../types';
export type CarouselDotsProps = {
    items: CarouselItemProps[];
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    style?: React.CSSProperties;
} & CarouselNavigationProps & Pick<ArrowProps, 'options'>;
export declare const CarouselDots: (props: CarouselDotsProps) => React.JSX.Element | null;
