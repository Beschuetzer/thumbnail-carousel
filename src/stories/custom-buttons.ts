import { COLORS } from "./assets/colors";
export const customButtons = {
  closeButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-close",
  },
  fullScreenButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-fullscreen",
    fillColor: COLORS.primary1,
    style: {
      transform: `translate3d(25%, 25%, 0) scale(1.25)`,
    },
  },
  nextButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-skip-forward",
  },
  pauseButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-pause",
  },
  playButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-play",
  },
  previousButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-skip-backward",
  },
  restartButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-restart",
  },
  seekBackButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-backward",
  },
  seekForwardButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-forward",
  },
  stopButton: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-stop",
  },
  dots: {
    style: {
      transform: "scale(1.75)",
    },
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-dot-single",
    fillColor: COLORS.primary1,
  },
  arrowLeft: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-angle-right",
    fillColor: COLORS.primary1,
    style: {
      transform: "rotate(180deg) translateY(-5%)",
    },
  },
  arrowRight: {
    svgHref: "static/media/src/stories/assets/sprite.svg#icon-angle-right",
    fillColor: COLORS.primary1,
  },
};
