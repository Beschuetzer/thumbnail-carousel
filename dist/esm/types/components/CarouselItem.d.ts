/// <reference types="react" />
import { CarouselVideo, CarouselVideoOptions } from './CarouselVideo';
import { CarouselModalProps } from './modal/CarouselModal';
import { CarouselElementValue } from '../types';
export type CarouselItemSourceMain = string | CarouselVideo;
export type CarouselItemProps = {
    /**
    *These stylings are passed to the underlying item tag (e.g. <img> and <video>).
    *Most useful for setting an item's {@link React.CSSProperties.objectFit objectFit} and {@link React.CSSProperties.objectPosition objectPosition} styles.
    *See {@link OptionsLogic.itemStyles} for details.
    **/
    itemStyles?: CarouselElementValue<React.CSSProperties>;
    /**
    *A summary of the item.  This is displayed in the thumbnail and in the item viewer.
    **/
    description: string | undefined;
    /**
    *This is generated automatically if omitted.
    *If given, it will determine the next/previous item to go to when clicking the next/previous button
    **/
    index?: number;
    /**
    *Props used to modify the modal displayed for this item.  If undefined, then modal is not displayed.
    **/
    modal?: CarouselModalProps;
    /**
    * This is the source of the image/video.  If item is a video, then adding a {@link CarouselItemProps.srcThumbnail thumbnail} is needed.  Otherwise the main image will be used as a thumbnail.
    **/
    srcMain: CarouselItemSourceMain;
    /**
    * This is the source of the thumbnail image to be used when viewing thumbnails only.
    **/
    srcThumbnail?: string | undefined;
    /**
    *The options for video items.
    **/
    video?: CarouselVideoOptions;
};
export declare const CarouselItem: (props: CarouselItemProps) => import("react").JSX.Element;
