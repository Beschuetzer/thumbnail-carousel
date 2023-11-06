/// <reference types="react" />
export type UseSetToolbarWidthInput = {
    progressBarRef?: React.MutableRefObject<HTMLDivElement | undefined>;
};
export declare const useSetToolbarWidth: (input: UseSetToolbarWidthInput) => number;
