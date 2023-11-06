/// <reference types="react" />
import { CarouselItemProps } from './CarouselItem';
import { CarouselOptions, CarouselTitleOptions } from '../types';
export type CarouselProps = {
    items: CarouselItemProps[];
    options?: CarouselOptions;
    title?: CarouselTitleOptions;
};
export declare const Carousel: (props: CarouselProps) => import("react").JSX.Element;
