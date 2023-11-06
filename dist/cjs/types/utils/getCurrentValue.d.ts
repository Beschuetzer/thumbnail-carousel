import { CarouselElementValue } from "../types";
/**
*Gets the current value for the current window width from the list of tuples.
*Tuples given are sorted by `max-width`, then `min-width`, then unspecified
*`max-width` tuples are sorted ascending by breakpoint and `min-width` descending by breakpoint.
*Tuples with a breakpoint specified but no type are considered to be `max-width` type.
*If there is more than one tuple with just a value, the first one in the sorted array is used (e.g. for numbers it is the smallest one).
*When extending the supported types, the only thing that needs to be modified is adding another case in the switch statement for said type.

@param valueTuple - The values from which to pick an item (not mutated)
@param defaultValue - The value to use as a fallback if `valueTuple` is undefined
@param isFullscreenMode - Whether the carousel is in fullscreen mode or not
**/
export declare function getCurrentValue<T>(valueTuple: CarouselElementValue<T> | undefined, defaultValue: T, isFullscreenMode: boolean): T;
