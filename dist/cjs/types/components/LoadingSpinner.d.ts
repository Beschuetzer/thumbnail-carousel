/// <reference types="react" />
export type LoadingSpinnerOptions = {
    /**
    *Changes both text and spinner color.
    **/
    color?: string;
    /**
    *The margin of the container.
    *Default is 8px;
    **/
    containerMargin?: number | string;
    /**
    *The length and width of the container.
    *Default is 100px;
    **/
    containerLength?: number;
    /**
    *How big the circle is.
    *Default is 64px;
    **/
    radius?: number;
    /**
    *Changes the spinner color.  Overrides any value for 'color'.
    **/
    spinnerColor?: string;
    /**
    *Changes text color.  Overrides any value for 'color'.
    **/
    textColor?: string;
    /**
    *How thick the line is.
    *Default is 8px;
    **/
    width?: number;
};
type LoadingSpinnerCommonProps = {
    description?: string;
    show?: boolean;
};
export type LoadingSpinnerProps = {
    type?: 'ring';
    options?: LoadingSpinnerOptions;
} & LoadingSpinnerCommonProps | {
    type?: 'roller';
    options?: {};
} & LoadingSpinnerCommonProps | {
    type?: 'circle';
    options?: LoadingSpinnerOptions;
} & LoadingSpinnerCommonProps | {
    type?: 'grid';
    options?: LoadingSpinnerOptions;
} & LoadingSpinnerCommonProps;
export declare const LoadingSpinner: (props: LoadingSpinnerProps) => import("react").JSX.Element;
export {};
