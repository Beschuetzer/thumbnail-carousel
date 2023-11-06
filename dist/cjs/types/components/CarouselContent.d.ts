/// <reference types="react" />
import { CarouselProps } from './Carousel';
import { CarouselContextInputProps } from '../context';
/**
*Tracks why the translation amount changed.
*Used to fix issue with translation amount when {@link CarouselNavigationOptions.isLastPageFlush isLastPageFlush} is `true`.
**/
export declare enum TranslationAmountChange {
    currentItemIndex = 0,
    currentPage = 1,
    isLastPageFlushAdjustment = 2,
    swipe = 3,
    none = 4
}
type CarouselContentProps = {} & Omit<CarouselProps, 'style' | 'onItemChange'> & Pick<CarouselContextInputProps, 'carouselContainerRef'>;
export declare const CarouselContent: (props: CarouselContentProps) => import("react").JSX.Element;
export {};
