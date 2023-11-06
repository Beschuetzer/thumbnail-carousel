/// <reference types="react" />
import { OptionsLogic } from "../business-logic/OptionsLogic";
import { StylingLogic } from "../business-logic/StylingLogic";
import { CarouselItemProps } from "../components/CarouselItem";
import { Coordinate, Point, ArrowButtonDirection, KeyInput, CarouselModalGetCodeSectionInput, CarouselModalGetCodeSectionsInput, CarouselModalSectionProps } from "../types";
type GetClassname = {
    elementName?: string;
    modifiedName?: string;
};
export declare function capitalize(str: string | undefined | null): string;
export declare function convertColorNameToHex(color: string): string | undefined;
export declare function convertHexToRgba(hex: string, opacity?: number): string;
/**
*Takes a time stamp that uses the following format `mm:ss:ms`.
*Will display an alert if the value for that section is invalid
*@returns a number representing the number of ms that a time string represents
*@example
*'999' // => 999 milliseconds
*'23:920' // => 23 seconds and 920 milliseconds
*'1:23:920' // => 1 minute 23 seconds and 920 milliseconds
*'01:23:920' // => 1 minute 23 seconds and 920 milliseconds
*'01:63:920' // throws since 63 seconds is larger than 59 (max for seconds)
*'01:59:1000' // throws since 1000 seconds is larger than 999 (max for milliseconds)
**/
export declare function convertTimeStringToMilliseconds(timestamp: string): number;
/**
*Checks whether any nodes above `elementToCheck` contain `classname`.  Stops when node matches `stoppingElementType`, which defaults to `body`.
**/
export declare function getAncestorContainsClassname(elementToCheck: HTMLElement | null, classname: string, stoppingElementType?: string): boolean;
/**
*Returns a value that is within the min and max values.
**/
export declare function getBoundValue(value: NonNullable<number>, min: NonNullable<number>, max: NonNullable<number>): number;
export declare function getClassname({ elementName, modifiedName }: GetClassname): string;
/**
*This is used to convert the {@link CarouselModalSectionProps.codeSection codeSections} object
*into a code block/section inside the {@link CarouselModal}.
**/
export declare function getCodeSections(input: CarouselModalGetCodeSectionsInput): (({
    textElementType?: import("react").ElementType | undefined;
    title?: string | undefined;
    titleElementType?: import("react").ElementType | undefined;
    text?: string | undefined;
    textContainerStyles?: import("react").CSSProperties | undefined;
    textStyles?: import("react").CSSProperties | undefined;
} & {
    codeSection?: undefined;
}) | ({
    codeSection: CarouselModalGetCodeSectionsInput;
} & {
    text?: undefined;
    title?: undefined;
    textElementType?: undefined;
    titleElementType?: undefined;
    textContainerStyles?: undefined;
    textStyles?: undefined;
}))[];
export declare function getCodeSection(input: CarouselModalGetCodeSectionInput): CarouselModalSectionProps;
export declare function getContainerWidth(htmlElement: HTMLElement | undefined, stylingLogic: StylingLogic): number;
export declare function getCoordinateDifference(mostRecentCoordinate: Coordinate, previousCoordinate: Coordinate): {
    distance: number;
    xDiff: number;
    yDiff: number;
};
export declare function getIsMobile(): boolean;
export declare function getFormattedTimeString(seconds: number): string;
export declare function getIsPointInsideElement(point: Point, element: Element | null | undefined): boolean;
export declare function getIsVideo(item: CarouselItemProps | undefined): boolean;
export declare function getIsVideoPlaying(video: HTMLVideoElement | undefined): boolean;
export declare function getMostFrequentItem(numbers: number[], defaultToUse?: number): number;
export declare function getNumberOfItemsThatCanFit(itemsLength: number, htmlElement: HTMLElement | undefined, stylingLogic: StylingLogic, optionsLogic: OptionsLogic): {
    containerWidth: number;
    itemSize: number;
    numberOfWholeItemsThatCanFit: number;
};
export declare function getNumberOfPages(carouselContainerElement: HTMLElement, itemsLength: number, stylingLogic: StylingLogic, optionsLogic: OptionsLogic): number;
export declare function getPoint(e: TouchEvent | MouseEvent | undefined): Point;
export declare function getShortcutsString(shortcuts: KeyInput[]): string;
export declare function enterFullScreen(element: HTMLElement | null): Promise<void>;
export declare function exitFullScreen(element: HTMLElement | null): Promise<void>;
export declare function onArrowButtonClick(direction: ArrowButtonDirection, currentPage: number, numberOfPages: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>): void;
export declare const replaceCharacters: (str: string, characterMappings?: [string, string][]) => string;
export declare function setCssCustomProperty(propertyName: string, newValue: string): void;
export declare function stopPropagation(e?: Event): void;
export declare function tryPlayingVideo(videoRef: HTMLVideoElement | undefined, onSuccess?: () => void, onFailure?: () => void): Promise<void>;
export {};
