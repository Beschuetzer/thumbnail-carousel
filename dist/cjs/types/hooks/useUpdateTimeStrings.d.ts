/// <reference types="react" />
import { CarouselItemProps } from "../components/CarouselItem";
import { VideoTimeStrings } from "../types";
export type UseUpdateTimeStringInput = {
    currentItemInInstance: CarouselItemProps | undefined;
    setTimeStrings: React.Dispatch<React.SetStateAction<VideoTimeStrings>>;
    videoRef: React.MutableRefObject<HTMLVideoElement | undefined> | null | undefined;
};
/**
*updating time string on item change when {@link CarouselVideoOptions.autoPlay autoPlay} is `false`.
**/
export declare const useUpdateTimeString: (input: UseUpdateTimeStringInput) => void;
