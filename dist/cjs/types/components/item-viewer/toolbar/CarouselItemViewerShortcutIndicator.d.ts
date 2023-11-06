import React, { ReactNode } from 'react';
import { KeyInput } from '../../../types';
export type CarouselItemViewerShortcutIndicatorPosition = 'left' | 'center' | 'right';
export type CarouselItemViewerShortcutIndicatorProps = {
    actionName: string;
    children: ReactNode | ReactNode[];
    isShortcutVisible?: boolean;
    isVisible?: boolean;
    position?: CarouselItemViewerShortcutIndicatorPosition;
    shortcuts?: KeyInput[];
    /**
    *This is needed to be able to pass the refs while hiding the button (conditional null rendering doesn't work)
    **/
    showButton?: boolean;
    style?: React.CSSProperties;
};
export declare const CarouselItemViewerShortcutIndicator: (props: CarouselItemViewerShortcutIndicatorProps) => React.JSX.Element;
