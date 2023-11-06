/// <reference types="react" />
type ElementToUse = Element | undefined | null;
export type UseResetCarouselVideoCurrentSectionInput = {
    element: ElementToUse;
    progressBarElement: ElementToUse;
    currentSection: number;
    setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
    isMouseDownRef: React.MutableRefObject<boolean>;
};
export declare const useResetCarouselVideoCurrentSection: (input: UseResetCarouselVideoCurrentSectionInput) => void;
export {};
