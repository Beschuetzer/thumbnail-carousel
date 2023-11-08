import {
    BORDER_STRING_DEFAULT_SIZE,
  BORDER_STRING_MEDIUM_SIZE,
  BORDER_STRING_THICK_SIZE,
  BORDER_STRING_THIN_SIZE,
  CAROUSEL_SPACING_UNIT,
} from "../constants";
import { getBorderStringSize } from "../utils/getBorderStringSize";

const nonPixelCase1Value = "3mm";
const nonPixelCase2Value = "3rem";
const pixelCaseValue = "2px";
const thickCase = "thick double green";
const mediumCase = "medium double green";
const thinCase = "thin double green";
const noNumberGivenCase1 = "solid";
const noNumberGivenCase2 = "dashed green";
const nonPixelCase1 = `    ${nonPixelCase1Value}   double  green`;
const nonPixelCase2 = `    ${nonPixelCase2Value}   green`;
const pixelCase = `   ${pixelCaseValue}   dashed   green   `;
const emptyCase = "";
const undefinedCase = undefined;

describe("getBorderStringSize", () => {
  it("thin case", () => {
    const actual = getBorderStringSize(thinCase);
    const expected = `${BORDER_STRING_THIN_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("medium case", () => {
    const actual = getBorderStringSize(mediumCase);
    const expected = `${BORDER_STRING_MEDIUM_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("thick case", () => {
    const actual = getBorderStringSize(thickCase);
    const expected = `${BORDER_STRING_THICK_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("no number given 1", () => {
    const actual = getBorderStringSize(noNumberGivenCase1);
    const expected = `${BORDER_STRING_MEDIUM_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("no number given 2", () => {
    const actual = getBorderStringSize(noNumberGivenCase2);
    const expected = `${BORDER_STRING_MEDIUM_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("empty case", () => {
    const actual = getBorderStringSize(emptyCase);
    const expected = `${BORDER_STRING_DEFAULT_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("undefined case", () => {
    const actual = getBorderStringSize(undefinedCase as any);
    const expected = `${BORDER_STRING_DEFAULT_SIZE}${CAROUSEL_SPACING_UNIT}`;
    expect(actual).toBe(expected);
  });
  it("non pixel case 1", () => {
    const actual = getBorderStringSize(nonPixelCase1);
    const expected = nonPixelCase1Value;
    expect(actual).toBe(expected);
  });
  it("non pixel case 2", () => {
    const actual = getBorderStringSize(nonPixelCase2);
    const expected = nonPixelCase2Value;
    expect(actual).toBe(expected);
  });
  it("pixel case", () => {
    const actual = getBorderStringSize(pixelCase);
    const expected = pixelCaseValue;
    expect(actual).toBe(expected);
  });
});
