export type StylingCase = 'start' | 'end';
declare enum SwipeDirection {
    bottom = "bottom",
    left = "left",
    right = "right",
    top = "top"
}
export type UseOnSwipeHandlerDirection = {
    callback: (e: Event) => void;
    /**
    *If the `mouseDownSourceElement` is a child node of a node with any of the given classnames, then the callback will be skipped.
    *Needed in order to prevent the swipes starting on the toolbar from changing items.
    **/
    skipCallbackParentClassnames?: string[];
};
export type UseOnSwipeHandlers = {
    [direction in SwipeDirection]?: UseOnSwipeHandlerDirection;
} & {
    /**
    *See {@link CarouselSwipingOptions.maxClickThreshold maxClickThreshold} for a description on how this works.
    **/
    maxClickThreshold?: number;
    /**
    *The minimum number of pixels in the given direction that must be made to register a valid swipe event.
    **/
    minSwipeThreshold?: number;
    /**
    *This event is triggered whenever the mouse moves after the initial mousedown event.
    *Positive `xDiff` means the cursor is to the right of where the mousedown event occured.
    *Positive `yDiff` means the cursor is below where the mousedown event occured.
    **/
    onMoveWhenGrabbing?: (xDiff: number, yDiff: number) => void;
};
export type UseOnSwipeInput = {
    element: HTMLElement;
    isDisabled?: boolean;
    handleStyleChanges: (stylingCase: StylingCase, element: HTMLElement) => void;
    maxClickThreshold?: number;
    swipeHandlers?: UseOnSwipeHandlers;
};
export declare const useOnSwipe: (input: UseOnSwipeInput) => void;
export {};
