import { ReactNode } from 'react';
type CarouselItemViewerContainerProps = {
    children: ReactNode | ReactNode[];
    onClick?: (e: MouseEvent) => void;
};
export declare const CarouselItemViewerContainer: import("react").ForwardRefExoticComponent<CarouselItemViewerContainerProps & import("react").RefAttributes<any>>;
export {};
