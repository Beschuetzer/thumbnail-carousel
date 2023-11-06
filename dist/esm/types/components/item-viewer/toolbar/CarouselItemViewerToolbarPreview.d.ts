/// <reference types="react" />
import { CarouselItemProps } from '../../CarouselItem';
import { CarouselItemViewerButtonProps, KeyInput } from '../../../types';
export declare enum ToolbarPreviewDirection {
    none = 0,
    previous = 1,
    next = 2
}
type CarouselItemViewerToolbarPreviewProps = {
    isLoaded: boolean;
    itemToShow: CarouselItemProps;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
    shortcuts: KeyInput[];
    show: boolean;
} & Partial<Pick<CarouselItemViewerButtonProps, 'actionName'>>;
export declare const CarouselItemViewerToolbarPreview: (props: CarouselItemViewerToolbarPreviewProps) => import("react").JSX.Element;
export {};
