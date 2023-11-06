import { CarouselContextOutputProps } from "../context";
import { StylingLogic, StylingLogicConstructor } from "../business-logic/StylingLogic";
import { ToolbarLogic, ToolbarLogicConstructor } from "../business-logic/ToolbarLogic";
import { OptionsLogic, OptionsConstructor } from "../business-logic/OptionsLogic";
import { ToolbarActionsLogic, ToolbarActionsLogicConstructor } from "../business-logic/ToolbarActionsLogic";
import { CarouselProps } from "../components/Carousel";
export type UseBusinessLogicResponse = {
    optionsLogic: OptionsLogic;
    stylingLogic: StylingLogic;
    toolbarLogic: ToolbarLogic;
    toolbarActionsLogic: ToolbarActionsLogic;
};
export type UseBusinessLogicInput = {
    options?: CarouselProps["options"];
} & Partial<Omit<OptionsConstructor & StylingLogicConstructor & ToolbarActionsLogicConstructor & ToolbarLogicConstructor, keyof CarouselContextOutputProps | 'optionsLogic'>>;
/**
*Handles creation of all business logic that is not static.
**/
export declare const useBusinessLogic: (input?: UseBusinessLogicInput) => UseBusinessLogicResponse;
