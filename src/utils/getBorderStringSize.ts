import {
  BORDER_STRING_THIN_SIZE,
  BORDER_STRING_MEDIUM_SIZE,
  BORDER_STRING_THICK_SIZE,
  CAROUSEL_SPACING_UNIT,
  BORDER_STRING_DEFAULT_SIZE,
} from "../constants";

/**
 *Use this to figure out how many pixels the border will take up on any given side (width/height is 2x the returned value)
 **/
export function getBorderStringSize(thumbnailBorderString: string | undefined): string {
  if (!thumbnailBorderString) return `${BORDER_STRING_DEFAULT_SIZE}${CAROUSEL_SPACING_UNIT}`;
  const split = thumbnailBorderString?.trim()?.split(" ");

  for (const item of split) {
    if (!!item.match(/^[\s.]*\d+\w*$/i) && !isNaN(parseFloat(item))) {
      return item;
    }
  }

  let size = BORDER_STRING_MEDIUM_SIZE;
  if (!!String(thumbnailBorderString)?.match(/thin/i)) {
    size = BORDER_STRING_THIN_SIZE;
  } else if (!!String(thumbnailBorderString)?.match(/thick/i)) {
    size = BORDER_STRING_THICK_SIZE;
  }

  return `${size}${CAROUSEL_SPACING_UNIT}`;
}
