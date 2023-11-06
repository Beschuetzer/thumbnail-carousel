export type UseSetVideoCurrentTimeInput = {
    percent: number | undefined;
    video: HTMLVideoElement | undefined;
};
/**
*Used to "seek" video items
**/
export declare const useSetVideoCurrentTime: (input: UseSetVideoCurrentTimeInput) => void;
