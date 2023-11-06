/// <reference types="react" />
import { CarouselItemViewerToolbarProps } from "../components/item-viewer/toolbar/CarouselItemViewerToolbar";
type SectionToValueMapping = {
    [number: number]: SectionToValueMappingValue;
};
type SectionToValueMappingValue = {
    start: number;
    end: number;
};
export type UseSectionToValueMappingInput = {} & Pick<CarouselItemViewerToolbarProps, 'videoRef'>;
/**
*Create an object where the keys are the sections and the value is an object with a
*{@link SectionToValueMappingValue start and end value}, representing what percent
*of the video that section spans.
**/
export declare const useSectionToValueMapping: (input: UseSectionToValueMappingInput) => import("react").MutableRefObject<SectionToValueMapping>;
export {};
