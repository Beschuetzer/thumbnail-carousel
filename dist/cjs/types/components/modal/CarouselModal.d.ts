import { ReactNode } from 'react';
import { CarouselModalSectionProps, Exclusive } from '../../types';
import { CarouselItemViewerToolbarProps } from '../item-viewer/toolbar/CarouselItemViewerToolbar';
export type CarouselModalProps = Exclusive<{
    /**
    *Use this when you want to use a custom modal layout.
    **/
    children?: ReactNode | ReactNode[];
}, {
    /**
    *Use this when you want to use the default modal layout.
    *@example
    *sections: [
    *    {
    *        title: "Section 1 Title",
    *        text: "Section 1 description."
    *    },
    *    {
    *        title: "Section 2 Title",
    *        text: "Section 2 description."
    *    }
    *],
    **/
    sections?: CarouselModalSectionProps[];
}> & {
    /**
    *The amount of pixels that the close button is from the top.  Default is {@link CAROUSEL_MODAL_PADDING_DEFAULT.top here}.
    **/
    closeButtonTop?: number;
};
export type CarouselModalInternalProps = {
    isProgressBarBeingHoveredRef?: React.MutableRefObject<boolean>;
    /**
    *This is used internally and determines when the modal is shown
    **/
    isVideoPlaying?: boolean;
    itemViewerToolbarRef?: React.MutableRefObject<HTMLElement | undefined>;
    itemRef?: React.MutableRefObject<HTMLElement | undefined>;
    shouldHideWhenMinimized?: boolean;
} & CarouselModalProps & Pick<CarouselItemViewerToolbarProps, 'isProgressBarMouseDownRef'>;
export declare const CarouselModal: (props: CarouselModalInternalProps) => import("react").JSX.Element;
