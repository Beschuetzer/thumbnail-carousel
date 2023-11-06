import { CarouselContextOutputProps } from "../context";
import { CarouselItemViewerActions, CarouselAction, CarouselActionOnActionCompleted, KeyInput } from "../types";
type GetAllKeysResponse = {
    [name in keyof CarouselItemViewerActions]: KeyInput[];
};
type GetAllOnActionCompleted = {
    [name in keyof CarouselItemViewerActions]: CarouselActionOnActionCompleted;
};
type GetAllResonse = {
    keys: GetAllKeysResponse;
    onActionCompleted: GetAllOnActionCompleted;
};
type GetIndividualResponse = Required<CarouselAction>;
export type ToolbarActionsLogicConstructor = {} & Pick<CarouselContextOutputProps, 'options'> & Partial<Pick<CarouselContextOutputProps, 'isFullscreenMode'>>;
export declare class ToolbarActionsLogic {
    isPauseSeparate: boolean;
    private _itemViewerShortcuts;
    private _doNothing;
    private _closeShortcut;
    private _nextItemShortcut;
    private _pauseShortcut;
    private _playShortcut;
    private _previousItemShortcut;
    private _seekBackwardsShortcut;
    private _seekForwardsShortcut;
    private _options;
    private _isFullscreenMode;
    private _emptyAction;
    constructor(constructor: ToolbarActionsLogicConstructor);
    get shouldReturnEmptyAction(): boolean;
    getAll(): GetAllResonse;
    getAllKeys(): GetAllKeysResponse;
    getAllOnActionCompleted(): GetAllOnActionCompleted;
    getClose(): GetIndividualResponse;
    getNextItem(): GetIndividualResponse;
    getPause(): GetIndividualResponse;
    getPlay(): GetIndividualResponse;
    getPreviousItem(): GetIndividualResponse;
    getSeekForwards(): GetIndividualResponse;
    getSeekBackwards(): GetIndividualResponse;
}
export {};
