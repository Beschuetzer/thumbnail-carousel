import { CSSProperties } from "react";
import { CarouselElementCustomization } from "../../../types";
export type CarouselItemViewerCustomButtonProps = {
    classNamesToInclude?: string[];
    fillColor?: string;
    onClick?: () => void;
    showButton?: boolean;
    style?: CSSProperties;
    xlinkHref: CarouselElementCustomization['svgHref'];
    useElementStyle?: CSSProperties;
};
export declare const CarouselItemViewerCustomButton: import("react").ForwardRefExoticComponent<CarouselItemViewerCustomButtonProps & import("react").RefAttributes<SVGSVGElement>>;
