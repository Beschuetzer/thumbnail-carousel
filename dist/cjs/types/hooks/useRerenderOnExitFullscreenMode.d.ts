/**
*This is a hack to get the image/video to re-render after exiting full screen when {@link CarouselLayoutOptions.itemDisplayLocation itemDisplayLocation} is not {@link CarouselItemDisplayLocation none}}.
*the issue seems to stem from the fact that the height of the `itemViewer`
*depends on the `toolbarRef` but the toolbar is a child of
*{@link CarouselVideo}/{@link CarouselImage}, so the style is calculated before the child has finished rendering.
**/
export declare const useRerenderOnExitFullscreenMode: () => void;
