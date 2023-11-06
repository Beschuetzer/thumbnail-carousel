import React, { ReactNode } from 'react';
import { CarouselModalSectionProps } from '../../types';
type Props = {
    button: ReactNode | ReactNode[];
    index: number;
};
export declare const CarouselModalSection: (props: CarouselModalSectionProps & Props) => React.JSX.Element | React.JSX.Element[];
export {};
