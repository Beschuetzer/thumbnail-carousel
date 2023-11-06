import { KeyboardShortcut } from "../types";
export type UseKeyboardShortcutsInput = {
    keyboardShortcuts: KeyboardShortcut[];
    skipCondition: () => boolean;
};
/**
 *Creates keyboard shortcuts for a component.
 *If {@link UseKeyboardShortcutsInput.skipCondition skipCondition} resolves to `true`, then the listener is not added for that render cycle.
**/
export declare const useKeyboardShortcuts: (input: UseKeyboardShortcutsInput) => void;
