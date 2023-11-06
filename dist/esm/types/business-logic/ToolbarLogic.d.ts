import { CarouselItemProps } from "../components/CarouselItem";
export type ToolbarLogicConstructor = {
    items: CarouselItemProps[];
};
export declare class ToolbarLogic {
    private items;
    constructor({ items, }: ToolbarLogicConstructor);
    getShouldDisplayNextAndBackButton(): boolean;
    getShouldSkipKeyboardShortcuts(): boolean;
}
