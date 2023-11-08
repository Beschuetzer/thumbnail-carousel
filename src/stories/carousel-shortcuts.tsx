import { ValidKey, ModifierKey, CarouselActions } from "../types";

export const carouselShortcuts = {
  itemViewer: {
    closeButton: {
      keys: [ValidKey.l, [ModifierKey.alt, ValidKey.l]],
      onActionCompleted() {
        console.log("closeButton - custom onActionCompleted");
      },
    },
    nextButton: {
      keys: [ValidKey.e, [ModifierKey.alt, ValidKey.e]],
      onActionCompleted() {
        console.log("nextButton - custom onActionCompleted");
      },
    },
    pauseButton: {
      keys: [ValidKey.a, [ModifierKey.alt, ValidKey.a]],
      onActionCompleted() {
        console.log("pauseButton - custom onActionCompleted");
      },
    },
    playButton: {
      keys: [ValidKey.p, [ModifierKey.alt, ValidKey.p]],
      onActionCompleted() {
        console.log("playButton - custom onActionCompleted");
      },
    },
    previousButton: {
      keys: [ValidKey.r, [ModifierKey.alt, ValidKey.r]],
      onActionCompleted() {
        console.log("previousButton - custom onActionCompleted");
      },
    },
    seekBackButton: {
      keys: [ValidKey.k, [ModifierKey.alt, ValidKey.k]],
      onActionCompleted: () => {
        console.log("backButton - custom onActionCompleted");
      },
    },
    seekForwardButton: {
      keys: [ValidKey.w, [ModifierKey.alt, ValidKey.w]],
      onActionCompleted: () => {
        console.log("forwardButton - custom onActionCompleted");
      },
    },
  },
} as CarouselActions;
