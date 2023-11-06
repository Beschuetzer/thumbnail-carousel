/// <reference types="react" />
import { ArrowProps, CarouselNavigationProps } from '../types';
type CarouselArrowButtonProps = {
    onClick: () => void;
} & ArrowProps & CarouselNavigationProps;
export declare const CarouselArrowButton: (props: CarouselArrowButtonProps) => import("react").JSX.Element;
export {};
