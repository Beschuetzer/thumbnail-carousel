type CustomPropertyName = string;
type CustomPropertyValue = string | null;
type CustomPropertyPriority = string;
export type UseSetCustomCssPropertyInput = {
    element: HTMLElement | undefined;
    properties: [CustomPropertyName, CustomPropertyValue, CustomPropertyPriority?][];
};
export declare const useSetCustomCssProperties: (input: UseSetCustomCssPropertyInput) => void;
export {};
