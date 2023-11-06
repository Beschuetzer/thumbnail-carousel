/// <reference types="react" />
import { CarouselItemProps } from './CarouselItem';
import { CarouselItemViewerToolbarProps } from './item-viewer/toolbar/CarouselItemViewerToolbar';
/**
*A video item can be composed of a low resolution and high resolution video.  This is isn't necessary, but can optimize load times for th
**/
export type CarouselVideo = {
    /**
    *This version will be used when the video is fullscreen if given.  If no {@link CarouselVideo.loRes low resolution} version is given,
    this will be used when {@link CarouselLayoutOptions.itemDisplayLocation itemDisplayLocation} is not {@link CarouselItemDisplayLocation none}.
    **/
    hiRes?: string;
    /**
    *This version will be used in fullscreen mode if no {@link CarouselVideo.hiRes high resolution} version is given.
    *This version will be preferred when {@link CarouselLayoutOptions.itemDisplayLocation itemDisplayLocation} is not {@link CarouselItemDisplayLocation none}.
    *
    * As the resolution of a video increase (specified by {@link CarouselItemProps.srcMain srcMain}), the performance of the preview may get choppy.
    * This manifests in two ways: 1) the previews don't update as frequently and 2) the smoothness of rendering the previewer is dimished.
    * Passing in a lower resolution version of the video here will fix this.
    * See this {@link https://www.veed.io/tools/video-compressor/mp4-compressor compressor} for a free video compression option.
    **/
    loRes?: string;
};
/**
*The first value is the description of the section and second value is either the duration or the start time (respectively).
**/
export type CarouselVideoSection = [string, number] | [string, string];
export type CarouselVideoOptions = {
    /**
    * If `true` and `muted` is `undefined` or `true`, the video will start playing when it first comes into focus.
    * e.g. when user scrolls down to it or when the user clicks the thumbnail to load it.
    **/
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    /**
    *Each section is comprised of a description string and a duration (in ms).
    *Each section starts 1ms after the previous section ended.
    *See {@link useSectionToValueMapping useSectionToValueMapping} for details.
    *@example
    *When using strings, the first item always starts at zero, so it can be omitted.
    *sections: [
    *    ['Starting Section'], //starts at 0 and goes to 1 minute 59 seconds and 999 milliseconds
    *    ['Section Two', "02:00"], //starts at 2 seconds and goes to 6 minutes 59 seconds and 999 milliseconds
    *    ['Section Three', "07:00"], //starts at 7 seconds and ends at 1 minute 18 seconds and 999 milliseconds
    *    ['Section Four', "01:19:00"], //starts at 1 minute and 19 seconds and goes to the end
    *]
    *
    *When using numbers, the value specifies the length of the section rather than the start time.
    *The last item may be omittted since it will start after the previous sections end and end at the end of the video.
    *sections: [
    *    ['Starting Section', 2000], //section is 2 seconds long (starts at 0 and ends at 2 seconds)
    *    ['Section Two', 5000], //section is 5 seconds long (starts at the previous section's end - 1 millisecond and lasts 5 seconds, so would stop at 7 seconds in this case)
    *    ['Section Three'], //section fills up the remaining space (starts at 7 seconds and 1 millesecond and goes to end of video)
    *]
    **/
    sections?: CarouselVideoSection[];
};
export type CarouselVideoProps = {
    isVideoPlaying: boolean;
    isVideoStateChangeInitiatedInternallyRef: React.MutableRefObject<boolean>;
    setIsVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const CarouselVideo: (props: CarouselVideoProps & CarouselItemProps & Pick<CarouselItemViewerToolbarProps, 'itemContainerRef'>) => import("react").JSX.Element;
