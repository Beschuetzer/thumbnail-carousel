import { CarouselItemProps } from "../components/CarouselItem";
/**
*Calculates the recommended aspect ratio based on the items given.
*Only runs if {@link OptionsLogic.itemViewerUseRecommendedAspectRatio itemViewerUseRecommendedAspectRatio} is `true`.
**/
export declare const useRecommendedAspectRatio: (items: CarouselItemProps[]) => number;
