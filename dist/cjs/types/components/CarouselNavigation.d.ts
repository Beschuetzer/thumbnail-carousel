import React from 'react';
import { CarouselNavigationProps } from '../types';
import { CarouselDotsProps } from './CarouselDots';
type Props = {
    numberOfPages: number;
} & CarouselNavigationProps & Pick<CarouselDotsProps, 'currentPage' | 'items' | 'options' | 'setCurrentPage'>;
export declare const CarouselNavigation: (props: Props) => React.JSX.Element | null;
export declare const CarouselNavigationMemoized: React.MemoExoticComponent<(props: Props) => React.JSX.Element | null>;
export {};
