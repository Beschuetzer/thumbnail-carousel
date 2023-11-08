import { COLORS } from "./assets/colors";

export const customButtons = {
  closeButton: {
    svgHref: "./sprite.svg#icon-close",
  },
  fullScreenButton: {
    svgHref: "./sprite.svg#icon-fullscreen",
    fillColor: COLORS.primary1,
    style: {
      transform: `translate(25%, 25%) scale(1.25)`,
    },
  },
  nextButton: {
    svgHref: "./sprite.svg#icon-skip-forward",
  },
  pauseButton: {
    svgHref: "./sprite.svg#icon-pause",
  },
  playButton: {
    svgHref: "./sprite.svg#icon-play",
  },
  previousButton: {
    svgHref: "./sprite.svg#icon-skip-backward",
  },
  restartButton: {
    svgHref: "./sprite.svg#icon-restart",
  },
  seekBackButton: {
    svgHref: "./sprite.svg#icon-backward",
  },
  seekForwardButton: {
    svgHref: "./sprite.svg#icon-forward",
  },
  stopButton: {
    svgHref: "./sprite.svg#icon-stop",
  },
  dots: {
    style: {
      transform: "scale(1.75)",
    },
    svgHref: "./sprite.svg#icon-dot-single",
    fillColor: COLORS.primary1,
  },
  arrowLeft: {
    svgHref: "./sprite.svg#icon-angle-right",
    fillColor: COLORS.primary1,
    style: {
      transform: "rotate(180deg) translateY(-5%)",
    },
  },
  arrowRight: {
    svgHref: "./sprite.svg#icon-angle-right",
    fillColor: COLORS.primary1,
  },
};
