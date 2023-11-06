/// <reference types="react" />
import { CarouselItemViewerToolbarProps } from './CarouselItemViewerToolbar';
export declare const CarouselItemViewerFullscreenButton: import("react").ForwardRefExoticComponent<{
    onClick?: (() => void) | undefined;
} & Partial<Omit<import("./CarouselItemViewerShortcutIndicator").CarouselItemViewerShortcutIndicatorProps, "children" | "shortcuts">> & Pick<CarouselItemViewerToolbarProps, "videoRef"> & import("react").RefAttributes<any>>;
