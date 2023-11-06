import React$1, { useRef, useCallback, useLayoutEffect, useEffect, useState, forwardRef, useImperativeHandle, useMemo, useContext } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

//#region Enums
var ArrowButtonDirection;
(function (ArrowButtonDirection) {
    ArrowButtonDirection["next"] = "next";
    ArrowButtonDirection["previous"] = "previous";
})(ArrowButtonDirection || (ArrowButtonDirection = {}));
var CarouselElement;
(function (CarouselElement) {
    /**
    *Setting this will change all the items below.  Any {@link CarouselElementColor color} specified in a given section will override this value
    **/
    CarouselElement["all"] = "all";
    /**
    *These are the buttons at the bottom of each carousel related to changing pages
    **/
    CarouselElement["arrowLeft"] = "arrowLeft";
    /**
    *This is the button at the bottom of each carousel to the right of the dots
    **/
    CarouselElement["arrowRight"] = "arrowRight";
    CarouselElement["closeButton"] = "closeButton";
    /**
    *The dots at the bottom of the carousel indicating the number of pages
    **/
    CarouselElement["dots"] = "dots";
    CarouselElement["fullscreenButton"] = "fullscreenButton";
    CarouselElement["nextButton"] = "nextButton";
    CarouselElement["pauseButton"] = "pauseButton";
    CarouselElement["playButton"] = "playButton";
    CarouselElement["previousButton"] = "previousButton";
    CarouselElement["seekBackButton"] = "seekBackButton";
    CarouselElement["seekForwardButton"] = "seekForwardButton";
})(CarouselElement || (CarouselElement = {}));
var CarouselSection;
(function (CarouselSection) {
    CarouselSection["container"] = "container";
    CarouselSection["itemViewer"] = "itemViewer";
    CarouselSection["itemViewerPreview"] = "itemViewerPreview";
    CarouselSection["modal"] = "modal";
    CarouselSection["navigation"] = "navigation";
    CarouselSection["toolbar"] = "toolbar";
    CarouselSection["videoCurrentStateIndicator"] = "videoCurrentStateIndicator";
})(CarouselSection || (CarouselSection = {}));
var CarouselVideoCurrentStateIndicatorButtonName;
(function (CarouselVideoCurrentStateIndicatorButtonName) {
    CarouselVideoCurrentStateIndicatorButtonName["playIcon"] = "playIcon";
    CarouselVideoCurrentStateIndicatorButtonName["pauseIcon"] = "pauseIcon";
})(CarouselVideoCurrentStateIndicatorButtonName || (CarouselVideoCurrentStateIndicatorButtonName = {}));
var SpacingDirection;
(function (SpacingDirection) {
    SpacingDirection["bottom"] = "bottom";
    SpacingDirection["left"] = "left";
    SpacingDirection["right"] = "right";
    SpacingDirection["top"] = "top";
})(SpacingDirection || (SpacingDirection = {}));
//#endregion
//#region Keyboard Shortcuts
var ModifierKey;
(function (ModifierKey) {
    ModifierKey["ctrl"] = "ctrl";
    ModifierKey["alt"] = "alt";
    ModifierKey["shift"] = "shift";
})(ModifierKey || (ModifierKey = {}));
var ValidKey;
(function (ValidKey) {
    ValidKey["a"] = "a";
    ValidKey["b"] = "b";
    ValidKey["c"] = "c";
    ValidKey["d"] = "d";
    ValidKey["e"] = "e";
    ValidKey["f"] = "f";
    ValidKey["g"] = "g";
    ValidKey["h"] = "h";
    ValidKey["i"] = "i";
    ValidKey["j"] = "j";
    ValidKey["k"] = "k";
    ValidKey["l"] = "l";
    ValidKey["m"] = "m";
    ValidKey["n"] = "n";
    ValidKey["o"] = "o";
    ValidKey["p"] = "p";
    ValidKey["q"] = "q";
    ValidKey["r"] = "r";
    ValidKey["s"] = "s";
    ValidKey["t"] = "t";
    ValidKey["u"] = "u";
    ValidKey["v"] = "v";
    ValidKey["w"] = "w";
    ValidKey["x"] = "x";
    ValidKey["y"] = "y";
    ValidKey["z"] = "z";
    ValidKey["arrowLeft"] = "arrowLeft";
    ValidKey["arrowUp"] = "arrowUp";
    ValidKey["arrowDown"] = "arrowDown";
    ValidKey["arrowRight"] = "arrowRight";
    ValidKey["escape"] = "escape";
    ValidKey["spacebar"] = " ";
})(ValidKey || (ValidKey = {}));
//#endregion

var RegexpPattern = /** @class */ (function () {
    function RegexpPattern() {
    }
    RegexpPattern.hexColor = /^#(([A-Fa-f0-9]{3}){1,2}|[A-Fa-f0-9]{8})$/;
    RegexpPattern.rgbColor = /rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)/;
    RegexpPattern.rgbaColor = /rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d+|\d+\.\d+|\.\d+\s*\)/;
    RegexpPattern.splitAtSpaceAndRgb = /(\s|rgba.*?\)$)/;
    return RegexpPattern;
}());

function getIsItemOfType(item, type) {
    if (type === void 0) { type = 'image'; }
    var currentItemSrc = (item === null || item === void 0 ? void 0 : item.srcMain) || '';
    var extensions = type === 'image' ? IMAGE_EXTENSIONS : VIDEO_EXTENSIONS;
    if (typeof currentItemSrc === 'object') {
        return type === 'video';
    }
    return !!(currentItemSrc === null || currentItemSrc === void 0 ? void 0 : currentItemSrc.match(getRegexStringFromStringArray(extensions)));
}
function getRegexStringFromStringArray(fileExtensions) {
    var mapped = fileExtensions.map(function (ext, index) {
        var orChar = "|";
        if (index === 0)
            orChar = "";
        return "".concat(orChar, "(.").concat(ext, ")");
    });
    var result = ".+(".concat(mapped.join(""), ")$");
    return result;
}

function capitalize(str) {
    if (!str)
        return "";
    return str
        .split(" ")
        .map(function (word) { return word[0].toUpperCase() + word.slice(1); })
        .join(" ");
}
function convertColorNameToHex(color) {
    if (!color)
        return undefined;
    var colors = {
        "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
        "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
        "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
        "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
        "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
        "honeydew": "#f0fff0", "hotpink": "#ff69b4",
        "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
        "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
        "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
        "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead", "navy": "#000080",
        "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
        "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
        "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
        "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00", "yellowgreen": "#9acd32"
    };
    if (typeof colors[color === null || color === void 0 ? void 0 : color.toLowerCase()] !== 'undefined')
        return colors[color === null || color === void 0 ? void 0 : color.toLowerCase()];
    return undefined;
}
function convertHexToRgba(hex, opacity) {
    if (opacity === void 0) { opacity = CAROUSEL_ITEM_THUMBNAIL_BACKGROUND_OPACITY_DEFAULT; }
    var color;
    var hexToUse = hex === null || hex === void 0 ? void 0 : hex.trim();
    if (hexToUse && RegexpPattern.hexColor.test(hexToUse)) {
        color = hexToUse.substring(1).split('');
        if (color.length === 3) {
            color = [color[0], color[0], color[1], color[1], color[2], color[2]];
        }
        color = '0x' + color.join('');
        return "rgba(".concat([(color >> 16) & 255, (color >> 8) & 255, color & 255].join(','), ",").concat(opacity > 1 ? 1 : opacity < 0 ? 0 : opacity, ")");
    }
    return hexToUse;
}
/**
*Takes a time stamp that uses the following format `mm:ss:ms`.
*Will display an alert if the value for that section is invalid
*@returns a number representing the number of ms that a time string represents
*@example
*'999' // => 999 milliseconds
*'23:920' // => 23 seconds and 920 milliseconds
*'1:23:920' // => 1 minute 23 seconds and 920 milliseconds
*'01:23:920' // => 1 minute 23 seconds and 920 milliseconds
*'01:63:920' // throws since 63 seconds is larger than 59 (max for seconds)
*'01:59:1000' // throws since 1000 seconds is larger than 999 (max for milliseconds)
**/
function convertTimeStringToMilliseconds(timestamp) {
    if (!timestamp) {
        return 0;
    }
    if (typeof timestamp !== 'string') {
        try {
            return parseInt(timestamp, 10);
        }
        catch (error) {
            return 0;
        }
    }
    var split = timestamp === null || timestamp === void 0 ? void 0 : timestamp.split(TOOLBAR_TIME_STRING_SECTION_DIVIDER);
    var milliseconds = parseInt(split[(split === null || split === void 0 ? void 0 : split.length) - 1], 10) || 0;
    var seconds = parseInt(split[(split === null || split === void 0 ? void 0 : split.length) - 2], 10) || 0;
    var minutes = parseInt(split[(split === null || split === void 0 ? void 0 : split.length) - 3], 10) || 0;
    if (milliseconds >= 1000 || milliseconds < 0) {
        alert("The number of milliseconds must be between 0 and 999.  ".concat(timestamp, " has ").concat(milliseconds));
    }
    else if (seconds >= 60 || seconds < 0) {
        alert("The number of seconds must be between 0 and 59.  ".concat(timestamp, " has ").concat(seconds));
    }
    else if (minutes >= 60 || minutes < 0) {
        alert("The number of minutes must be between 0 and 59.  ".concat(timestamp, " has ").concat(minutes));
    }
    var toReturn = minutes * NUMBER_OF_MS_IN_A_SECOND * NUMBER_OF_SECONDS_IN_A_MINUTE + seconds * NUMBER_OF_MS_IN_A_SECOND + milliseconds;
    return toReturn;
}
/**
*Checks whether any nodes above `elementToCheck` contain `classname`.  Stops when node matches `stoppingElementType`, which defaults to `body`.
**/
function getAncestorContainsClassname(elementToCheck, classname, stoppingElementType) {
    var _a, _b;
    if (stoppingElementType === void 0) { stoppingElementType = 'body'; }
    try {
        var regex = new RegExp(classname, 'i');
        if (!classname || !elementToCheck)
            return false;
        if ((_a = elementToCheck === null || elementToCheck === void 0 ? void 0 : elementToCheck.className) === null || _a === void 0 ? void 0 : _a.match(regex))
            return true;
        if (((_b = elementToCheck === null || elementToCheck === void 0 ? void 0 : elementToCheck.localName) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) === stoppingElementType)
            return false;
        var parent_1 = (elementToCheck === null || elementToCheck === void 0 ? void 0 : elementToCheck.parentElement) || null;
        return getAncestorContainsClassname(parent_1, classname, stoppingElementType);
    }
    catch (error) {
        return true;
    }
}
/**
*Returns a value that is within the min and max values.
**/
function getBoundValue(value, min, max) {
    if (value === undefined || min === undefined || max === undefined)
        return value;
    return value >= max ? max : value <= min ? min : value;
}
function getClassname(_a) {
    var elementName = _a.elementName, modifiedName = _a.modifiedName;
    return "".concat(CLASSNAME__ROOT).concat(elementName ? "__".concat(elementName) : "").concat(modifiedName ? "--".concat(modifiedName) : "");
}
/**
*This is used to convert the {@link CarouselModalSectionProps.codeSection codeSections} object
*into a code block/section inside the {@link CarouselModal}.
**/
function getCodeSections(input) {
    var _a = input.marginTop, marginTop = _a === void 0 ? undefined : _a, lines = input.lines, _b = input.startTabCount, startTabCount = _b === void 0 ? 0 : _b, _c = input.tabSpacing, tabSpacing = _c === void 0 ? undefined : _c;
    if (!lines || lines.length === 0)
        return [];
    var toReturn = [];
    for (var index = 0; index < lines.length; index++) {
        var text = lines[index];
        var isComment = !!text.match(/^\s*\/\/.*/); //checks for '//' at the beginning
        var numberOfInitialSpaces = text.search(/\S|$/) || 0;
        toReturn.push(getCodeSection({
            text: text.trim(),
            isComment: isComment,
            marginTop: marginTop,
            tabCount: numberOfInitialSpaces + startTabCount,
            tabSpacing: tabSpacing
        }));
    }
    return toReturn;
}
function getCodeSection(input) {
    var text = input.text, _a = input.tabCount, tabCount = _a === void 0 ? 0 : _a, _b = input.tabSpacing, tabSpacing = _b === void 0 ? 10 : _b, _c = input.marginTop, marginTop = _c === void 0 ? 0 : _c, _d = input.isComment, isComment = _d === void 0 ? false : _d;
    return {
        textElementType: 'code',
        text: text,
        textStyles: {
            fontWeight: isComment ? 400 : 800,
            fontStyle: 'italic',
        },
        textContainerStyles: {
            padding: "".concat(marginTop, "px 0 0 ").concat(tabCount * tabSpacing, "px"),
        },
    };
}
function getContainerWidth(htmlElement, stylingLogic) {
    var _a;
    return (((_a = htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.width) || 0) - (stylingLogic.navigationContainerHorizontalPadding);
}
function getCoordinateDifference(mostRecentCoordinate, previousCoordinate) {
    if (!mostRecentCoordinate ||
        !previousCoordinate ||
        mostRecentCoordinate.x === undefined ||
        mostRecentCoordinate.y === undefined ||
        previousCoordinate.x === undefined ||
        previousCoordinate.y === undefined)
        return {
            distance: 0,
            xDiff: 0,
            yDiff: 0,
        };
    var xDiff = mostRecentCoordinate.x - previousCoordinate.x;
    var yDiff = mostRecentCoordinate.y - previousCoordinate.y;
    return {
        distance: Math.hypot(xDiff, yDiff),
        xDiff: xDiff,
        yDiff: yDiff,
    };
}
function getIsMobile() {
    var hasTouchEvent = (('ontouchstart' in window) ||
        ((navigator === null || navigator === void 0 ? void 0 : navigator.maxTouchPoints) > 0) ||
        ((navigator === null || navigator === void 0 ? void 0 : navigator.msMaxTouchPoints) > 0));
    return hasTouchEvent && window.innerWidth <= MOBILE_PIXEL_WIDTH;
}
function getFormattedTimeString(seconds) {
    if (!seconds || seconds < 0)
        return '00:00';
    var hours = Math.floor(seconds / 3600);
    var remaining = seconds % 3600;
    var minutes = Math.floor(remaining / 60);
    remaining %= 60;
    var second = Math.floor(remaining);
    return "".concat(hours ? "".concat(hours.toString(), ":") : '').concat(minutes.toString().padStart(2, '0'), ":").concat(second.toString().padStart(2, '0'));
}
function getIsPointInsideElement(point, element) {
    if (!point || !point.x || !point.y || !element)
        return false;
    var _a = element.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
    var x = point.x, y = point.y;
    var isValidX = x >= left && x <= right;
    var isValidY = y >= top && y <= bottom;
    return isValidX && isValidY;
}
function getIsVideo(item) {
    return getIsItemOfType(item, 'video');
}
function getIsVideoPlaying(video) {
    if (!video)
        return false;
    return !video.paused && !video.ended && video.currentTime > 0;
}
function getMostFrequentItem(numbers, defaultToUse) {
    if (defaultToUse === void 0) { defaultToUse = CAROUSEL_MAX_HEIGHT_DEFAULT; }
    if (!numbers || numbers.length === 0)
        return defaultToUse;
    var counts = {};
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var item = numbers_1[_i];
        var currentCount = counts === null || counts === void 0 ? void 0 : counts[item.toString()];
        if (!currentCount) {
            counts[item] = 1;
        }
        else {
            counts[item]++;
        }
    }
    var toReturn = -1;
    var highestCount = Number.MIN_SAFE_INTEGER;
    for (var _a = 0, _b = Object.entries(counts); _a < _b.length; _a++) {
        var _c = _b[_a], key = _c[0], count = _c[1];
        if (count >= highestCount) {
            highestCount = count;
            var number = Number(key);
            if (number > toReturn) {
                toReturn = number;
            }
        }
    }
    return toReturn;
}
function getNumberOfItemsThatCanFit(itemsLength, htmlElement, stylingLogic, optionsLogic) {
    var containerWidth = getContainerWidth(htmlElement, stylingLogic);
    var itemSize = optionsLogic.thumbnailSize;
    var itemSpacing = optionsLogic.getThumbnailSpacingBasedOnThumbnailPositioning();
    var numberOfItemsThatCanFitWithZeroSpacing = containerWidth / itemSize;
    var calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing = Math.floor(numberOfItemsThatCanFitWithZeroSpacing);
    var itemSpacingStrategy = optionsLogic.thumbnailSpacingStrategy;
    //logic needed for cases when itemSpacing is given and can't be 0
    var numberOfSpaces = calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing - 1;
    var totalSpaceOfItems = calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing * itemSize + numberOfSpaces * itemSpacing;
    if (totalSpaceOfItems > containerWidth) {
        calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing -= 1;
    }
    //logic needed to prevent crashing at smaller viewport
    var numberOfWholeItemsThatCanFit = calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing <= 0
        ? 1
        : calculatedNumberOfWholeItemsThatCanFitWithZeroSpacing;
    return {
        containerWidth: containerWidth,
        itemSize: itemSize,
        numberOfWholeItemsThatCanFit: itemSpacingStrategy === 'max'
            ? Math.min(itemsLength, numberOfWholeItemsThatCanFit)
            : numberOfWholeItemsThatCanFit,
    };
}
function getNumberOfPages(carouselContainerElement, itemsLength, stylingLogic, optionsLogic) {
    if (!carouselContainerElement)
        return NUMBER_OF_PAGES_INITIAL;
    var numberOfItemsThatCanFit = getNumberOfItemsThatCanFit(itemsLength, carouselContainerElement, stylingLogic, optionsLogic).numberOfWholeItemsThatCanFit;
    var numberOfPages = Math.ceil(itemsLength / numberOfItemsThatCanFit);
    return numberOfPages;
}
function getPoint(e) {
    var _a, _b, _c, _d;
    var mouseEvent = e;
    var touchEvent = e;
    return {
        x: ((_b = (_a = touchEvent === null || touchEvent === void 0 ? void 0 : touchEvent.changedTouches) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.clientX) || (mouseEvent === null || mouseEvent === void 0 ? void 0 : mouseEvent.x) || (mouseEvent === null || mouseEvent === void 0 ? void 0 : mouseEvent.clientX) || 0,
        y: ((_d = (_c = touchEvent === null || touchEvent === void 0 ? void 0 : touchEvent.changedTouches) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.clientY) || (mouseEvent === null || mouseEvent === void 0 ? void 0 : mouseEvent.y) || (mouseEvent === null || mouseEvent === void 0 ? void 0 : mouseEvent.clientY) || 0,
    };
}
function getShortcutsString(shortcuts) {
    var result = "";
    if (!shortcuts || shortcuts.length === 0)
        return result;
    var replacements = [
        [ValidKey.arrowDown, '↓'],
        [ValidKey.arrowUp, '↑'],
        [ValidKey.arrowLeft, '←'],
        [ValidKey.arrowRight, '→'],
        [ValidKey.spacebar, 'spacebar'],
        [ValidKey.escape, 'esc'],
    ];
    for (var i = 0; i < shortcuts.length; i++) {
        var shortcut = shortcuts[i];
        var isLastItem = i === shortcuts.length - 1;
        if (isLastItem) {
            result += ' or ';
        }
        if (Array.isArray(shortcut)) {
            var replaced = shortcut.map(function (sc) { return replaceCharacters(sc, replacements); });
            result += replaced.join('+');
        }
        else {
            result += replaceCharacters(shortcut, replacements);
        }
        if (shortcuts.length > 2 && !isLastItem) {
            result += ', ';
        }
    }
    return result;
}
function enterFullScreen(element) {
    return __awaiter(this, void 0, void 0, function () {
        var isFullScreenPossible;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    isFullScreenPossible = document.fullscreenEnabled;
                    if (!isFullScreenPossible || !element)
                        return [2 /*return*/];
                    return [4 /*yield*/, element.requestFullscreen()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function exitFullScreen(element) {
    return __awaiter(this, void 0, void 0, function () {
        var isFullScreenPossible;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    isFullScreenPossible = document.fullscreenEnabled;
                    if (!isFullScreenPossible || !element)
                        return [2 /*return*/];
                    return [4 /*yield*/, document.exitFullscreen()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function onArrowButtonClick(direction, currentPage, numberOfPages, setCurrentPage) {
    if (direction === ArrowButtonDirection.previous) {
        setCurrentPage(currentPage <= 0 ? numberOfPages - 1 : currentPage - 1);
    }
    else if (direction === ArrowButtonDirection.next) {
        setCurrentPage(currentPage >= numberOfPages - 1 ? 0 : currentPage + 1);
    }
}
var replaceCharacters = function (str, characterMappings) {
    if (characterMappings === void 0) { characterMappings = []; }
    var replacements = [
        ["-", " "],
        ["_", " "],
    ];
    var strToUse = str;
    var replacementsToUse = replacements;
    if (characterMappings.length > 0)
        replacementsToUse = characterMappings;
    for (var i = 0; i < replacementsToUse.length; i++) {
        var characterMapping = replacementsToUse[i];
        var splitStr = strToUse.split(characterMapping[0]);
        strToUse = splitStr.join(characterMapping[1]);
    }
    return strToUse;
};
function stopPropagation(e) {
    var event = e || window.event;
    if (!event)
        return;
    event.cancelBubble = true;
    if (event.stopPropagation)
        event.stopPropagation();
}

var AUTO_CHANGE_PAGE_DEFAULT = true;
var AUTO_HIDE_DISABLED_VALUE = 0;
var AUTO_HIDE_VIDEO_TOOLBAR_DURATION_DEFAULT = 2500;
var CURRENT_ITEM_INDEX_INITIAL = 0;
var CURRENT_PAGE_INITIAL = 0;
var DISABLE_WRAPPING_DEFAULT = false;
var FONT_WEIGHT_DEFAULT = 400;
var GET_CURRENT_VALUE_DEFAULT = 0;
var IMAGE_EXTENSIONS = [
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
];
var IS_LAST_PAGE_FLUSH_DEFAULT = true;
var ITEM_CONTAINER_HEIGHT_INITIAL = 'auto';
var ITEM_CONTAINER_MIN_DEFAULT = 125;
var ITEM_VIEWER_HEIGHT_DEFAULT = "widescreen";
var ITEM_VIEWER_ASPECT_RATIOS_TO_DECIMAL_MAPPINGratioValues = {
    widescreen: .5625,
    fullscreen: .75, //4:3
};
var MAX_CLICK_THRESHOLD_DEFAULT = 15;
var MODAL_IS_MINIMIZED_INITIAL = false;
var MODAL_TEXT_TAG_DEFAULT = 'p';
var MODAL_TITLE_TAG_DEFAULT = 'h3';
var MODAL_MINIMIZE_ON_CLICK_DEFAULT = true;
var MODAL_MAINTAIN_MINIMIZED_STATE_DEFAULT = false;
var NUMBER_OF_DOTS_MINIMUM_TO_DISPLAY_NAV_ITEMS = 2;
var NUMBER_OF_MS_IN_A_SECOND = 1000;
var NUMBER_OF_SECONDS_IN_A_MINUTE = 60;
var NUMBER_OF_PAGES_INITIAL = 0;
var PROGRESS_BAR_PERCENT_INITIAL_VALUE = -1;
var PROGRESS_BAR_SHOW_CURRENT_POSITION_ON_CHANGE_DEFAULT = false;
var SEEK_AMOUNT_DEFAULT = 5000;
var TOOLBAR_TIME_STRING_SECTION_DIVIDER = ':';
var TOOLBAR_MARGIN_RIGHT_OFFSET = 1;
var THUMBNAIL_OVERLAY_IS_HIDDEN_DEFAULT = true;
var TRANSLATION_AMOUNT_INITIAL = 0;
var VIDEO_EXTENSIONS = ["mp4", "ogv", "webm", "ogg"];
var USE_RECOMMENDEDED_ASPECT_RATIO_INITIAL = Number.MAX_SAFE_INTEGER;
var WINDOW_RESIZE_DEBOUNCE = 250;
//#region ClassNames
var CLASSNAME__ROOT = 'thumbnail-carousel'; //this has to match $carouselClassname in _variables.scss
var CLASSNAME__DOTS = getClassname({ elementName: 'dots' });
var CLASSNAME__BUTTON = "".concat(CLASSNAME__ROOT, "-button");
var CLASSNAME__BUTTON_SCALE_ON_HOVER = "".concat(CLASSNAME__BUTTON, "--scale-on-hover");
var CLASSNAME__CAROUSEL_CONTAINER = "".concat(CLASSNAME__ROOT, "-container"); //this has to match $carouselClassname in _variables.scss
var CLASSNAME__CAROUSEL_ITEM = getClassname({ elementName: 'item' });
var CLASSNAME__CAROUSEL_ITEMS = getClassname({ elementName: "items" });
var CLASSNAME__CAROUSEL_ITEMS_CONTAINER = "".concat(CLASSNAME__CAROUSEL_ITEMS, "-container");
var CLASSNAME__CAROUSEL_ITEM_THUMBNAIL = getClassname({ elementName: 'item-thumbnail' });
var CLASSNAME__DISPLAY_NONE = getClassname({ modifiedName: 'd-none' });
var CLASSNAME__GRABBING = 'grabbing';
var CLASSNAME__HIDDEN = getClassname({ modifiedName: 'hidden' });
var CLASSNAME__ITEM_CONTAINER = getClassname({ elementName: "item-container" });
var CLASSNAME__ITEM_CONTAINER_NO_TOOLBAR = "".concat(CLASSNAME__ITEM_CONTAINER, "--no-toolbar");
var CLASSNAME__ITEM_VIEWER = getClassname({ elementName: 'item-viewer' });
var CLASSNAME__ITEM_VIEWER_BUTTON = "".concat(CLASSNAME__ITEM_VIEWER, "-button");
var CLASSNAME__ITEM_VIEWER_SHORTCUT_INDICATOR = "".concat(CLASSNAME__ITEM_VIEWER, "-shortcut-indicator");
var CLASSNAME__ITEM_VIEWER_TOOLBAR = "".concat(CLASSNAME__ITEM_VIEWER, "-toolbar");
var CLASSNAME__ITEM_VIEWER_TOOLBAR_TEXT = "".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR, "-text");
var CLASSNAME__LOADING_SPINNER = getClassname({ elementName: 'loading' });
var CLASSNAME__MODAL = getClassname({ elementName: 'modal' });
var CLASSNAME__MODAL_CUSTOM = "".concat(CLASSNAME__MODAL, "-custom");
var CLASSNAME__MODAL_HEADER = "".concat(CLASSNAME__MODAL, "-header");
var CLASSNAME__MODAL_MINIMIZED = "".concat(CLASSNAME__MODAL, "-minimized");
var CLASSNAME__NAVIGATION = getClassname({ elementName: "navigation" });
var CLASSNAME__TOOLBAR_CONTAINER = "".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR, "-container");
var CLASSNAME__TOOLBAR_LEFT = "".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR, "-left");
var CLASSNAME__TOOLBAR_PROGRESS = "".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR, "-progress");
var CLASSNAME__TOOLBAR_RIGHT = "".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR, "-right");
var CLASSNAME__VIDEO_SCREENSHOT_VIEWER = "".concat(getClassname({ elementName: 'video-screenshot-viewer' }));
var CLASSNAME__VIDEO_SCREENSHOT_VIEWER_TEXT_CONTAINER = "".concat(CLASSNAME__VIDEO_SCREENSHOT_VIEWER, "-text-container");
//#endregion
//#region CSS Custom Property Names (see _variables.scss)
var CSS_CUSTOM_PROPERTY_MODAL_SCROLLBAR_BACKGROUND_COLOR = "".concat(CLASSNAME__ROOT, "-modal-scrollbar-background-color");
var CSS_CUSTOM_PROPERTY_MODAL_SCROLLBAR_FOREGROUND_COLOR = "".concat(CLASSNAME__ROOT, "-modal-scrollbar-foreground-color");
var CSS_CUSTOM_PROPERTY_MODAL_OPACITY_MINIMIZED = "".concat(CLASSNAME__ROOT, "-modal-opacity-minimized");
//#endregion
//#region Styling
var CAROUSEL_COLOR_ONE = "#1d0e0b";
var CAROUSEL_COLOR_TWO = "#774023";
var CAROUSEL_COLOR_THREE = "#d88c51";
var CAROUSEL_COLOR_FOUR = "#f3e7c9";
var CAROUSEL_COLOR_FIVE = "#fff9f5";
var CAROUSEL_COLOR_GREY_ONE = '#9b9b9b';
var CAROUSEL_DOT_OPACITY_DEFAULT = .5;
var CAROUSEL_DOT_HEIGHT_DEFAULT = 24;
var CAROUSEL_DOT_WIDTH_DEFAULT = 16;
var CAROUSEL_MAX_HEIGHT_DEFAULT = window.innerHeight / .75; //in px
var CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT = 4; //in px
var CAROUSEL_ITEM_SIZE_DEFAULT = 150; //in px
var CAROUSEL_ITEM_SIZE_DISPLAY_NON_ITEM_VIEWER_DEFAULT = 50; //in px
var CAROUSEL_ITEM_SPACING_DEFAULT = 10; //in px
var CAROUSEL_ITEM_THUMBNAIL_BACKGROUND_OPACITY_DEFAULT = .66;
var CAROUSEL_ITEM_THUMBNAIL_DESCRIPTION_OVERLAY_MAX_LINE_COUNT_DEFAULT = 2;
var CAROUSEL_ITEMS_MARGIN_HORIZONTAL_DEFAULT = 0; //in px
var CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT = 20; //in px
var CAROUSEL_ITEM_VIEWER_PREVIEW_BORDER_CENTER_LINE_OPACITY_DEFAULT = .66;
var CAROUSEL_ITEM_VIEWER_PREVIEW_BORDER_RADIUS_DEFAULT = 5;
var CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_FIT_DEFAULT = 'cover';
var CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_POSITION_WHEN_NO_SWAP_DEFAULT = 'left';
var CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_POSITION_WHEN_SWAP_DEFAULT = 'right';
var CAROUSEL_ITEM_VIEWER_PREVIEW_IS_VISIBLE_DEFAULT = false;
var CAROUSEL_ITEM_VIEWER_PREVIEW_OPACITY_DEFAULT = .9;
var CAROUSEL_ITEM_VIEWER_PREVIEW_SWAP_IMAGE_AND_TEXT_DEFAULT = false;
var CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_FONT_FAMILY_DEFAULT = 'sans-serif';
var CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_SIZE_DEFAULT = 14;
var CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_VERTICAL_ALIGNMENT_DEFAULT = 'flex-start';
var CAROUSEL_ITEM_VIEWER_PREVIEW_WIDTH_DEFAULT = 300;
var CAROUSEL_MODAL_CLOSE_BUTTON_SIZE_NON_ITEM_VIEWER_DEFAULT = 18;
var CAROUSEL_MODAL_PADDING_DEFAULT = { top: 20, bottom: 20, left: 20, right: 20 };
var CAROUSEL_MODAL_MINIMIZED_OPACITY_DEFAULT = .875;
var CAROUSEL_OVERLAY_FONT_SIZE_DEFAULT = 14; //in px
var CAROUSEL_OVERLAY_FONT_SIZE_NON_ITEM_VIEWER_DEFAULT = 12; //in px
var CAROUSEL_OVERLAY_ITEM_PADDING_TOP = 10; //in px
var CAROUSEL_PADDING_DEFAULT = { top: 0, bottom: 0, left: 0, right: 0 };
var CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT = 20;
var CAROUSEL_PROGRESS_BAR_DOT_DIAMETER = 14;
var CAROUSEL_PROGRESS_BAR_DOT_IS_ALWAYS_VISIBLE = false;
var CAROUSEL_PROGRESS_BAR_DOT_TRANSITION_DURATION = .25;
var CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_EMBEDDED = 3;
var CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_MOBILE = CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT - 4;
var CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_NOT_EMBEDDED = 5;
var CAROUSEL_PROGRESS_BAR_HEIGHT_MAX = 13;
var CAROUSEL_PROGRESS_BAR_HEIGHT_MIN = 3;
var CAROUSEL_PROGRESS_BAR_SECTION_GAP = 2;
var CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_MULTIPLE_SECTIONS_DEFAULT = 4;
var CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_MOBILE = 1;
var CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_ONE_SECTION_DEFAULT = 2.5;
var CAROUSEL_PROGRESS_BAR_SHOULD_SPAN_ENTIRE_WIDTH_DEFAULT = false;
var CAROUSEL_SPACING_UNIT = 'px';
var CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_ANGLE_DEFAULT = 180; //in degrees
var CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_START_OPACITY_DEFAULT = 0;
var CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_END_OPACITY_DEFAULT = 1;
var CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MIN_DEFAULT = 10;
var CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MIN_THESHOLD = 100;
var CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MAX_DEFAULT = 12;
var CAROUSEL_TOOLBAR_BUTTON_SIZE_DEFAULT = 24;
var CAROUSEL_TOOLBAR_BUTTON_SIZE_MOBILE_DEFAULT = 18;
var CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL = -1;
var CAROUSEL_VIDEO_SECTION_MIN_LENGTH = 500;
var CAROUSEL_VIDEO_SCREENSHOT_VIEWER_WIDTH_DEFAULT = 250;
var CURRENT_VIDEO_CURRENT_TIME_DEFAULT = 0;
var MOBILE_PIXEL_WIDTH = 655;
//#endregion
//#region ItemViewer Shortcuts
var ITEM_VIEWER_CLOSE_SHORTCUTS = [ValidKey.c, ValidKey.x, ValidKey.escape];
var ITEM_VIEWER_PLAY_SHORTCUTS = [ValidKey.k, ValidKey.spacebar];
var ITEM_VIEWER_SEEK_BACKWARDS_SHORTCUTS = [ValidKey.b, [ModifierKey.shift, ValidKey.arrowLeft]];
var ITEM_VIEWER_SEEK_FORWARDS_SHORTCUTS = [ValidKey.f, [ModifierKey.shift, ValidKey.arrowRight]];
var ITEM_VIEWER_NEXT_ITEM_SHORTCUTS = [ValidKey.arrowRight, ValidKey.n];
var ITEM_VIEWER_PREVIOUS_ITEM_SHORTCUTS = [ValidKey.arrowLeft, ValidKey.p];
//#endregion

/**
*Gets the current value for the current window width from the list of tuples.
*Tuples given are sorted by `max-width`, then `min-width`, then unspecified
*`max-width` tuples are sorted ascending by breakpoint and `min-width` descending by breakpoint.
*Tuples with a breakpoint specified but no type are considered to be `max-width` type.
*If there is more than one tuple with just a value, the first one in the sorted array is used (e.g. for numbers it is the smallest one).
*When extending the supported types, the only thing that needs to be modified is adding another case in the switch statement for said type.

@param valueTuple - The values from which to pick an item (not mutated)
@param defaultValue - The value to use as a fallback if `valueTuple` is undefined
@param isFullscreenMode - Whether the carousel is in fullscreen mode or not
**/
function getCurrentValue(valueTuple, defaultValue, isFullscreenMode) {
    var _a, _b;
    var valueTupleToUse;
    if (typeof (valueTuple) === 'object') {
        valueTupleToUse = ((isFullscreenMode ? valueTuple === null || valueTuple === void 0 ? void 0 : valueTuple.fullscreen : valueTuple === null || valueTuple === void 0 ? void 0 : valueTuple.nonFullscreen)) || valueTuple;
        if (valueTupleToUse === null || valueTupleToUse === void 0 ? void 0 : valueTupleToUse.fullscreen) {
            valueTupleToUse = isFullscreenMode ? valueTupleToUse === null || valueTupleToUse === void 0 ? void 0 : valueTupleToUse.fullscreen : undefined;
        }
        else if (valueTupleToUse === null || valueTupleToUse === void 0 ? void 0 : valueTupleToUse.nonFullscreen) {
            valueTupleToUse = !isFullscreenMode ? valueTupleToUse === null || valueTupleToUse === void 0 ? void 0 : valueTupleToUse.nonFullscreen : undefined;
        }
    }
    else {
        valueTupleToUse = valueTuple;
    }
    if (valueTupleToUse === undefined || valueTupleToUse === null)
        return defaultValue;
    if (!Array.isArray(valueTupleToUse))
        return valueTupleToUse;
    var windowWidth = window.innerWidth;
    var sorted = valueTupleToUse;
    var valueType = typeof ((_a = valueTupleToUse === null || valueTupleToUse === void 0 ? void 0 : valueTupleToUse[0]) === null || _a === void 0 ? void 0 : _a[0]);
    sorted = (_b = __spreadArray([], valueTupleToUse, true)) === null || _b === void 0 ? void 0 : _b.sort(function (a, b) {
        var priority = ['max-width', 'min-width', undefined];
        var firstBreakpoint = (a === null || a === void 0 ? void 0 : a[1]) || 0;
        var secondBreakpoint = (b === null || b === void 0 ? void 0 : b[1]) || 0;
        var firstType = firstBreakpoint ? (a === null || a === void 0 ? void 0 : a[2]) || 'max-width' : undefined;
        var secondType = secondBreakpoint ? (b === null || b === void 0 ? void 0 : b[2]) || 'max-width' : undefined;
        var firstValue = a === null || a === void 0 ? void 0 : a[0];
        var secondValue = b === null || b === void 0 ? void 0 : b[0];
        var firstTypeIndex = priority.indexOf(firstType);
        var secondTypeIndex = priority.indexOf(secondType);
        var sortFirstBeforeSecond = -1;
        var sortFirstAfterSecond = 1;
        var keepOrder = 0;
        var sortByMaxWidthBreakpoint = firstBreakpoint < secondBreakpoint ? sortFirstBeforeSecond : sortFirstAfterSecond;
        var sortByMinWidthBreakpoint = firstBreakpoint > secondBreakpoint ? sortFirstBeforeSecond : sortFirstAfterSecond;
        //each type may need to evalute equality differently       
        var sortByValue;
        switch (valueType) {
            //this is the number case
            default:
                sortByValue = firstValue !== undefined && secondValue !== undefined && firstValue < secondValue
                    ? sortFirstBeforeSecond
                    : sortFirstAfterSecond;
        }
        //assuming the index values are never -1
        if (firstTypeIndex === secondTypeIndex) {
            if (firstTypeIndex === priority.indexOf('max-width'))
                return sortByMaxWidthBreakpoint;
            else if (firstTypeIndex === priority.indexOf('min-width'))
                return sortByMinWidthBreakpoint;
            return sortByValue;
        }
        else if (firstTypeIndex > secondTypeIndex) {
            return sortFirstAfterSecond;
        }
        else if (firstTypeIndex < secondTypeIndex) {
            return sortFirstBeforeSecond;
        }
        return keepOrder;
    });
    for (var _i = 0, _c = sorted || []; _i < _c.length; _i++) {
        var tuple = _c[_i];
        var _d = tuple || [], value = _d[0], breakpoint = _d[1], breakpointType = _d[2];
        var valueToUse = void 0;
        switch (typeof value) {
            case "number":
                valueToUse = value >= 0 || value < 0 ? value : defaultValue;
                break;
            case "boolean":
                valueToUse = value;
                break;
            default:
                valueToUse = value || defaultValue;
        }
        var breakpointTypeToUse = breakpointType || "max-width";
        if (!breakpoint) {
            return valueToUse;
        }
        if (breakpointTypeToUse === "max-width") {
            if (windowWidth <= breakpoint)
                return valueToUse;
        }
        else if (breakpointTypeToUse === "min-width") {
            if (windowWidth >= breakpoint)
                return valueToUse;
        }
    }
    return defaultValue;
}

/*
*Logic related to any option the user can specify
*/
var OptionsLogic = /** @class */ (function () {
    function OptionsLogic(constructor) {
        var _a;
        this.defaultFontFamily = 'sans-serif';
        var carouselContainerRef = constructor.carouselContainerRef, options = constructor.options, currentItem = constructor.currentItem, numberOfPages = constructor.numberOfPages, items = constructor.items, isFullscreenMode = constructor.isFullscreenMode;
        this.currentItem = currentItem;
        this.carouselContainerRef = carouselContainerRef;
        this.isFullscreenMode = isFullscreenMode;
        this.items = items || [];
        this.numberOfPages = numberOfPages || 0;
        this.options = options;
        this.bodyFontFamily = (_a = window.getComputedStyle(document === null || document === void 0 ? void 0 : document.body)) === null || _a === void 0 ? void 0 : _a.fontFamily;
    }
    Object.defineProperty(OptionsLogic.prototype, "allFillColor", {
        //#region Getters
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.elements) === null || _c === void 0 ? void 0 : _c.all) === null || _d === void 0 ? void 0 : _d.fillColor, undefined, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "allFontFamily", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.all, undefined, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "autoChangePage", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.navigation) === null || _b === void 0 ? void 0 : _b.autoChangePage, AUTO_CHANGE_PAGE_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "autoHideToolbarDuration", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.autoHideToolbarDuration, AUTO_HIDE_VIDEO_TOOLBAR_DURATION_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "containerBackgroundColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.container) === null || _c === void 0 ? void 0 : _c.backgroundColor, this.theme.colorOne, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "containerMargin", {
        get: function () {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            var bottom = getCurrentValue((_e = (_d = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.styling) === null || _c === void 0 ? void 0 : _c.container) === null || _d === void 0 ? void 0 : _d.margin) === null || _e === void 0 ? void 0 : _e.bottom, undefined, this.isFullscreenMode);
            var left = getCurrentValue((_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.styling) === null || _g === void 0 ? void 0 : _g.container) === null || _h === void 0 ? void 0 : _h.margin) === null || _j === void 0 ? void 0 : _j.left, undefined, this.isFullscreenMode);
            var right = getCurrentValue((_o = (_m = (_l = (_k = this.options) === null || _k === void 0 ? void 0 : _k.styling) === null || _l === void 0 ? void 0 : _l.container) === null || _m === void 0 ? void 0 : _m.margin) === null || _o === void 0 ? void 0 : _o.right, undefined, this.isFullscreenMode);
            var top = getCurrentValue((_s = (_r = (_q = (_p = this.options) === null || _p === void 0 ? void 0 : _p.styling) === null || _q === void 0 ? void 0 : _q.container) === null || _r === void 0 ? void 0 : _r.margin) === null || _s === void 0 ? void 0 : _s.top, undefined, this.isFullscreenMode);
            return _a = {},
                _a[SpacingDirection.bottom] = bottom,
                _a[SpacingDirection.left] = left,
                _a[SpacingDirection.right] = right,
                _a[SpacingDirection.top] = top,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "containerPadding", {
        get: function () {
            var _a;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            var bottom = getCurrentValue((_e = (_d = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.styling) === null || _c === void 0 ? void 0 : _c.container) === null || _d === void 0 ? void 0 : _d.padding) === null || _e === void 0 ? void 0 : _e.bottom, undefined, this.isFullscreenMode);
            var left = getCurrentValue((_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.styling) === null || _g === void 0 ? void 0 : _g.container) === null || _h === void 0 ? void 0 : _h.padding) === null || _j === void 0 ? void 0 : _j.left, undefined, this.isFullscreenMode);
            var right = getCurrentValue((_o = (_m = (_l = (_k = this.options) === null || _k === void 0 ? void 0 : _k.styling) === null || _l === void 0 ? void 0 : _l.container) === null || _m === void 0 ? void 0 : _m.padding) === null || _o === void 0 ? void 0 : _o.right, undefined, this.isFullscreenMode);
            var top = getCurrentValue((_s = (_r = (_q = (_p = this.options) === null || _p === void 0 ? void 0 : _p.styling) === null || _q === void 0 ? void 0 : _q.container) === null || _r === void 0 ? void 0 : _r.padding) === null || _s === void 0 ? void 0 : _s.top, undefined, this.isFullscreenMode);
            return _a = {},
                _a[SpacingDirection.bottom] = bottom,
                _a[SpacingDirection.left] = left,
                _a[SpacingDirection.right] = right,
                _a[SpacingDirection.top] = top,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "defaultButtonSize", {
        get: function () {
            return this.isMobile ? CAROUSEL_TOOLBAR_BUTTON_SIZE_MOBILE_DEFAULT : CAROUSEL_TOOLBAR_BUTTON_SIZE_DEFAULT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isDefaultItemDisplayLocation", {
        get: function () {
            return this.itemDisplayLocation === 'none';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemDisplayLocation", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.itemDisplayLocation, 'none', this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isItemDisplayLocationAbove", {
        get: function () {
            return this.itemDisplayLocation === 'above';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isItemDisplayLocationBelow", {
        get: function () {
            return this.itemDisplayLocation === 'below';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isItemVierAspectRatioGiven", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.aspectRatio) !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isItemViewerSwipingDisabled", {
        get: function () {
            var _a, _b;
            var defaultToUse = (this.isToolbarInVideo || this.isMobile) && !this.isFullscreenMode ? true : false;
            return this.items.length <= 1 || getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.disableSwiping, defaultToUse, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isLastPageFlush", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.navigation) === null || _b === void 0 ? void 0 : _b.isLastPageFlush, IS_LAST_PAGE_FLUSH_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isMobile", {
        get: function () {
            return getIsMobile();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isNavigationSwipingDisabled", {
        get: function () {
            var _a, _b;
            return this.numberOfPages <= 1 || getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.navigation) === null || _b === void 0 ? void 0 : _b.disableSwiping, false, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isToolbarInVideo", {
        get: function () {
            var _a, _b;
            if (this.isFullscreenMode)
                return true;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.isToolbarPositionedInVideo, this.isMobile ? false : true, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "isWrappingDisabled", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.navigation) === null || _b === void 0 ? void 0 : _b.disableWrapping, DISABLE_WRAPPING_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemContainerContentJustification", {
        get: function () {
            var _a;
            var objectPosition = (_a = this.itemStyles) === null || _a === void 0 ? void 0 : _a.objectPosition;
            return objectPosition === 'bottom' ? 'flex-end' : objectPosition === 'center' ? 'center' : 'flex-start';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemStyles", {
        get: function () {
            var _a;
            var defaultObjectStyles = {
                objectFit: 'contain',
                // objectPosition: this.isFullscreenMode ? 'center' : this.isItemDisplayLocationBelow ? 'top' : 'bottom',
                objectPosition: this.isFullscreenMode ? 'center' : 'top',
                // objectPosition: 'center',
            };
            return __assign(__assign({}, defaultObjectStyles), getCurrentValue((_a = this.currentItem) === null || _a === void 0 ? void 0 : _a.itemStyles, undefined, this.isFullscreenMode));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerAspectRatio", {
        get: function () {
            var _a, _b;
            var value = getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.aspectRatio, this.useDefaultVideoControls ? ITEM_VIEWER_HEIGHT_DEFAULT : 'auto', this.isFullscreenMode);
            return typeof value === 'string' && value !== 'auto' ? ITEM_VIEWER_ASPECT_RATIOS_TO_DECIMAL_MAPPINGratioValues[value] : value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerBackgroundColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewer) === null || _c === void 0 ? void 0 : _c.backgroundColor, undefined, this.isFullscreenMode) || this.containerBackgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerFontFamily", {
        get: function () {
            var _a, _b, _c;
            var primary = this.allFontFamily;
            var secondary = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.itemViewer, undefined, this.isFullscreenMode);
            return primary || secondary || this.bodyFontFamily || this.defaultFontFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerMaxClickThreshold", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.maxClickThreshold, MAX_CLICK_THRESHOLD_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewBackground", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.backgroundColor, this.theme.colorOne, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewBorder", {
        get: function () {
            var _a, _b, _c;
            var defaultBorder = "1px solid ".concat(this.theme.colorFive);
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.border, defaultBorder, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewBorderRadius", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.borderRadius, CAROUSEL_ITEM_VIEWER_PREVIEW_BORDER_RADIUS_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewHeight", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.height, CAROUSEL_ITEM_VIEWER_PREVIEW_WIDTH_DEFAULT / 2, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewImageFit", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.fit, CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_FIT_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewImagePosition", {
        get: function () {
            var _a, _b, _c, _d;
            var defaultToUse = this.itemViewerPreviewSwapImageAndText ? CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_POSITION_WHEN_SWAP_DEFAULT : CAROUSEL_ITEM_VIEWER_PREVIEW_IMAGE_POSITION_WHEN_NO_SWAP_DEFAULT;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.position, defaultToUse, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewIsVisible", {
        get: function () {
            var _a, _b, _c;
            var value = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.isVisibleInNonFullscreenMode, CAROUSEL_ITEM_VIEWER_PREVIEW_IS_VISIBLE_DEFAULT, this.isFullscreenMode);
            return this.isFullscreenMode ? true : value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewOpacity", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.opacity, CAROUSEL_ITEM_VIEWER_PREVIEW_OPACITY_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewSwapImageAndText", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.swapImageAndText, CAROUSEL_ITEM_VIEWER_PREVIEW_SWAP_IMAGE_AND_TEXT_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextBodyColor", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.body) === null || _e === void 0 ? void 0 : _e.color, this.theme.colorFive, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextBodyFontFamily", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.body) === null || _e === void 0 ? void 0 : _e.fontFamily, CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_FONT_FAMILY_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextBodySize", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.body) === null || _e === void 0 ? void 0 : _e.size, CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_SIZE_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextHeaderColor", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.header) === null || _e === void 0 ? void 0 : _e.color, this.theme.colorGreyOne, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextHeaderFontFamily", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.header) === null || _e === void 0 ? void 0 : _e.fontFamily, CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_FONT_FAMILY_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextHeaderSize", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.header) === null || _e === void 0 ? void 0 : _e.size, CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_SIZE_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextContainerPadding", {
        get: function () {
            var _a, _b, _c, _d, _e;
            var paddingStyle = (_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.container) === null || _e === void 0 ? void 0 : _e.padding;
            var padding = getCurrentValue(paddingStyle, CAROUSEL_PADDING_DEFAULT, this.isFullscreenMode);
            var paddingLeftStatic = paddingStyle === null || paddingStyle === void 0 ? void 0 : paddingStyle.left;
            var paddingRightStatic = paddingStyle === null || paddingStyle === void 0 ? void 0 : paddingStyle.right;
            var paddingBottomStatic = paddingStyle === null || paddingStyle === void 0 ? void 0 : paddingStyle.bottom;
            var paddingTopStatic = paddingStyle === null || paddingStyle === void 0 ? void 0 : paddingStyle.top;
            return {
                top: paddingTopStatic !== undefined ? paddingTopStatic : padding.top,
                bottom: paddingBottomStatic !== undefined ? paddingBottomStatic : padding.bottom,
                left: paddingLeftStatic !== undefined ? paddingLeftStatic : padding.left,
                right: paddingRightStatic !== undefined ? paddingRightStatic : padding.right,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewTextContainerVerticalAlignment", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.container) === null || _e === void 0 ? void 0 : _e.verticalAlignment, CAROUSEL_ITEM_VIEWER_PREVIEW_TEXT_VERTICAL_ALIGNMENT_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerPreviewWidth", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.itemViewerPreview) === null || _c === void 0 ? void 0 : _c.width, CAROUSEL_ITEM_VIEWER_PREVIEW_WIDTH_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "itemViewerUseRecommendedAspectRatio", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.useRecommendedAspectRatio, !this.isItemVierAspectRatioGiven, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "maxHeight", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.maxHeight, CAROUSEL_MAX_HEIGHT_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalBackgroundColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.backgroundColor, this.theme.colorOne, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalCloseButtonColor", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.closeButton) === null || _d === void 0 ? void 0 : _d.fill, this.modalTextColor, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalCloseButtonSize", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.closeButton) === null || _d === void 0 ? void 0 : _d.size, this.defaultButtonSize, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalCloseButtonWidth", {
        get: function () {
            var _a, _b, _c, _d;
            var sizeGiven = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.closeButton) === null || _d === void 0 ? void 0 : _d.size;
            return !!sizeGiven ? this.modalCloseButtonSize : this.isFullscreenMode ? undefined : CAROUSEL_MODAL_CLOSE_BUTTON_SIZE_NON_ITEM_VIEWER_DEFAULT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalFontSize", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.fontSize, this.isFullscreenMode ? CAROUSEL_OVERLAY_FONT_SIZE_DEFAULT : CAROUSEL_OVERLAY_FONT_SIZE_NON_ITEM_VIEWER_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalMaintainMinimizedStateAcrossItems", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.modal) === null || _b === void 0 ? void 0 : _b.maintainMinimizedStateAcrossItems, MODAL_MAINTAIN_MINIMIZED_STATE_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalMinimizeOnClick", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.modal) === null || _b === void 0 ? void 0 : _b.minimizeOnClick, MODAL_MINIMIZE_ON_CLICK_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalPadding", {
        get: function () {
            var _a, _b, _c;
            var paddingStyle = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.padding;
            var padding = getCurrentValue(paddingStyle, CAROUSEL_MODAL_PADDING_DEFAULT, this.isFullscreenMode);
            var _d = paddingStyle || {}, left = _d.left, right = _d.right, top = _d.top, bottom = _d.bottom;
            return {
                top: getCurrentValue(top !== undefined ? top : padding.top, CAROUSEL_MODAL_PADDING_DEFAULT.top, this.isFullscreenMode),
                bottom: getCurrentValue(bottom !== undefined ? bottom : padding.bottom, CAROUSEL_MODAL_PADDING_DEFAULT.bottom, this.isFullscreenMode),
                left: getCurrentValue(left !== undefined ? left : padding.left, CAROUSEL_MODAL_PADDING_DEFAULT.left, this.isFullscreenMode),
                right: getCurrentValue(right !== undefined ? right : padding.right, CAROUSEL_MODAL_PADDING_DEFAULT.right, this.isFullscreenMode),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalOpacityWhenMinimized", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.opacityWhenMinimized, CAROUSEL_MODAL_MINIMIZED_OPACITY_DEFAULT, this.isFullscreenMode).toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "modalTextColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.textColor, this.theme.colorFive, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    OptionsLogic.prototype.getModalWidth = function (isMinimized) {
        var _a, _b, _c;
        if (isMinimized)
            return "auto";
        return "".concat(getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.widthInPercent, 100, this.isFullscreenMode), "%");
    };
    Object.defineProperty(OptionsLogic.prototype, "navigationFontFamily", {
        get: function () {
            var _a, _b, _c;
            var primary = this.allFontFamily;
            var secondary = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.fontFamily) === null || _c === void 0 ? void 0 : _c.navigation, undefined, this.isFullscreenMode);
            return primary || secondary || this.bodyFontFamily || this.defaultFontFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "navigationBackground", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.navigation) === null || _c === void 0 ? void 0 : _c.backgroundColor, undefined, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "navigationMaxClickThreshold", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.navigation) === null || _b === void 0 ? void 0 : _b.maxClickThreshold, MAX_CLICK_THRESHOLD_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "progressBarShouldSpanEntireWidth", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.shouldSpanContainerWidth, CAROUSEL_PROGRESS_BAR_SHOULD_SPAN_ENTIRE_WIDTH_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "theme", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            var colorOne = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.colorTheme) === null || _c === void 0 ? void 0 : _c.colorOne, CAROUSEL_COLOR_ONE, this.isFullscreenMode);
            var colorTwo = getCurrentValue((_f = (_e = (_d = this.options) === null || _d === void 0 ? void 0 : _d.styling) === null || _e === void 0 ? void 0 : _e.colorTheme) === null || _f === void 0 ? void 0 : _f.colorTwo, CAROUSEL_COLOR_TWO, this.isFullscreenMode);
            var colorThree = getCurrentValue((_j = (_h = (_g = this.options) === null || _g === void 0 ? void 0 : _g.styling) === null || _h === void 0 ? void 0 : _h.colorTheme) === null || _j === void 0 ? void 0 : _j.colorThree, CAROUSEL_COLOR_THREE, this.isFullscreenMode);
            var colorFour = getCurrentValue((_m = (_l = (_k = this.options) === null || _k === void 0 ? void 0 : _k.styling) === null || _l === void 0 ? void 0 : _l.colorTheme) === null || _m === void 0 ? void 0 : _m.colorFour, CAROUSEL_COLOR_FOUR, this.isFullscreenMode);
            var colorFive = getCurrentValue((_q = (_p = (_o = this.options) === null || _o === void 0 ? void 0 : _o.styling) === null || _p === void 0 ? void 0 : _p.colorTheme) === null || _q === void 0 ? void 0 : _q.colorFive, CAROUSEL_COLOR_FIVE, this.isFullscreenMode);
            var colorGreyOne = getCurrentValue((_t = (_s = (_r = this.options) === null || _r === void 0 ? void 0 : _r.styling) === null || _s === void 0 ? void 0 : _s.colorTheme) === null || _t === void 0 ? void 0 : _t.colorGreyOne, CAROUSEL_COLOR_GREY_ONE, this.isFullscreenMode);
            return {
                colorOne: colorOne,
                colorTwo: colorTwo,
                colorThree: colorThree,
                colorFour: colorFour,
                colorFive: colorFive,
                colorGreyOne: colorGreyOne
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailBorderString", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.currentItemBorder, undefined, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailOverlayBackgroundSolid", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var opacity = getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.background) === null || _d === void 0 ? void 0 : _d.solid) === null || _e === void 0 ? void 0 : _e.opacity, CAROUSEL_ITEM_THUMBNAIL_BACKGROUND_OPACITY_DEFAULT, this.isFullscreenMode);
            var color = getCurrentValue((_k = (_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.thumbnail) === null || _g === void 0 ? void 0 : _g.descriptionOverlay) === null || _h === void 0 ? void 0 : _h.background) === null || _j === void 0 ? void 0 : _j.solid) === null || _k === void 0 ? void 0 : _k.color, this.theme.colorOne, this.isFullscreenMode).trim();
            return {
                opacity: opacity,
                color: color,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailOverlayBackgroundGradient", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var gradient = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.background) === null || _d === void 0 ? void 0 : _d.gradient;
            var angle = getCurrentValue(gradient === null || gradient === void 0 ? void 0 : gradient.angle, CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_ANGLE_DEFAULT, this.isFullscreenMode);
            var startColor = getCurrentValue((_e = gradient === null || gradient === void 0 ? void 0 : gradient.start) === null || _e === void 0 ? void 0 : _e.color, this.theme.colorFive, this.isFullscreenMode);
            var startOpacity = getCurrentValue((_f = gradient === null || gradient === void 0 ? void 0 : gradient.start) === null || _f === void 0 ? void 0 : _f.opacity, CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_START_OPACITY_DEFAULT, this.isFullscreenMode);
            var endColor = getCurrentValue((_g = gradient === null || gradient === void 0 ? void 0 : gradient.end) === null || _g === void 0 ? void 0 : _g.color, this.theme.colorOne, this.isFullscreenMode);
            var endOpacity = getCurrentValue((_h = gradient === null || gradient === void 0 ? void 0 : gradient.end) === null || _h === void 0 ? void 0 : _h.opacity, CAROUSEL_THUMBNAIL_OVERLAY_BACKGROUND_GRADIENT_END_OPACITY_DEFAULT, this.isFullscreenMode);
            return {
                angle: angle,
                endColor: endColor,
                endOpacity: endOpacity,
                startColor: startColor,
                startOpacity: startOpacity,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailOverlayIsDisabled", {
        get: function () {
            var _a, _b, _c;
            var isThumbnailTooSmall = this.thumbnailSize < CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MIN_THESHOLD;
            var defaultValue = !this.isDefaultItemDisplayLocation && this.thumbnailOverlayIsHidden && isThumbnailTooSmall;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.isDisabled, defaultValue, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailOverlayIsHidden", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.hideDescriptionOverlayUnlessHovered, THUMBNAIL_OVERLAY_IS_HIDDEN_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailOverlayText", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var color = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.textColor, this.theme.colorFive, this.isFullscreenMode);
            var maxLineCount = getCurrentValue((_f = (_e = (_d = this.options) === null || _d === void 0 ? void 0 : _d.thumbnail) === null || _e === void 0 ? void 0 : _e.descriptionOverlay) === null || _f === void 0 ? void 0 : _f.maxLineCount, CAROUSEL_ITEM_THUMBNAIL_DESCRIPTION_OVERLAY_MAX_LINE_COUNT_DEFAULT, this.isFullscreenMode);
            var fontSizeDefault = Math.floor(getBoundValue(this.thumbnailSize / 10, CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MIN_DEFAULT, CAROUSEL_THUMBNAIL_OVERLAY_FONT_SIZE_MAX_DEFAULT));
            var fontSize = getCurrentValue((_j = (_h = (_g = this.options) === null || _g === void 0 ? void 0 : _g.thumbnail) === null || _h === void 0 ? void 0 : _h.descriptionOverlay) === null || _j === void 0 ? void 0 : _j.fontSize, fontSizeDefault, this.isFullscreenMode);
            return {
                color: color,
                fontSize: fontSize,
                maxLineCount: maxLineCount,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailPositioning", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.thumbnailPositioning, undefined, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailSize", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            var maxHeight = this.maxHeight;
            var navigationDiv = (_b = (_a = this.carouselContainerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.querySelector(".".concat(CLASSNAME__NAVIGATION));
            var navigationHeight = (navigationDiv === null || navigationDiv === void 0 ? void 0 : navigationDiv.getBoundingClientRect().height) || 0;
            var navigationMarginBottom = parseFloat((_c = navigationDiv === null || navigationDiv === void 0 ? void 0 : navigationDiv.style) === null || _c === void 0 ? void 0 : _c.marginBottom) || 0;
            if (this.isDefaultItemDisplayLocation) {
                var thumbnailSizeGiven_1 = getCurrentValue((_e = (_d = this.options) === null || _d === void 0 ? void 0 : _d.thumbnail) === null || _e === void 0 ? void 0 : _e.size, CAROUSEL_ITEM_SIZE_DEFAULT, this.isFullscreenMode);
                var maxThumbnailSize = maxHeight - navigationHeight - navigationMarginBottom;
                if (thumbnailSizeGiven_1 > maxThumbnailSize && navigationHeight > 0) {
                    return maxHeight - navigationHeight - navigationMarginBottom;
                }
                return thumbnailSizeGiven_1;
            }
            var thumbnailSizeGiven = getCurrentValue((_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.thumbnail) === null || _g === void 0 ? void 0 : _g.size, CAROUSEL_ITEM_SIZE_DISPLAY_NON_ITEM_VIEWER_DEFAULT, this.isFullscreenMode);
            return thumbnailSizeGiven;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "thumbnailSpacingStrategy", {
        //todo: is this needed?
        // get thumbnailSizeAvailableSpace() {
        //     const maxHeight = this.maxHeight;
        //     const carouselHeight = this.carouselContainerRef?.current?.getBoundingClientRect().height;
        //     console.log({maxHeight, carouselHeight});
        //     if (!carouselHeight) return 0;
        //     return 0;
        // }
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.spacingStrategy, 'min', this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "toolbarBackgroundColor", {
        get: function () {
            var _a, _b, _c;
            var primary = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.backgroundColor, undefined, this.isFullscreenMode);
            return primary || this.containerBackgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "toolbarShortcutIndicator", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var backgroundColor = getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.shortcutIndicator) === null || _d === void 0 ? void 0 : _d.backgroundColor, this.theme.colorTwo, this.isFullscreenMode);
            var textColor = getCurrentValue((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.styling) === null || _f === void 0 ? void 0 : _f.toolbar) === null || _g === void 0 ? void 0 : _g.shortcutIndicator) === null || _h === void 0 ? void 0 : _h.backgroundColor, this.theme.colorFive, this.isFullscreenMode);
            return {
                backgroundColor: backgroundColor,
                textColor: textColor
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "toolbarTextColor", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            var priorityColor = getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.textColor, undefined, this.isFullscreenMode);
            var secondaryColor = getCurrentValue((_g = (_f = (_e = (_d = this.options) === null || _d === void 0 ? void 0 : _d.styling) === null || _e === void 0 ? void 0 : _e.toolbar) === null || _f === void 0 ? void 0 : _f.elements) === null || _g === void 0 ? void 0 : _g.color, undefined, this.isFullscreenMode);
            return priorityColor || secondaryColor || this.allFillColor || this.theme.colorFive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "useDefaultVideoControls", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.useDefaultVideoControls, this.isMobile ? true : false, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoCurrentStateIndicatorBackgroundColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.videoCurrentStateIndicator) === null || _c === void 0 ? void 0 : _c.backgroundColor, this.theme.colorOne, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoCurrentStateIndicatorForegroundColor", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.videoCurrentStateIndicator) === null || _c === void 0 ? void 0 : _c.textOrForegroundColor, this.theme.colorFive, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoCurrentStateIndicatorSize", {
        get: function () {
            var _a, _b, _c;
            return getCurrentValue((_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.videoCurrentStateIndicator) === null || _c === void 0 ? void 0 : _c.size, this.defaultButtonSize, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarBackgroundColor", {
        get: function () {
            var _a, _b, _c, _d;
            var backgroundColorToUse = this.isToolbarInVideo ? convertHexToRgba(this.theme.colorGreyOne, .25) : this.theme.colorGreyOne;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.backgroundColor, backgroundColorToUse, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarDotSettings", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            var diameter = getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.dot) === null || _e === void 0 ? void 0 : _e.diameter, CAROUSEL_PROGRESS_BAR_DOT_DIAMETER, this.isFullscreenMode);
            var isAlwaysVisible = getCurrentValue((_k = (_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.styling) === null || _g === void 0 ? void 0 : _g.toolbar) === null || _h === void 0 ? void 0 : _h.progressBar) === null || _j === void 0 ? void 0 : _j.dot) === null || _k === void 0 ? void 0 : _k.isAlwaysVisible, CAROUSEL_PROGRESS_BAR_DOT_IS_ALWAYS_VISIBLE, this.isFullscreenMode);
            var transitionDuration = getCurrentValue((_q = (_p = (_o = (_m = (_l = this.options) === null || _l === void 0 ? void 0 : _l.styling) === null || _m === void 0 ? void 0 : _m.toolbar) === null || _o === void 0 ? void 0 : _o.progressBar) === null || _p === void 0 ? void 0 : _p.dot) === null || _q === void 0 ? void 0 : _q.transitionDuration, CAROUSEL_PROGRESS_BAR_DOT_TRANSITION_DURATION, this.isFullscreenMode);
            return {
                diameter: diameter,
                isAlwaysVisible: isAlwaysVisible,
                transitionDuration: transitionDuration
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarForegroundColor", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.textOrForegroundColor, this.theme.colorThree, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarHitSlop", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var top = getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.hitSlop) === null || _e === void 0 ? void 0 : _e.top, CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT * 1, this.isFullscreenMode);
            var bottom = getCurrentValue((_k = (_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.styling) === null || _g === void 0 ? void 0 : _g.toolbar) === null || _h === void 0 ? void 0 : _h.progressBar) === null || _j === void 0 ? void 0 : _j.hitSlop) === null || _k === void 0 ? void 0 : _k.bottom, CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT / 2, this.isFullscreenMode);
            return {
                top: top,
                bottom: bottom,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarScaleAmount", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            var isToolbarInVideo = this.isToolbarInVideo;
            var sections = (_b = (_a = this.currentItem) === null || _a === void 0 ? void 0 : _a.video) === null || _b === void 0 ? void 0 : _b.sections;
            var defaultToUse = this.isMobile
                ? CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_MOBILE
                : isToolbarInVideo && sections && (sections === null || sections === void 0 ? void 0 : sections.length) > 1
                    ? CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_MULTIPLE_SECTIONS_DEFAULT
                    : CAROUSEL_PROGRESS_BAR_SCALE_AMOUNT_ONE_SECTION_DEFAULT;
            return getCurrentValue((_f = (_e = (_d = (_c = this.options) === null || _c === void 0 ? void 0 : _c.styling) === null || _d === void 0 ? void 0 : _d.toolbar) === null || _e === void 0 ? void 0 : _e.progressBar) === null || _f === void 0 ? void 0 : _f.scaleAmount, defaultToUse, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarScreenshotViewer", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var width = getCurrentValue((_e = (_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.screenshotViewer) === null || _e === void 0 ? void 0 : _e.thumbnailWidth, CAROUSEL_VIDEO_SCREENSHOT_VIEWER_WIDTH_DEFAULT, this.isFullscreenMode);
            var textColor = getCurrentValue((_j = (_h = (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.styling) === null || _g === void 0 ? void 0 : _g.toolbar) === null || _h === void 0 ? void 0 : _h.progressBar) === null || _j === void 0 ? void 0 : _j.textOrForegroundColor, this.theme.colorFive, this.isFullscreenMode);
            return {
                width: width,
                height: width * 9 / 16,
                textColor: textColor
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarSectionGap", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.sectionGap, CAROUSEL_PROGRESS_BAR_SECTION_GAP, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarSeekColor", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.seekColor, convertHexToRgba(this.theme.colorFive, .5), this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarShowCurrentPosition", {
        get: function () {
            var _a, _b, _c, _d;
            return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.showCurrentPositionOnChange, PROGRESS_BAR_SHOW_CURRENT_POSITION_ON_CHANGE_DEFAULT, this.isFullscreenMode);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoProgressBarHeight", {
        get: function () {
            var _a, _b, _c, _d;
            var isEmbedded = this.isToolbarInVideo;
            var heightGiven = getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.toolbar) === null || _c === void 0 ? void 0 : _c.progressBar) === null || _d === void 0 ? void 0 : _d.height, undefined, this.isFullscreenMode);
            var defaultBasedOnEmbedded = isEmbedded ? CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_EMBEDDED : CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_NOT_EMBEDDED;
            var isGivenGreaterThanMax = heightGiven !== undefined && heightGiven > CAROUSEL_PROGRESS_BAR_HEIGHT_MAX;
            var isGivenLessThanMin = heightGiven !== undefined && heightGiven < CAROUSEL_PROGRESS_BAR_HEIGHT_MIN;
            return isGivenGreaterThanMax
                ? CAROUSEL_PROGRESS_BAR_HEIGHT_MAX
                : isGivenLessThanMin
                    ? CAROUSEL_PROGRESS_BAR_HEIGHT_MIN
                    : this.isMobile
                        ? CAROUSEL_PROGRESS_BAR_HEIGHT_DEFAULT_MOBILE
                        : defaultBasedOnEmbedded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionsLogic.prototype, "videoSeekAmount", {
        get: function () {
            var _a, _b;
            return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.seekAmount, SEEK_AMOUNT_DEFAULT, this.isFullscreenMode) / 1000;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region Methods
    OptionsLogic.prototype.getButtonColor = function (buttonName, fallbackColor) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var fallbackColorToUse = fallbackColor || this.theme.colorFive;
        var specificFillColor = getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.elements) === null || _c === void 0 ? void 0 : _c[buttonName]) === null || _d === void 0 ? void 0 : _d.fillColor, undefined, this.isFullscreenMode);
        switch (buttonName) {
            case CarouselElement.arrowLeft:
            case CarouselElement.arrowRight:
            case CarouselElement.dots:
                var navigationElementsColor = getCurrentValue((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.styling) === null || _f === void 0 ? void 0 : _f.navigation) === null || _g === void 0 ? void 0 : _g.elements) === null || _h === void 0 ? void 0 : _h.color, undefined, this.isFullscreenMode);
                return specificFillColor || navigationElementsColor || this.allFillColor || fallbackColorToUse;
            case CarouselElement.closeButton:
            case CarouselElement.fullscreenButton:
            case CarouselElement.nextButton:
            case CarouselElement.pauseButton:
            case CarouselElement.playButton:
            case CarouselElement.previousButton:
            case CarouselElement.seekBackButton:
            case CarouselElement.seekForwardButton:
                var toolbarElementsColor = getCurrentValue((_m = (_l = (_k = (_j = this.options) === null || _j === void 0 ? void 0 : _j.styling) === null || _k === void 0 ? void 0 : _k.toolbar) === null || _l === void 0 ? void 0 : _l.elements) === null || _m === void 0 ? void 0 : _m.color, undefined, this.isFullscreenMode);
                return specificFillColor || toolbarElementsColor || this.allFillColor || fallbackColorToUse;
            default:
                return specificFillColor || this.allFillColor || fallbackColorToUse;
        }
    };
    OptionsLogic.prototype.getButtonSize = function (buttonName, defaultOverride) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (defaultOverride === void 0) { defaultOverride = 0; }
        var sectionButtonSize;
        switch (buttonName) {
            case CarouselElement.arrowLeft:
            case CarouselElement.arrowRight:
            case CarouselElement.dots:
                sectionButtonSize = getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.navigation) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.size, this.defaultButtonSize, this.isFullscreenMode);
                break;
            case CarouselElement.closeButton:
            case CarouselElement.fullscreenButton:
            case CarouselElement.nextButton:
            case CarouselElement.pauseButton:
            case CarouselElement.playButton:
            case CarouselElement.previousButton:
            case CarouselElement.seekBackButton:
            case CarouselElement.seekForwardButton:
                sectionButtonSize = getCurrentValue((_h = (_g = (_f = (_e = this.options) === null || _e === void 0 ? void 0 : _e.styling) === null || _f === void 0 ? void 0 : _f.toolbar) === null || _g === void 0 ? void 0 : _g.elements) === null || _h === void 0 ? void 0 : _h.size, this.defaultButtonSize, this.isFullscreenMode);
                break;
        }
        var valueToUse = defaultOverride || sectionButtonSize || this.defaultButtonSize;
        return valueToUse;
    };
    OptionsLogic.prototype.getPaddingAmount = function (direction, item, defaultOverride) {
        var defaultPadding;
        switch (direction) {
            case SpacingDirection.bottom:
            case SpacingDirection.left:
            case SpacingDirection.right: {
                defaultPadding = defaultOverride !== undefined && defaultOverride >= 0 ? defaultOverride
                    : this.isDefaultItemDisplayLocation
                        ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_DEFAULT
                        : CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT;
                break;
            }
            case SpacingDirection.top: {
                defaultPadding = defaultOverride !== undefined && defaultOverride >= 0 ? defaultOverride
                    : this.isDefaultItemDisplayLocation
                        ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_DEFAULT
                        : this.isItemDisplayLocationBelow ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT - CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT : CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT;
                break;
            }
        }
        return this.getCustomPadding(direction, item, defaultPadding);
    };
    OptionsLogic.prototype.getThumbnailSpacingBasedOnThumbnailPositioning = function (valueToUseIfNoPositioningGiven) {
        if (valueToUseIfNoPositioningGiven === void 0) { valueToUseIfNoPositioningGiven = CAROUSEL_ITEM_SPACING_DEFAULT / 2; }
        var currentItemSpacing = this.getThumbnailSpacing(CAROUSEL_ITEM_SPACING_DEFAULT / 2);
        return this.thumbnailPositioning !== undefined ? currentItemSpacing : valueToUseIfNoPositioningGiven;
    };
    OptionsLogic.prototype.getThumbnailSpacing = function (defaultValue) {
        var _a, _b;
        if (defaultValue === void 0) { defaultValue = CAROUSEL_ITEM_SPACING_DEFAULT; }
        return getCurrentValue((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.spacing, defaultValue, this.isFullscreenMode);
    };
    OptionsLogic.prototype.getVideoCurrentStateIndicatorButtonColor = function (buttonName) {
        var _a, _b, _c, _d;
        return getCurrentValue((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.styling) === null || _b === void 0 ? void 0 : _b.videoCurrentStateIndicator) === null || _c === void 0 ? void 0 : _c[buttonName]) === null || _d === void 0 ? void 0 : _d.fillColor, undefined, this.isFullscreenMode);
    };
    OptionsLogic.prototype.getXlinkHref = function (xlinkHref) {
        return getCurrentValue(xlinkHref, undefined, this.isFullscreenMode);
    };
    //#endregion
    //#region Private Methods
    OptionsLogic.prototype.getCustomPadding = function (direction, item, defaultPadding) {
        var _a, _b, _c, _d, _e, _f;
        if (defaultPadding === void 0) { defaultPadding = CAROUSEL_ITEMS_MARGIN_HORIZONTAL_DEFAULT; }
        var containerPadding = (_a = this.containerPadding) === null || _a === void 0 ? void 0 : _a[direction];
        var itemPadding = (_d = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.styling) === null || _c === void 0 ? void 0 : _c[item]) === null || _d === void 0 ? void 0 : _d.padding;
        var itemPaddingFullscreen = getCurrentValue((_e = itemPadding === null || itemPadding === void 0 ? void 0 : itemPadding.fullscreen) === null || _e === void 0 ? void 0 : _e[direction], undefined, this.isFullscreenMode);
        var itemPaddingNonFullscreen = getCurrentValue((_f = itemPadding === null || itemPadding === void 0 ? void 0 : itemPadding.nonFullscreen) === null || _f === void 0 ? void 0 : _f[direction], undefined, this.isFullscreenMode);
        var itemPaddingAll = getCurrentValue(itemPadding === null || itemPadding === void 0 ? void 0 : itemPadding[direction], undefined, this.isFullscreenMode);
        var itemPaddingToUse = this.isFullscreenMode ? (itemPaddingFullscreen || itemPaddingAll) : (itemPaddingNonFullscreen || itemPaddingAll);
        var customPadding = itemPaddingToUse || containerPadding;
        return customPadding !== undefined ? customPadding : defaultPadding;
    };
    return OptionsLogic;
}());

var IMAGE_DRAW_INTERVAL = 100;
var LAST_DRAW_INTERVAL = 100;
/**
*Used to "seek" video items
**/
var useSetVideoCurrentTime = function (input) {
    var percent = input.percent, video = input.video;
    var currentItemIndex = useCarouselContext().currentItemIndex;
    var lastRenderTimeoutRef = useRef();
    var lastDrawTimeRef = useRef(0);
    var drawSnapshot = useCallback(function (duration) {
        if (!video || percent === undefined || percent < 0 || !isFinite(duration) || !isFinite(percent))
            return;
        video.currentTime = percent * duration;
    }, [percent, video]);
    var handleDrawSnapshot = useCallback(function () {
        if (video && percent !== undefined) {
            clearTimeout(lastRenderTimeoutRef.current);
            var duration_1 = video === null || video === void 0 ? void 0 : video.duration;
            lastRenderTimeoutRef.current = setTimeout(function () {
                drawSnapshot(duration_1);
            }, LAST_DRAW_INTERVAL);
            var now = Date.now();
            var hasEnoughTimePassed = Math.abs(now - lastDrawTimeRef.current) > IMAGE_DRAW_INTERVAL;
            if (!hasEnoughTimePassed || !isFinite(duration_1))
                return;
            lastDrawTimeRef.current = now;
            drawSnapshot(duration_1);
        }
    }, [drawSnapshot, percent, video]);
    useLayoutEffect(function () {
        handleDrawSnapshot();
    }, [handleDrawSnapshot]);
    useLayoutEffect(function () {
        if (video === null || video === void 0 ? void 0 : video.load) {
            video.load();
        }
    }, [video, currentItemIndex]);
};

var GET_CAROUSEL_VIDEO_DEFAULT = '';
var PREFER_HIGH_RES_DEFAULT = false;
/**
*Resolves the srcMain value.
@param preferHighRes - defaults to `false`.
**/
function resolveSrcMain(srcMain, preferHighRes) {
    if (preferHighRes === void 0) { preferHighRes = PREFER_HIGH_RES_DEFAULT; }
    if (typeof srcMain === 'string') {
        return srcMain;
    }
    if (preferHighRes)
        return (srcMain === null || srcMain === void 0 ? void 0 : srcMain.hiRes) || (srcMain === null || srcMain === void 0 ? void 0 : srcMain.loRes) || GET_CAROUSEL_VIDEO_DEFAULT;
    return (srcMain === null || srcMain === void 0 ? void 0 : srcMain.loRes) || (srcMain === null || srcMain === void 0 ? void 0 : srcMain.hiRes) || GET_CAROUSEL_VIDEO_DEFAULT;
}

var TEXT_TRANSLATION_AMOUNT_REF_INITIAL = 0;
var CarouselVideoProgressBarScreenshotViewer = function (props) {
    var _a, _b, _c, _d, _e;
    //#region Init
    var currentVideoSection = props.currentVideoSection, _f = props.percent, percent = _f === void 0 ? 0 : _f, srcMain = props.srcMain, toolbarRef = props.toolbarRef, type = props.type, videoRef = props.videoRef;
    var currentItem = useCarouselContext().currentItem;
    var sections = ((currentItem === null || currentItem === void 0 ? void 0 : currentItem.video) || {}).sections;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var screenShotTextContainerRef = useRef();
    var textTranslateOffsetRef = useRef({});
    var textTranslationAmountRef = useRef(TEXT_TRANSLATION_AMOUNT_REF_INITIAL);
    var videoThumbnailRef = useRef();
    useSetVideoCurrentTime({ percent: percent, video: videoThumbnailRef === null || videoThumbnailRef === void 0 ? void 0 : videoThumbnailRef.current });
    //#endregion
    //#region Functions/Handlers
    //#endregion
    //#region Side FX
    useLayoutEffect(function () {
        if ((textTranslateOffsetRef === null || textTranslateOffsetRef === void 0 ? void 0 : textTranslateOffsetRef.current) !== undefined && (textTranslateOffsetRef === null || textTranslateOffsetRef === void 0 ? void 0 : textTranslateOffsetRef.current) !== undefined) {
            textTranslateOffsetRef.current = {};
            textTranslationAmountRef.current = TEXT_TRANSLATION_AMOUNT_REF_INITIAL;
        }
    }, [currentVideoSection, currentItem]);
    //#endregion
    //#region JSX
    return (React$1.createElement("div", { className: CLASSNAME__VIDEO_SCREENSHOT_VIEWER, style: stylingLogic.getCarouselVideoProgressScreenshotViewerContainerStyle(percent, videoRef, toolbarRef.current, (_a = screenShotTextContainerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('div'), videoThumbnailRef.current, textTranslateOffsetRef) },
        React$1.createElement("video", { style: stylingLogic.carouselVideoProgressScreenshotViewerVideoStyle, ref: videoThumbnailRef, autoPlay: false, muted: true, loop: false },
            React$1.createElement("source", { src: resolveSrcMain(srcMain), type: "video/".concat(type) })),
        React$1.createElement("div", { ref: screenShotTextContainerRef, className: CLASSNAME__VIDEO_SCREENSHOT_VIEWER_TEXT_CONTAINER, style: stylingLogic.carouselVideoProgressScreenshotViewerTextContainerStyle },
            React$1.createElement("div", { style: stylingLogic.getCarouselVideoProgressScreenshotViewerTextStyle(percent, videoRef, (_b = screenShotTextContainerRef.current) === null || _b === void 0 ? void 0 : _b.querySelector('div'), videoThumbnailRef.current, textTranslateOffsetRef, textTranslationAmountRef) }, currentVideoSection !== undefined ? (_c = sections === null || sections === void 0 ? void 0 : sections[currentVideoSection]) === null || _c === void 0 ? void 0 : _c[0] : ''),
            React$1.createElement("div", null, (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) && !isNaN(percent * ((_d = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _d === void 0 ? void 0 : _d.duration)) ? getFormattedTimeString(percent * ((_e = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _e === void 0 ? void 0 : _e.duration)) : ''))));
    //#endregion
};
var CarouselVideoProgressBarScreenshotViewerMemoized = React$1.memo(CarouselVideoProgressBarScreenshotViewer);

var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection["bottom"] = "bottom";
    SwipeDirection["left"] = "left";
    SwipeDirection["right"] = "right";
    SwipeDirection["top"] = "top";
})(SwipeDirection || (SwipeDirection = {}));
var ON_MOVE_WHEN_GRABBING_SHORT_CIRCUIT_AMOUNT = 100;
//positive horizontal diff means right and positive vertical diff means down
var useOnSwipe = function (input) {
    var element = input.element, _a = input.isDisabled, isDisabled = _a === void 0 ? false : _a, _b = input.maxClickThreshold, maxClickThreshold = _b === void 0 ? 0 : _b, _c = input.swipeHandlers, swipeHandlers = _c === void 0 ? {} : _c, handleStyleChanges = input.handleStyleChanges;
    var lastCoordinateRef = useRef();
    var currentCoordinateRef = useRef();
    var startCoordinateRef = useRef();
    var endCoordinateRef = useRef();
    var mouseDownSourceElement = useRef();
    var mouseUpSourceElement = useRef();
    var isMobile = getIsMobile();
    var reset = useCallback(function () {
        startCoordinateRef.current = undefined;
        endCoordinateRef.current = undefined;
        mouseDownSourceElement.current = undefined;
        mouseUpSourceElement.current = undefined;
        lastCoordinateRef.current = undefined;
    }, []);
    var getShouldSkipCallback = useCallback(function (swipeDirection) {
        var _a;
        var skipTargets = (_a = swipeHandlers[swipeDirection]) === null || _a === void 0 ? void 0 : _a.skipCallbackParentClassnames;
        if (!skipTargets || skipTargets.length === 0 || !mouseDownSourceElement.current)
            return false;
        for (var _i = 0, skipTargets_1 = skipTargets; _i < skipTargets_1.length; _i++) {
            var skipTarget = skipTargets_1[_i];
            var isChildOfSkipElement = getAncestorContainsClassname(mouseDownSourceElement.current, skipTarget);
            if (isChildOfSkipElement)
                return true;
        }
        return false;
    }, [swipeHandlers]);
    var handleMove = useCallback(function (e) {
        if (mouseDownSourceElement.current) {
            setCoordinate(currentCoordinateRef, e);
            if (lastCoordinateRef.current) {
                var _a = getCoordinateDifference(currentCoordinateRef.current, lastCoordinateRef.current), xDiff = _a.xDiff, yDiff = _a.yDiff;
                if (Math.abs(xDiff) > ON_MOVE_WHEN_GRABBING_SHORT_CIRCUIT_AMOUNT || Math.abs(yDiff) > ON_MOVE_WHEN_GRABBING_SHORT_CIRCUIT_AMOUNT) {
                    setCoordinate(lastCoordinateRef, e);
                    return;
                }
                swipeHandlers.onMoveWhenGrabbing && swipeHandlers.onMoveWhenGrabbing(xDiff, yDiff);
            }
            setCoordinate(lastCoordinateRef, e);
        }
    }, [swipeHandlers]);
    var handleClick = useCallback(function (e) {
        //this is needed to be able to use handleClickStop
    }, []);
    var handleClickStop = useCallback(function (e) {
        // console.log({ startCoordinate: startCoordinateRef.current, endCoordinate: endCoordinateRef.current, downSource: mouseDownSourceElement.current, upSource: mouseUpSourceElement.current });
        if ((startCoordinateRef === null || startCoordinateRef === void 0 ? void 0 : startCoordinateRef.current) && (endCoordinateRef === null || endCoordinateRef === void 0 ? void 0 : endCoordinateRef.current)) {
            var distance = getCoordinateDifference(startCoordinateRef.current, endCoordinateRef.current).distance;
            if (distance > maxClickThreshold && mouseDownSourceElement.current === mouseUpSourceElement.current) {
                stopPropagation(e);
            }
        }
        reset();
        window.removeEventListener('click', handleClickStop, true);
    }, [maxClickThreshold, reset]);
    /**
    *Determines whether the swipe actually occurs and which callback to trigger
    **/
    var handleSwiping = useCallback(function (e) {
        var _a, _b, _c, _d;
        var _e = getEndCoordinate(e), endX = _e.endX, endY = _e.endY;
        var _f = startCoordinateRef.current, startX = _f.x, startY = _f.y;
        var distance = getCoordinateDifference(startCoordinateRef.current, endCoordinateRef.current).distance;
        //no need to do anything if event is being registered as a click rather than swipe
        if (distance <= maxClickThreshold)
            return;
        var verticalDiff = endY - startY;
        var horizontalDiff = endX - startX;
        var verticalDiffAbsolute = Math.abs(verticalDiff);
        var horizontalDiffAbsolute = Math.abs(horizontalDiff);
        var absoluteDiff = Math.abs(verticalDiffAbsolute - horizontalDiffAbsolute);
        var smallerDiff = Math.min(verticalDiffAbsolute, horizontalDiffAbsolute);
        var isAmbiguous = absoluteDiff < smallerDiff;
        // console.log({ verticalDiffAbsolute, horizontalDiffAbsolute, absoluteDiff, smallerDiff, isAmbiguous });
        if (isAmbiguous)
            return;
        if (horizontalDiffAbsolute !== smallerDiff) {
            //is horizontal
            if (swipeHandlers.minSwipeThreshold && swipeHandlers.minSwipeThreshold > horizontalDiffAbsolute)
                return;
            if (horizontalDiff > 0) {
                var shouldSkipCallback = getShouldSkipCallback(SwipeDirection.left);
                if (((_a = swipeHandlers.left) === null || _a === void 0 ? void 0 : _a.callback) && !shouldSkipCallback) {
                    swipeHandlers.left.callback(e);
                }
            }
            else {
                var shouldSkipCallback = getShouldSkipCallback(SwipeDirection.right);
                if (((_b = swipeHandlers.right) === null || _b === void 0 ? void 0 : _b.callback) && !shouldSkipCallback) {
                    swipeHandlers.right.callback(e);
                }
            }
        }
        else {
            if (swipeHandlers.minSwipeThreshold && swipeHandlers.minSwipeThreshold > verticalDiffAbsolute)
                return;
            if (verticalDiff > 0) {
                var shouldSkipCallback = getShouldSkipCallback(SwipeDirection.top);
                if (((_c = swipeHandlers.top) === null || _c === void 0 ? void 0 : _c.callback) && !shouldSkipCallback) {
                    swipeHandlers.top.callback(e);
                }
            }
            else {
                var shouldSkipCallback = getShouldSkipCallback(SwipeDirection.bottom);
                if (((_d = swipeHandlers.bottom) === null || _d === void 0 ? void 0 : _d.callback) && !shouldSkipCallback) {
                    swipeHandlers.bottom.callback(e);
                }
            }
        }
    }, [
        maxClickThreshold,
        swipeHandlers.minSwipeThreshold,
        swipeHandlers.left,
        swipeHandlers.right,
        swipeHandlers.top,
        swipeHandlers.bottom,
        getShouldSkipCallback
    ]);
    var handleEnd = useCallback(function (e) {
        stopPropagation(e);
        if (!startCoordinateRef.current || isDisabled)
            return;
        setCoordinate(endCoordinateRef, e);
        handleStyleChanges && handleStyleChanges('end', element);
        window.addEventListener('click', handleClickStop, true);
        if (mouseUpSourceElement) {
            mouseUpSourceElement.current = e.target;
        }
        if (getIsTouchEvent(e)) {
            //have to remove these listeners here to prevent bug where swiping anywhere on the screen would cause any 
            //carousel that had been previously iteracted with to register the swipe
            window.removeEventListener('touchend', handleEnd);
            window.removeEventListener('touchmove', handleMove);
        }
        handleSwiping(e);
    }, [element, handleClickStop, handleMove, handleStyleChanges, handleSwiping, isDisabled]);
    var handleStart = useCallback(function (e) {
        stopPropagation(e);
        if (isDisabled)
            return;
        handleStyleChanges && handleStyleChanges('start', element);
        if (mouseDownSourceElement) {
            mouseDownSourceElement.current = e.target;
        }
        if (getIsTouchEvent(e)) {
            setCoordinateWithTouchEvent(startCoordinateRef, e);
            //have to add these listeners here to prevent bug where swiping anywhere on the screen would cause any 
            //carousel that had been previously iteracted with to register the swipe
            window.addEventListener('touchend', handleEnd);
            window.addEventListener('touchmove', handleMove);
        }
        else {
            setCoordinateWithMouseEvent(startCoordinateRef, e);
        }
    }, [element, handleEnd, handleMove, handleStyleChanges, isDisabled]);
    useEffect(function () {
        if (!element)
            return;
        element.addEventListener('click', handleClick);
        element.addEventListener('mousedown', handleStart);
        window.addEventListener('mouseup', handleEnd);
        if (swipeHandlers === null || swipeHandlers === void 0 ? void 0 : swipeHandlers.onMoveWhenGrabbing) {
            window.addEventListener('mousemove', handleMove);
        }
        if (isMobile) {
            element.addEventListener('touchstart', handleStart);
        }
        return function () {
            element.removeEventListener('click', handleClick);
            element.removeEventListener('mousedown', handleStart);
            window.removeEventListener('mouseup', handleEnd);
            element.removeEventListener('touchstart', handleStart);
            if (swipeHandlers === null || swipeHandlers === void 0 ? void 0 : swipeHandlers.onMoveWhenGrabbing) {
                window.removeEventListener('mousemove', handleMove);
            }
        };
    }, [
        element,
        handleClick,
        handleClickStop,
        handleStart,
        handleMove,
        handleEnd,
        isMobile,
        swipeHandlers
    ]);
};
//#region Helpers
function getEndCoordinate(e) {
    var _a;
    var endX, endY;
    if (getIsTouchEvent(e)) {
        var event_1 = e;
        var changedTouch = ((_a = event_1.changedTouches) === null || _a === void 0 ? void 0 : _a[0]) || {};
        endX = (changedTouch === null || changedTouch === void 0 ? void 0 : changedTouch.pageX) || changedTouch.clientX;
        endY = (changedTouch === null || changedTouch === void 0 ? void 0 : changedTouch.pageY) || changedTouch.clientY;
    }
    else {
        var event_2 = e;
        endX = (event_2 === null || event_2 === void 0 ? void 0 : event_2.x) || (event_2 === null || event_2 === void 0 ? void 0 : event_2.clientX) || (event_2 === null || event_2 === void 0 ? void 0 : event_2.pageX);
        endY = (event_2 === null || event_2 === void 0 ? void 0 : event_2.y) || (event_2 === null || event_2 === void 0 ? void 0 : event_2.clientY) || (event_2 === null || event_2 === void 0 ? void 0 : event_2.pageY);
    }
    return { endX: endX, endY: endY };
}
function getIsTouchEvent(e) {
    return !!(e === null || e === void 0 ? void 0 : e.changedTouches);
}
function setCoordinate(ref, e) {
    if (getIsTouchEvent(e)) {
        setCoordinateWithTouchEvent(ref, e);
    }
    else {
        setCoordinateWithMouseEvent(ref, e);
    }
}
function setCoordinateWithMouseEvent(ref, e) {
    ref.current = {
        x: e.x || e.clientX || e.pageX,
        y: e.y || e.clientY || e.pageY,
    };
}
function setCoordinateWithTouchEvent(ref, e) {
    var _a;
    var event = ((_a = e.changedTouches) === null || _a === void 0 ? void 0 : _a[0]) || {};
    ref.current = {
        x: event.pageX || event.clientX,
        y: event.pageY || event.clientY,
    };
}
//#endregion

var useRenderCount = function () {
    var countRef = useRef(-1);
    useEffect(function () {
        countRef.current++;
    });
    return countRef;
};

var useOnResize = function (onResize) {
    var resizeIntervalRef = useRef(-1);
    var lastWidthRef = useRef(-1);
    useLayoutEffect(function () {
        function handleResize() {
            clearInterval(resizeIntervalRef.current);
            resizeIntervalRef.current = setInterval(function () {
                var windowWidth = window.innerWidth;
                if (windowWidth === lastWidthRef.current)
                    return;
                onResize && onResize(windowWidth);
                lastWidthRef.current = windowWidth;
                clearInterval(resizeIntervalRef.current);
            }, WINDOW_RESIZE_DEBOUNCE);
        }
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [onResize]);
};

var CHECK_INTERVAL = 10;
/**
*Calculates the recommended aspect ratio based on the items given.
*Only runs if {@link OptionsLogic.itemViewerUseRecommendedAspectRatio itemViewerUseRecommendedAspectRatio} is `true`.
**/
//todo: modify useRecommendedAspectRatio to check for an image and only count it in the total if it is either an image (srcMain) or has a thumbnail.  Prefer srcMain for images and srcThumbnail for everything else
var useRecommendedAspectRatio = function (items) {
    var _a = useState(USE_RECOMMENDEDED_ASPECT_RATIO_INITIAL), recommendedAspectRatio = _a[0], setRecommendedAspectRatio = _a[1];
    var lowestRatioRef = useRef(5);
    var hasStartedRef = useRef(false);
    var imageCountRef = useRef(items.length);
    var imagesRef = useRef([]);
    var intervalRef = useRef();
    var optionsLogic = useBusinessLogic().optionsLogic;
    var setRatio = useCallback(function () {
        for (var _i = 0, _a = imagesRef.current; _i < _a.length; _i++) {
            var image = _a[_i];
            var ratio = image.height / image.width;
            // console.log({width: image.width, height: image.height, ratio, src: image.currentSrc});
            if (ratio < lowestRatioRef.current)
                lowestRatioRef.current = ratio;
        }
        // console.log({ lowestRatioRef: lowestRatioRef.current });
        setRecommendedAspectRatio(lowestRatioRef.current);
    }, []);
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (hasStartedRef.current || !optionsLogic.itemViewerUseRecommendedAspectRatio)
            return;
        if (optionsLogic.maxHeight !== CAROUSEL_MAX_HEIGHT_DEFAULT) {
            var navigationContainer = (_b = (_a = optionsLogic.carouselContainerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.querySelector(".".concat(CLASSNAME__NAVIGATION));
            var navigationHeight = (navigationContainer === null || navigationContainer === void 0 ? void 0 : navigationContainer.getBoundingClientRect().height) || 0;
            var itemsContainer = (_d = (_c = optionsLogic.carouselContainerRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.querySelector(".".concat(CLASSNAME__CAROUSEL_ITEMS_CONTAINER));
            var itemsContainerHeight = itemsContainer.getBoundingClientRect().height || 0;
            var carouselItem = (_f = (_e = optionsLogic.carouselContainerRef) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.querySelector(".".concat(CLASSNAME__CAROUSEL_ITEM));
            var carouselItemMarginTop = parseInt((_g = getComputedStyle(carouselItem)) === null || _g === void 0 ? void 0 : _g.marginTop, 10) || 0;
            if (!navigationHeight || !itemsContainerHeight || !carouselItemMarginTop)
                return;
            // console.log({ navigationHeight, itemsContainerHeight, carouselItem, carouselItemMarginTop });
            var paddingTop = optionsLogic.getPaddingAmount(SpacingDirection.top, CarouselSection.container);
            var paddingBottom = optionsLogic.getPaddingAmount(SpacingDirection.bottom, CarouselSection.container);
            var containerWidth = ((_j = (_h = optionsLogic.carouselContainerRef) === null || _h === void 0 ? void 0 : _h.current) === null || _j === void 0 ? void 0 : _j.getBoundingClientRect().width) || 0;
            var paddingLeft = optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.container);
            var paddingRight = optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.container);
            var maxItemHeight = optionsLogic.maxHeight - navigationHeight - paddingBottom - paddingTop - itemsContainerHeight - carouselItemMarginTop;
            hasStartedRef.current = true;
            setRecommendedAspectRatio(maxItemHeight / (containerWidth - paddingLeft - paddingRight));
            return;
        }
        hasStartedRef.current = true;
        var _loop_1 = function (item) {
            try {
                var isImage = getIsItemOfType(item, 'image');
                var imageSrc_1 = (isImage ? item.srcMain : item.srcThumbnail) || '';
                var image_1 = new Image();
                image_1.src = imageSrc_1;
                image_1.onload = function () {
                    var itemToPush = imageSrc_1 ? image_1 : { width: 1, height: Number.MAX_SAFE_INTEGER };
                    imagesRef.current.push(itemToPush);
                };
            }
            catch (error) { }
        };
        //load the images
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_1(item);
        }
        // console.log({ imagesRefLength: imagesRef.current.length, imageCountRef: imageCountRef.current });
        //run calculation after all images loaded
        intervalRef.current = setInterval(function () {
            // console.log({ imagesRefLength: imagesRef.current.length, imageCountRef: imageCountRef.current });
            if (imagesRef.current.length < imageCountRef.current)
                return;
            setRatio();
            clearInterval(intervalRef.current);
        }, CHECK_INTERVAL);
        return function () {
            clearInterval(intervalRef.current);
            hasStartedRef.current = false;
        };
    }, [items, optionsLogic, setRatio]);
    return recommendedAspectRatio;
};

var CURRENT_INTERVAL_INITIAL = 0;
var DATA_POINT_COLLECTION_INTERVAL = 25;
var HAS_CURRENT_ITEM_INDEX_CHANGED_INITIAL = false;
var LAST_VIEWPORT_WIDTH_REF_INITIAL = 0;
var NUMBER_OF_DATA_POINTS = 15;
var RESIZE_TIMEOUT_DURATION = 500;
var CarouselItemViewerContainer = forwardRef(function (props, ref) {
    var children = props.children, onClick = props.onClick;
    var _a = useCarouselContext(), currentItemIndex = _a.currentItemIndex, isFullscreenMode = _a.isFullscreenMode, itemContainerHeight = _a.itemContainerHeight, setItemContainerHeight = _a.setItemContainerHeight, items = _a.items;
    var _b = useBusinessLogic(), stylingLogic = _b.stylingLogic, optionsLogic = _b.optionsLogic;
    var heightsRef = useRef([]);
    var intervalRef = useRef(-1);
    var resizeTimeOutRef = useRef();
    var hasCurrentItemIndexChangedRef = useRef(HAS_CURRENT_ITEM_INDEX_CHANGED_INITIAL);
    var currentInvervalRef = useRef(CURRENT_INTERVAL_INITIAL);
    var itemContainerRef = useRef(null);
    var lastViewportWidthRef = useRef(LAST_VIEWPORT_WIDTH_REF_INITIAL);
    var renderCountRef = useRenderCount();
    useImperativeHandle(ref, function () { return itemContainerRef.current; });
    var recommendedAspectRatio = useRecommendedAspectRatio(items);
    //#region Functions
    var setHeightAuto = useCallback(function () {
        var _a;
        if (((_a = heightsRef === null || heightsRef === void 0 ? void 0 : heightsRef.current) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return;
        // console.log({ heightsRef: heightsRef.current, newHEight: getBoundValue(getMostFrequentItem(heightsRef.current), ITEM_CONTAINER_MIN_DEFAULT, optionsLogic.maxHeight) });
        setItemContainerHeight(Math.ceil(getBoundValue(getMostFrequentItem(heightsRef.current), ITEM_CONTAINER_MIN_DEFAULT, optionsLogic.maxHeight)));
        clearInterval(intervalRef.current);
    }, [optionsLogic.maxHeight, setItemContainerHeight]);
    /**
    *@param aspectRatio - a decimal value representing an aspect ratio (e.g. 4:3 => 3/4 => .75)
    **/
    var setHeightBasedOnAspectRatio = useCallback(function (aspectRatio) {
        var _a, _b;
        var itemContainerWidth = ((_a = itemContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) || 0;
        var subContainer = (_b = itemContainerRef.current) === null || _b === void 0 ? void 0 : _b.querySelector('div');
        var paddingLeft = parseInt((subContainer === null || subContainer === void 0 ? void 0 : subContainer.style.paddingLeft) || '20', 10);
        var paddingRight = parseInt((subContainer === null || subContainer === void 0 ? void 0 : subContainer.style.paddingRight) || '20', 10);
        var availableWidth = itemContainerWidth - paddingLeft - paddingRight;
        if (availableWidth < 0)
            return false;
        setItemContainerHeight(Math.ceil(availableWidth * aspectRatio));
        return true;
    }, [setItemContainerHeight]);
    var startAutoHeightInterval = useCallback(function () {
        var itemViewerAspectRatio = optionsLogic.itemViewerAspectRatio;
        if (!optionsLogic.itemViewerUseRecommendedAspectRatio && itemViewerAspectRatio !== 'auto') {
            setHeightBasedOnAspectRatio(itemViewerAspectRatio);
            return;
        }
        return setInterval(function () {
            var _a;
            // console.log({ itemContainerRef: itemContainerRef.current?.getBoundingClientRect(), currentInvervalRef: currentInvervalRef.current, test: 'test' });
            if (currentInvervalRef.current >= NUMBER_OF_DATA_POINTS || hasCurrentItemIndexChangedRef.current) {
                clearInterval(intervalRef.current);
                // if (Number(itemContainerHeight) > 0) return;
                if (!hasCurrentItemIndexChangedRef.current) {
                    setHeightAuto();
                }
                return;
            }
            currentInvervalRef.current++;
            var heightLocal = ((_a = itemContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || ITEM_CONTAINER_HEIGHT_INITIAL;
            if (heightLocal === ITEM_CONTAINER_HEIGHT_INITIAL)
                return;
            heightsRef.current.push(Math.ceil(heightLocal));
        }, DATA_POINT_COLLECTION_INTERVAL);
    }, [
        optionsLogic.itemViewerAspectRatio,
        optionsLogic.itemViewerUseRecommendedAspectRatio,
        setHeightAuto,
        setHeightBasedOnAspectRatio
    ]);
    var resetAutoHeight = useCallback(function () {
        if (optionsLogic.itemViewerAspectRatio !== 'auto' ||
            optionsLogic.itemViewerUseRecommendedAspectRatio)
            return;
        heightsRef.current = [];
        currentInvervalRef.current = CURRENT_INTERVAL_INITIAL;
        hasCurrentItemIndexChangedRef.current = HAS_CURRENT_ITEM_INDEX_CHANGED_INITIAL;
        setItemContainerHeight(ITEM_CONTAINER_HEIGHT_INITIAL);
    }, [optionsLogic.itemViewerAspectRatio, optionsLogic.itemViewerUseRecommendedAspectRatio, setItemContainerHeight]);
    var setLastViewportWidth = useCallback(function () {
        lastViewportWidthRef.current = window.innerWidth;
    }, []);
    //#endregion
    //#region Side FX
    useEffect(function () {
        if (currentItemIndex !== 0 && !hasCurrentItemIndexChangedRef.current) {
            hasCurrentItemIndexChangedRef.current = true;
            setHeightAuto();
        }
    }, [currentItemIndex, setHeightAuto]);
    useLayoutEffect(function () {
        function onResize() {
            clearTimeout(resizeTimeOutRef.current);
            resizeTimeOutRef.current = setTimeout(function () {
                clearInterval(intervalRef.current);
                if (window.innerWidth !== lastViewportWidthRef.current &&
                    optionsLogic.itemViewerAspectRatio === 'auto' &&
                    !optionsLogic.itemViewerUseRecommendedAspectRatio) {
                    intervalRef.current = startAutoHeightInterval();
                }
                else if (!isFullscreenMode &&
                    (optionsLogic.itemViewerUseRecommendedAspectRatio || optionsLogic.itemViewerAspectRatio !== 'auto')) {
                    setHeightBasedOnAspectRatio(optionsLogic.itemViewerUseRecommendedAspectRatio ? recommendedAspectRatio : optionsLogic.itemViewerAspectRatio);
                }
                setLastViewportWidth();
            }, RESIZE_TIMEOUT_DURATION);
        }
        window.addEventListener('resize', onResize);
        if (optionsLogic.isDefaultItemDisplayLocation ||
            renderCountRef.current < 0 ||
            window.innerWidth === lastViewportWidthRef.current ||
            isFullscreenMode) {
            clearInterval(intervalRef.current);
            return;
        }
        onResize();
        return function () {
            window.removeEventListener('resize', onResize);
            clearInterval(intervalRef.current);
        };
    }, [
        isFullscreenMode,
        itemContainerHeight,
        optionsLogic.isDefaultItemDisplayLocation,
        optionsLogic.itemViewerAspectRatio,
        optionsLogic.itemViewerUseRecommendedAspectRatio,
        recommendedAspectRatio,
        renderCountRef,
        setHeightBasedOnAspectRatio,
        setLastViewportWidth,
        startAutoHeightInterval
    ]);
    useOnResize(function () {
        if (isFullscreenMode)
            return;
        resetAutoHeight();
    });
    useEffect(function () {
        if (optionsLogic.itemViewerUseRecommendedAspectRatio) {
            if (recommendedAspectRatio < USE_RECOMMENDEDED_ASPECT_RATIO_INITIAL) {
                setHeightBasedOnAspectRatio(recommendedAspectRatio);
                return;
            }
        }
        else {
            intervalRef.current = startAutoHeightInterval();
        }
        return function () { return clearInterval(intervalRef.current); };
    }, [setHeightBasedOnAspectRatio, optionsLogic.itemViewerUseRecommendedAspectRatio, recommendedAspectRatio, setItemContainerHeight, startAutoHeightInterval]);
    //#endregion
    return (React.createElement("div", { ref: itemContainerRef, style: stylingLogic.getCarouselItemContainerStyle(itemContainerHeight), className: CLASSNAME__ITEM_CONTAINER, onClick: onClick }, children));
});

var CarouselItemViewerCustomButton = forwardRef(function (props, ref) {
    var _a = props.classNamesToInclude, classNamesToInclude = _a === void 0 ? [] : _a, _b = props.fillColor, fillColor = _b === void 0 ? '' : _b, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.showButton, showButton = _d === void 0 ? true : _d, _e = props.style, style = _e === void 0 ? {} : _e, _f = props.useElementStyle, useElementStyle = _f === void 0 ? {} : _f, xlinkHref = props.xlinkHref;
    var optionsLogic = useBusinessLogic().optionsLogic;
    var classNamesToIncludeClassname = useMemo(function () { return classNamesToInclude.join(' '); }, [classNamesToInclude]);
    var defaultStyles = useMemo(function () { return StylingLogic.getColorStyle(fillColor, 'fill', {
        transformOrigin: 'center',
    }); }, [fillColor]);
    var xlinkHrefToUse = optionsLogic.getXlinkHref(xlinkHref);
    return (React.createElement("svg", { style: style, ref: ref, onClick: onClick, className: "".concat(CLASSNAME__ITEM_VIEWER_BUTTON, " ").concat(classNamesToIncludeClassname, " ").concat(!showButton ? CLASSNAME__HIDDEN : '') },
        React.createElement("use", { style: __assign(__assign({}, useElementStyle), defaultStyles), xlinkHref: xlinkHrefToUse, href: xlinkHrefToUse })));
});

var CloseButton = forwardRef(function (props, ref) {
    var _a = props.childStyle, childStyle = _a === void 0 ? {} : _a, _b = props.className, className = _b === void 0 ? CLASSNAME__BUTTON : _b, _c = props.classNameModifier, classNameModifier = _c === void 0 ? '' : _c, fillColor = props.fillColor, _d = props.onClick, onClick = _d === void 0 ? function () { return null; } : _d, _e = props.style, style = _e === void 0 ? {} : _e;
    var _f = useBusinessLogic(), stylingLogic = _f.stylingLogic, optionsLogic = _f.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var classModifierName = "".concat(className, "--").concat(classNameModifier);
    var leftClassName = "".concat(className, "--close-left");
    var leftModifierClassname = "".concat(leftClassName, "-").concat(classNameModifier);
    var rightClassName = "".concat(className, "--close-right");
    var rightModifierClassname = "".concat(rightClassName, "-").concat(classNameModifier);
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'backgroundColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.closeButton;
    return (React.createElement("button", { style: __assign(__assign({}, style), stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth)), ref: ref, onClick: onClick, className: "".concat(className, " ").concat(classNameModifier ? classModifierName : '') },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(leftClassName, " ").concat(classNameModifier ? leftModifierClassname : '') }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(rightClassName, " ").concat(classNameModifier ? rightModifierClassname : '') })));
});

/**
 *Creates keyboard shortcuts for a component.
 *If {@link UseKeyboardShortcutsInput.skipCondition skipCondition} resolves to `true`, then the listener is not added for that render cycle.
**/
var useKeyboardShortcuts = function (input) {
    var keyboardShortcuts = input.keyboardShortcuts, skipCondition = input.skipCondition;
    var shouldSkip = skipCondition && skipCondition();
    useEffect(function () {
        function getAreModifiersEqual(modifier, isCtrlKeyPressed, isAltKeyPressed, isShiftKeyPressed) {
            if ((modifier === undefined || modifier === null) &&
                !isAltKeyPressed &&
                !isCtrlKeyPressed &&
                !isShiftKeyPressed)
                return true;
            if (isCtrlKeyPressed && modifier === 'ctrl')
                return true;
            if (isShiftKeyPressed && modifier === 'shift')
                return true;
            if (isAltKeyPressed && modifier === 'alt')
                return true;
            return false;
        }
        function handleKeyDown(e) {
            stopPropagation(e);
            if (shouldSkip)
                return;
            var keyPressed = e.key, isAltKeyPressed = e.altKey, isCtrlKeyPressed = e.ctrlKey, isShiftKeyPressed = e.shiftKey;
            for (var _i = 0, keyboardShortcuts_1 = keyboardShortcuts; _i < keyboardShortcuts_1.length; _i++) {
                var keyboardShortcut = keyboardShortcuts_1[_i];
                var keys = keyboardShortcut.keys, action = keyboardShortcut.action;
                for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                    var key = keys_1[_a];
                    var isKeyArray = Array.isArray(key);
                    var keyToUse = isKeyArray ? key === null || key === void 0 ? void 0 : key[1] : key;
                    var modifierToUse = isKeyArray ? key === null || key === void 0 ? void 0 : key[0] : undefined;
                    var areKeysEqual = keyPressed.toLowerCase() === keyToUse.toLowerCase();
                    if (!areKeysEqual)
                        continue;
                    var areModifiersEqual = getAreModifiersEqual(modifierToUse, isCtrlKeyPressed, isAltKeyPressed, isShiftKeyPressed);
                    if (areKeysEqual && areModifiersEqual) {
                        action && action();
                        return;
                    }
                }
            }
        }
        if (shouldSkip)
            return;
        window.addEventListener('keydown', handleKeyDown);
        return function () {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyboardShortcuts, shouldSkip, skipCondition]);
};

var TIMEOUT_DURATION = 1000;
var CarouselItemViewerShortcutIndicator = function (props) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, children = props.children, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.isVisible, isVisible = _c === void 0 ? true : _c, _d = props.position, position = _d === void 0 ? 'center' : _d, _e = props.shortcuts, shortcuts = _e === void 0 ? [] : _e, _f = props.showButton, showButton = _f === void 0 ? true : _f, _g = props.style, style = _g === void 0 ? {} : _g;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var timeoutRef = useRef(null);
    var _h = useState(!isShortcutVisible || !actionName), hideShortcut = _h[0], setHideShortcut = _h[1];
    var isMobile = getIsMobile();
    useEffect(function () {
        setHideShortcut(!isShortcutVisible || !actionName);
        if (isMobile) {
            clearInterval(timeoutRef.current);
            timeoutRef.current = setTimeout(function () {
                setHideShortcut(true);
            }, TIMEOUT_DURATION);
        }
    }, [isMobile, isShortcutVisible, actionName]);
    //#region JSX
    var hiddenClassName = useMemo(function () { return isVisible ? "" : CLASSNAME__DISPLAY_NONE; }, [isVisible]);
    return (React$1.createElement("div", { className: "".concat(CLASSNAME__ITEM_VIEWER_SHORTCUT_INDICATOR, " ").concat(hiddenClassName), style: __assign(__assign({}, stylingLogic.getCarouselShortcutIndicatorContainerStlye(showButton)), style) },
        hideShortcut ? null : (React$1.createElement("div", { style: stylingLogic.getCarouselShortcutIndicatorTextStlye(position) },
            React$1.createElement("span", null, capitalize(actionName)),
            shortcuts.length > 0 ? (React$1.createElement("span", null,
                "\u00A0(",
                getShortcutsString(shortcuts),
                ")")) : null)),
        children));
    //#endregion
};

var CarouselItemViewerCloseButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.position, shortcutPosition = _d === void 0 ? 'center' : _d, videoRef = props.videoRef;
    var _e = useCarouselContext(), elementStylings = _e.elementStylings, setIsFullscreenMode = _e.setIsFullscreenMode, isFullscreenMode = _e.isFullscreenMode, setCurrentVideoCurrentTime = _e.setCurrentVideoCurrentTime;
    var _f = useBusinessLogic(), optionsLogic = _f.optionsLogic, toolbarActionsLogic = _f.toolbarActionsLogic, toolbarLogic = _f.toolbarLogic, stylingLogic = _f.stylingLogic;
    var closeAction = toolbarActionsLogic.getClose();
    var _g = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.closeButton) || {}, svgHref = _g.svgHref, style = _g.style;
    var fillColor = optionsLogic.getButtonColor(CarouselElement.closeButton);
    useKeyboardShortcuts({
        keyboardShortcuts: [
            {
                keys: closeAction.keys,
                action: function () {
                    onClickLocal();
                },
            },
        ],
        skipCondition: function () { return toolbarLogic === null || toolbarLogic === void 0 ? void 0 : toolbarLogic.getShouldSkipKeyboardShortcuts(); },
    });
    var onClickLocal = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            onClick && onClick();
            setIsFullscreenMode(false);
            setCurrentVideoCurrentTime(((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.currentTime) || CURRENT_VIDEO_CURRENT_TIME_DEFAULT);
            return [2 /*return*/];
        });
    }); }, [onClick, setCurrentVideoCurrentTime, setIsFullscreenMode, videoRef]);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, isShortcutVisible: isShortcutVisible, position: shortcutPosition, shortcuts: closeAction.keys, showButton: isFullscreenMode }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClickLocal, xlinkHref: svgHref, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.closeButton, subElementName: null }), useElementStyle: style, fillColor: fillColor }) :
        React.createElement(CloseButton, { ref: ref, onClick: onClickLocal, fillColor: fillColor, childStyle: style })));
});

var CarouselItemViewerToolbarText = function (props) {
    var description = props.description, _a = props.isVideo, isVideo = _a === void 0 ? false : _a, timeStrings = props.timeStrings;
    var stylingLogic = useBusinessLogic().stylingLogic;
    return (React.createElement("span", { style: stylingLogic.carouselToolbarTextStyle, className: CLASSNAME__ITEM_VIEWER_TOOLBAR_TEXT },
        isVideo ? (React.createElement(React.Fragment, null,
            React.createElement("div", { style: stylingLogic.carouselVideoTimeTextStyle },
                React.createElement("span", { style: stylingLogic.getCarouselVideoTimeTextBlockStyle(timeStrings.currentTimeStr) }, timeStrings.currentTimeStr),
                React.createElement("span", { style: stylingLogic.carouselVideoTimeTextDividierStyle }, "/"),
                React.createElement("span", { style: stylingLogic.getCarouselVideoTimeTextBlockStyle(timeStrings.durationStr) }, timeStrings.durationStr)),
            React.createElement("span", null, "\u2022"))) : null,
        React.createElement("span", { style: stylingLogic.carouselToolbarTextDescriptionStyle }, description)));
};

var MAP_SECTION_INTERVAL = 100;
var NEXT_SECTION_OFFSET = .0000000000000001;
var EXAMPLE_SENTENCE = 'Please check CarouselVideoOptions.sections in CarouselVideo.tsx for examples.';
/**
*Create an object where the keys are the sections and the value is an object with a
*{@link SectionToValueMappingValue start and end value}, representing what percent
*of the video that section spans.
**/
var useSectionToValueMapping = function (input) {
    var videoRef = input.videoRef;
    var currentItem = useCarouselContext().currentItem;
    var sections = ((currentItem === null || currentItem === void 0 ? void 0 : currentItem.video) || {}).sections;
    var checkIsVideoLoadedTimoutRef = useRef(-1);
    var sectionToValueMappingRef = useRef({});
    var mapSectionRanges = useCallback(function () {
        var _a, _b, _c;
        if (!sections || sections.length <= 0 || !(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
            sectionToValueMappingRef.current = {};
            return;
        }
        if (Object.values(sectionToValueMappingRef.current).length > 0)
            return;
        var amountBefore = 0;
        var videoDuration = (((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.duration) || 0) * NUMBER_OF_MS_IN_A_SECOND;
        var isUsingNumberedSections = typeof ((_b = sections === null || sections === void 0 ? void 0 : sections[0]) === null || _b === void 0 ? void 0 : _b[1]) === 'number';
        var indexToUse = 0;
        try {
            for (var index = 0; index < sections.length; index++) {
                indexToUse = index;
                if (isUsingNumberedSections) {
                    var section = sections[index];
                    var sectionDuration = section[1];
                    amountBefore += sectionDuration;
                }
                else {
                    var nextSection = sections[index + 1];
                    //all sections but the last one
                    if (nextSection !== undefined) {
                        var nextSectionTimestamp = nextSection === null || nextSection === void 0 ? void 0 : nextSection[1];
                        var nextConverted = convertTimeStringToMilliseconds(nextSectionTimestamp);
                        var sectionDiff = Math.abs(nextConverted - amountBefore);
                        amountBefore += sectionDiff;
                    }
                }
                var start = indexToUse === 0 ? 0 : ((_c = sectionToValueMappingRef.current[indexToUse - 1]) === null || _c === void 0 ? void 0 : _c.end) + NEXT_SECTION_OFFSET;
                var end = indexToUse === sections.length - 1 ? 1 : amountBefore / videoDuration;
                if (end > 1)
                    alert("Section ".concat(index + 1, " ends after the video's end.  Please check the sections object for this video."));
                sectionToValueMappingRef.current[indexToUse] = {
                    start: start,
                    end: end
                };
            }
        }
        catch (error) {
            alert("Developer Warning: There is an issue with this item's sections.  ".concat(EXAMPLE_SENTENCE));
        }
        // console.log({sectionToValueMappingRef});
    }, [sections, videoRef]);
    var validateSections = useCallback(function () {
        var _a, _b, _c;
        if (sections && (sections === null || sections === void 0 ? void 0 : sections.length) <= 0)
            return;
        var isString = typeof ((_a = sections === null || sections === void 0 ? void 0 : sections[0]) === null || _a === void 0 ? void 0 : _a[1]) === 'string' || typeof ((_b = sections === null || sections === void 0 ? void 0 : sections[0]) === null || _b === void 0 ? void 0 : _b[1]) === 'undefined';
        var videoDuration = ((_c = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _c === void 0 ? void 0 : _c.duration) || 0;
        var sum = 0;
        if (isString && sections) {
            for (var index = 0; index < sections.length; index++) {
                var currentSection = sections[index];
                var nextSection = sections[index + 1];
                if (index > 0 && typeof (currentSection === null || currentSection === void 0 ? void 0 : currentSection[1]) !== 'string') {
                    alert("Developer Warning: Expecting a start time for each section.  Either different types of values are being used or an expected start value was omitted for a section.  ".concat(EXAMPLE_SENTENCE));
                    throw new Error();
                }
                if (nextSection !== undefined) {
                    var currentSectionStart = convertTimeStringToMilliseconds(currentSection[1]);
                    var nextSectionStart = convertTimeStringToMilliseconds(nextSection[1]);
                    if (!currentSectionStart || !nextSectionStart)
                        continue;
                    if (currentSectionStart >= nextSectionStart) {
                        alert("Developer Warning: Check your section values for this video.  One section starts before the next one ends.  ".concat(EXAMPLE_SENTENCE));
                        throw new Error();
                    }
                    else if (Math.abs(currentSectionStart - nextSectionStart) < CAROUSEL_VIDEO_SECTION_MIN_LENGTH) {
                        alert("Developer Warning: The length of the section titled '".concat(currentSection === null || currentSection === void 0 ? void 0 : currentSection[0], "' does not exceed the minimum length of ").concat(CAROUSEL_VIDEO_SECTION_MIN_LENGTH, " milliseconds.  ").concat(EXAMPLE_SENTENCE));
                        throw new Error();
                    }
                }
            }
        }
        if (!isString && sections) {
            sum = (sections === null || sections === void 0 ? void 0 : sections.map(function (section) { return section[1]; }).reduce(function (a, b) {
                if (b === undefined)
                    return a;
                return (a + b);
            }, 0)) / NUMBER_OF_MS_IN_A_SECOND;
            if (sections.some(function (section) { return typeof (section === null || section === void 0 ? void 0 : section[1]) !== 'number' && typeof (section === null || section === void 0 ? void 0 : section[1]) !== 'undefined'; })) {
                alert("Developer Warning: Expecting a duration for sections.  Either different types of values are being used or an expected duration value was omitted from a section.  ".concat(EXAMPLE_SENTENCE));
                throw new Error();
            }
        }
        if (sum > videoDuration)
            alert("The sum of the sections is greater than the video duration");
    }, [sections, videoRef]);
    useEffect(function () {
        function checkIfVideoLoaded() {
            var _a;
            clearTimeout(checkIsVideoLoadedTimoutRef.current);
            var videoDuration = (((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.duration) || 0) * NUMBER_OF_MS_IN_A_SECOND;
            if (!videoDuration || isNaN(videoDuration)) {
                checkIsVideoLoadedTimoutRef.current = setTimeout(function () {
                    checkIfVideoLoaded();
                }, MAP_SECTION_INTERVAL);
                return;
            }
            else {
                mapSectionRanges();
                validateSections();
            }
        }
        checkIfVideoLoaded();
        return function () {
            sectionToValueMappingRef.current = {};
        };
    }, [mapSectionRanges, sections, validateSections, videoRef]);
    return sectionToValueMappingRef;
};

var CarouselItemViewerProgressBar = function (props) {
    //#region Init
    var currentVideoSection = props.currentVideoSection, isMouseDownRef = props.isMouseDownRef, isProgressBarBeingHoveredRef = props.isProgressBarBeingHoveredRef, percent = props.percent, seekPercent = props.seekPercent, setCurrentVideoSection = props.setCurrentVideoSection, toggleIsVideoPlaying = props.toggleIsVideoPlaying, setPercent = props.setPercent, setSeekPercent = props.setSeekPercent, setTimeStrings = props.setTimeStrings, videoRef = props.videoRef;
    var currentItem = useCarouselContext().currentItem;
    var sections = ((currentItem === null || currentItem === void 0 ? void 0 : currentItem.video) || {}).sections;
    var areSectionsGiven = useMemo(function () { return sections && sections.length > 0; }, [sections]);
    var progressBarRef = useRef();
    //this is used to prevent the the seekPercent from being reset then immediately set to a value when moving the triggering onMouseMove
    var wasMouseUpJustTriggeredRef = useRef(false);
    var _a = useState(false), showDot = _a[0], setShowDot = _a[1];
    var _b = useBusinessLogic(), stylingLogic = _b.stylingLogic, optionsLogic = _b.optionsLogic;
    var sectionToValueMappingRef = useSectionToValueMapping({
        videoRef: videoRef,
    });
    //this appears to be dead code
    // const toolbarWidth = useSetToolbarWidth({progressBarRef});
    //#endregion
    //#region Functions/Handlers
    var getCurrentSection = useCallback(function (percent) {
        if (percent === undefined || percent === null)
            return CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL;
        for (var _i = 0, _a = Object.entries(sectionToValueMappingRef.current); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b[0], sectionRange = _b[1];
            var indexAsNumber = Number(index);
            var isFirstIndex = indexAsNumber === 0;
            var isLastIndex = indexAsNumber === Object.keys(sectionToValueMappingRef || {}).length + 1;
            if (isLastIndex && percent > 1)
                return indexAsNumber;
            if (isFirstIndex && percent < 0)
                return 0;
            if (percent >= sectionRange.start && percent <= sectionRange.end)
                return indexAsNumber;
        }
        return CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL;
    }, [sectionToValueMappingRef]);
    var getIsInCurrentSection = useCallback(function (percent) {
        return getCurrentSection(percent) === currentVideoSection;
    }, [currentVideoSection, getCurrentSection]);
    var setCurrentSectionFromPercent = useCallback(function (percent) {
        if (percent < 0 || percent > 1)
            return;
        setCurrentVideoSection && setCurrentVideoSection(getCurrentSection(percent));
    }, [getCurrentSection, setCurrentVideoSection]);
    var updateTimeStrings = useCallback(function (video) {
        if (!video)
            return;
        setTimeStrings({
            currentTimeStr: getFormattedTimeString((isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) ? percent * video.duration : video.currentTime || -1),
            durationStr: getFormattedTimeString(video.duration || -1),
        });
    }, [isMouseDownRef, percent, setTimeStrings]);
    var getPercent = useCallback(function (e) {
        var _a, _b;
        var progressbarRect = (_a = progressBarRef === null || progressBarRef === void 0 ? void 0 : progressBarRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!e || !progressbarRect)
            return 0;
        var touchClientX = (_b = e === null || e === void 0 ? void 0 : e.changedTouches) === null || _b === void 0 ? void 0 : _b[0].clientX;
        var clientX = touchClientX || (e === null || e === void 0 ? void 0 : e.clientX);
        var progressBarLeftX = progressbarRect.left;
        var progressBarRightX = progressbarRect.right;
        var amountPastLeft = (clientX - progressBarLeftX);
        return amountPastLeft / (progressBarRightX - progressBarLeftX);
    }, []);
    var onMouseUp = useCallback(function (e) {
        var _a;
        document.body.classList.remove(CLASSNAME__GRABBING);
        wasMouseUpJustTriggeredRef.current = true;
        if (isMouseDownRef) {
            isMouseDownRef.current = false;
        }
        var point = getPoint(e);
        var isInsideProgressBar = getIsPointInsideElement(point, progressBarRef.current);
        if (!isInsideProgressBar) {
            setCurrentVideoSection && setCurrentVideoSection(CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL);
        }
        setSeekPercent(PROGRESS_BAR_PERCENT_INITIAL_VALUE);
        toggleIsVideoPlaying && toggleIsVideoPlaying(true);
        if ((videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) && isFinite(videoRef.current.duration)) {
            videoRef.current.currentTime = percent * videoRef.current.duration;
            (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.play();
        }
    }, [isMouseDownRef, percent, setCurrentVideoSection, toggleIsVideoPlaying, setSeekPercent, videoRef]);
    var onMouseDown = useCallback(function (e) {
        var _a;
        e.stopPropagation();
        document.body.classList.remove(CLASSNAME__GRABBING);
        wasMouseUpJustTriggeredRef.current = false;
        if (isMouseDownRef) {
            isMouseDownRef.current = true;
        }
        toggleIsVideoPlaying && toggleIsVideoPlaying(false);
        (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.pause();
        var progressBar = e.currentTarget;
        if (!progressBar)
            return;
        var percent = getPercent(e);
        setPercent(percent);
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            var video = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
            setSeekPercent(video.currentTime / video.duration);
            video.currentTime = percent * video.duration;
        }
    }, [getPercent, isMouseDownRef, toggleIsVideoPlaying, setPercent, setSeekPercent, videoRef]);
    var onMouseLeave = useCallback(function (e) {
        if (isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) {
            return;
        }
        if ((isProgressBarBeingHoveredRef === null || isProgressBarBeingHoveredRef === void 0 ? void 0 : isProgressBarBeingHoveredRef.current) !== undefined) {
            isProgressBarBeingHoveredRef.current = false;
        }
        setShowDot(false);
        setSeekPercent(PROGRESS_BAR_PERCENT_INITIAL_VALUE);
    }, [isMouseDownRef, isProgressBarBeingHoveredRef, setSeekPercent]);
    var onMouseMove = useCallback(function (e) {
        if ((isProgressBarBeingHoveredRef === null || isProgressBarBeingHoveredRef === void 0 ? void 0 : isProgressBarBeingHoveredRef.current) !== undefined) {
            isProgressBarBeingHoveredRef.current = true;
        }
        setShowDot(true);
        var percent = getPercent(e);
        setCurrentVideoSection && setCurrentVideoSection(areSectionsGiven ? getCurrentSection(percent) : 0);
        if ((isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) || optionsLogic.isMobile) {
            // console.log({percent});
            setPercent(percent);
        }
        else {
            if (wasMouseUpJustTriggeredRef.current) {
                wasMouseUpJustTriggeredRef.current = false;
            }
            else {
                setSeekPercent(percent);
            }
        }
    }, [
        areSectionsGiven,
        getCurrentSection,
        getPercent,
        isMouseDownRef,
        isProgressBarBeingHoveredRef,
        optionsLogic,
        setCurrentVideoSection,
        setPercent,
        setSeekPercent
    ]);
    var onMouseMoveGlobal = useCallback(function (e) {
        var _a;
        if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current))
            return;
        var xMovementMouse = e === null || e === void 0 ? void 0 : e.movementX;
        var movementAmount = 0;
        if (xMovementMouse !== undefined) {
            var toolbarRect = (_a = progressBarRef === null || progressBarRef === void 0 ? void 0 : progressBarRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (!toolbarRect)
                return;
            movementAmount = xMovementMouse / (toolbarRect.right - toolbarRect.left);
        }
        updateTimeStrings(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
        setPercent(function (current) {
            var newValue = current + movementAmount;
            // console.log({newValue});
            if (newValue >= 1)
                return 1;
            else if (newValue <= 0)
                return 0;
            return newValue;
        });
    }, [isMouseDownRef, setPercent, updateTimeStrings, videoRef]);
    var onMouseUpGlobal = useCallback(function (e) {
        if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current))
            return;
        onMouseUp(e);
    }, [isMouseDownRef, onMouseUp]);
    var onTouchStart = useCallback(function (e) {
        // console.log({start: e});
        e.stopPropagation();
        if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current)) {
            onMouseDown(e);
        }
    }, [isMouseDownRef, onMouseDown]);
    var onTouchEnd = useCallback(function (e) {
        // console.log({end: e});
        e.stopPropagation();
        if (isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) {
            isMouseDownRef.current = false;
        }
        onMouseUp(e);
        setCurrentVideoSection(CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL);
    }, [isMouseDownRef, onMouseUp, setCurrentVideoSection]);
    var onTouchMove = useCallback(function (e) {
        // console.log({move: e});
        e.stopPropagation();
        onMouseMove(e);
    }, [onMouseMove]);
    // const onTouchMoveGlobal = useCallback((e: TouchEvent) => {
    //     console.log({move: e});
    //     if (!isMouseDownRef?.current) return;
    //     onMouseMove(e);
    // }, [isMouseDownRef, onMouseMove])
    //#endregion
    //#region Side FX
    useEffect(function () {
        var videoRefCopy = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
        function onVideoTimeUpdate(e) {
            var videoElement = e.currentTarget || e.target;
            if (!videoElement)
                return;
            var percent = videoElement.currentTime / videoElement.duration;
            if (percent >= 0 && percent <= 1) {
                if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current)) {
                    // console.log({percent});
                    setPercent(percent);
                }
                updateTimeStrings(videoElement);
            }
        }
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef.current.addEventListener('timeupdate', onVideoTimeUpdate);
        }
        return function () {
            if (videoRefCopy) {
                videoRefCopy.removeEventListener('timeupdate', onVideoTimeUpdate);
            }
        };
    }, [isMouseDownRef, setPercent, setTimeStrings, updateTimeStrings, videoRef]);
    useEffect(function () {
        setPercent(PROGRESS_BAR_PERCENT_INITIAL_VALUE);
    }, [currentItem, setPercent]);
    //use sectionToProgressBarValueMapping to set currentVideoSection on progressBarValue change
    useEffect(function () {
        if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) ||
            Object.keys(sectionToValueMappingRef.current || {}).length <= 0)
            return;
        setCurrentSectionFromPercent(percent);
    }, [isMouseDownRef, percent, sectionToValueMappingRef, setCurrentSectionFromPercent]);
    //setup global listeners
    useEffect(function () {
        document.addEventListener('mousemove', onMouseMoveGlobal);
        document.addEventListener('mouseup', onMouseUpGlobal);
        // document.addEventListener('touchmove', onTouchMoveGlobal);
        return function () {
            document.removeEventListener('mousemove', onMouseMoveGlobal);
            document.removeEventListener('mouseup', onMouseUpGlobal);
            // document.removeEventListener('touchmove', onTouchMoveGlobal);
        };
    }, [onMouseMoveGlobal, onMouseUpGlobal]);
    //#endregion
    //#region JSX
    var getBackgroundDiv = useCallback(function (_a) {
        var _b = _a.percent, percent = _b === void 0 ? 1 : _b, _c = _a.left, left = _c === void 0 ? 0 : _c, _d = _a.index, index = _d === void 0 ? 0 : _d, _e = _a.isLast, isLast = _e === void 0 ? false : _e;
        if (isNaN(percent))
            return null;
        return (React$1.createElement("div", { key: "backDiv-".concat(index), style: stylingLogic.getCarouselVideoProgressBackgroundSectionContainerStyle(percent, left, index, (sections === null || sections === void 0 ? void 0 : sections.length) || 1, currentVideoSection) },
            React$1.createElement("div", { style: stylingLogic.getCarouselVideoProgressBackgroundSectionStyle(isLast) })));
    }, [currentVideoSection, sections === null || sections === void 0 ? void 0 : sections.length, stylingLogic]);
    var getForegroundDiv = useCallback(function (percent, left, index) {
        if (left === void 0) { left = 0; }
        if (index === void 0) { index = 0; }
        if (isNaN(percent))
            return null;
        return React$1.createElement("div", { key: "foreDiv-".concat(index), style: stylingLogic.getCarouselVideoProgressForegroundStyle(percent, left, index, (sections === null || sections === void 0 ? void 0 : sections.length) || 1, currentVideoSection) });
    }, [currentVideoSection, sections === null || sections === void 0 ? void 0 : sections.length, stylingLogic]);
    var getSeekDiv = useCallback(function (percent, left, index) {
        if (left === void 0) { left = 0; }
        if (index === void 0) { index = 0; }
        if (isNaN(percent) || percent <= 0)
            return null;
        return React$1.createElement("div", { key: "seekDiv-".concat(index), style: stylingLogic.getCarouselVideoProgressSeekStyle(percent, left, index, (sections === null || sections === void 0 ? void 0 : sections.length) || 1, currentVideoSection) });
    }, [currentVideoSection, sections === null || sections === void 0 ? void 0 : sections.length, stylingLogic]);
    function renderSections() {
        var _a, _b, _c;
        if (!sections || sections.length <= 1 || !(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
            return (React$1.createElement(React$1.Fragment, null,
                getBackgroundDiv({ isLast: true }),
                optionsLogic.videoProgressBarShowCurrentPosition || !(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) ? getSeekDiv(seekPercent) : null,
                getForegroundDiv(percent)));
        }
        var backgroundDivs = [];
        var foregroundDivs = [];
        var seekDivs = [];
        var amountBeforeCurrent = 0;
        for (var index = 0; index < sections.length; index++) {
            var section = sections[index];
            var duration = section[1];
            var isLastSection = index === sections.length - 1;
            var backgroundLeft = 0, percentAcross = 0;
            //calculating backgroundLeft and percentAcross for both input cases
            if (typeof duration === "string" || (duration === undefined && index === 0)) {
                var nextSection = sections[index + 1];
                var sectionDiff = 0;
                //all sections but the last one
                if (nextSection !== undefined) {
                    var nextSectionTimestamp = nextSection === null || nextSection === void 0 ? void 0 : nextSection[1];
                    if (typeof nextSectionTimestamp !== 'string')
                        continue;
                    var nextConverted = convertTimeStringToMilliseconds(nextSectionTimestamp);
                    sectionDiff = Math.abs(nextConverted - amountBeforeCurrent);
                }
                percentAcross = sectionDiff / NUMBER_OF_MS_IN_A_SECOND / (((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.duration) || 1);
                backgroundLeft = index === 0 ? 0 : amountBeforeCurrent / NUMBER_OF_MS_IN_A_SECOND / videoRef.current.duration;
                amountBeforeCurrent += sectionDiff;
            }
            else {
                var durationToUse = duration || Math.abs(amountBeforeCurrent - ((_b = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _b === void 0 ? void 0 : _b.duration));
                percentAcross = durationToUse / NUMBER_OF_MS_IN_A_SECOND / (((_c = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _c === void 0 ? void 0 : _c.duration) || 1);
                backgroundLeft = amountBeforeCurrent / NUMBER_OF_MS_IN_A_SECOND / videoRef.current.duration;
                amountBeforeCurrent += duration;
            }
            //rendering the divs
            var percentPlayedAlready = videoRef.current.currentTime / videoRef.current.duration;
            var percentToUse = isLastSection ? 1 - backgroundLeft : percentAcross;
            var currentSectionTime = sectionToValueMappingRef.current[index];
            var itemToTrack = (isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) || optionsLogic.isMobile ? percent : percentPlayedAlready;
            //background stuff
            backgroundDivs.push(getBackgroundDiv({ percent: percentToUse, left: backgroundLeft, index: index }));
            //seek stuff
            if (!(isMouseDownRef === null || isMouseDownRef === void 0 ? void 0 : isMouseDownRef.current) || optionsLogic.videoProgressBarShowCurrentPosition) {
                if (seekPercent !== PROGRESS_BAR_PERCENT_INITIAL_VALUE && index < currentVideoSection) {
                    seekDivs.push(getSeekDiv(percentToUse, backgroundLeft, index));
                }
                else if (seekPercent !== PROGRESS_BAR_PERCENT_INITIAL_VALUE && index === currentVideoSection) {
                    var percentAcrossCurrentSectionFactor = (seekPercent - (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.start)) / ((currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.end) - (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.start));
                    foregroundDivs.push(getSeekDiv(percentToUse * percentAcrossCurrentSectionFactor, backgroundLeft, index));
                }
            }
            //foreground stuff
            if (itemToTrack >= (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.end)) {
                foregroundDivs.push(getForegroundDiv(percentToUse, backgroundLeft, index));
            }
            else if (itemToTrack >= (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.start) && itemToTrack <= (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.end)) {
                var percentAcrossCurrentSectionFactor = (itemToTrack - (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.start)) / ((currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.end) - (currentSectionTime === null || currentSectionTime === void 0 ? void 0 : currentSectionTime.start));
                foregroundDivs.push(getForegroundDiv(percentToUse * percentAcrossCurrentSectionFactor, backgroundLeft, index));
            }
            // console.log({progressBarValue, itemToTrack ,currentSectionTime, index, durationToUse, duration, videoDuration: videoRef.current.duration, percentAcross, isLastSection });
        }
        return (React$1.createElement(React$1.Fragment, null,
            backgroundDivs,
            foregroundDivs,
            seekDivs));
    }
    //#endregion
    return (React$1.createElement("div", { ref: progressBarRef, style: stylingLogic.carouselVideoProgressContainerStyle, className: CLASSNAME__TOOLBAR_PROGRESS, onMouseDownCapture: onMouseDown, onMouseUp: onMouseUp, onMouseMoveCapture: onMouseMove, onMouseLeave: onMouseLeave, onTouchStartCapture: onTouchStart, onTouchMove: onTouchMove, onTouchEndCapture: onTouchEnd },
        optionsLogic.isToolbarInVideo ?
            React$1.createElement("div", { style: stylingLogic.getCarouselVideoProgressSeekDotStyle(percent, showDot, getIsInCurrentSection(percent)) }) :
            null,
        renderSections()));
};

var NextButton = forwardRef(function (props, ref) {
    var _a = props.childStyle, childStyle = _a === void 0 ? {} : _a, _b = props.className, className = _b === void 0 ? CLASSNAME__BUTTON : _b, fillColor = props.fillColor, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.showButton, showButton = _d === void 0 ? true : _d, _e = props.style, style = _e === void 0 ? {} : _e;
    var _f = useBusinessLogic(), stylingLogic = _f.stylingLogic, optionsLogic = _f.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var firstStyle = StylingLogic.getColorStyle(fillColorToUse, 'borderLeftColor', childStyle);
    var secondStyle = StylingLogic.getColorStyle(fillColorToUse, 'background', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.nextButton;
    return (React.createElement("button", { style: stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth), ref: ref, onClick: onClick, className: "".concat(className, " ").concat(showButton ? '' : CLASSNAME__HIDDEN) },
        React.createElement("div", { style: __assign(__assign({}, firstStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), firstStyle) })), className: "".concat(className, "--next-left") }),
        React.createElement("div", { style: __assign(__assign({}, secondStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'bar', style: __assign(__assign({}, style), secondStyle) })), className: "".concat(className, "--next-right") })));
});

var CarouselItemViewerNextButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, isShortcutVisible = props.isShortcutVisible, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.position, position = _c === void 0 ? 'center' : _c;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var elementStylings = useCarouselContext().elementStylings;
    var _d = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.nextButton) || {}, svgHref = _d.svgHref, style = _d.style;
    var _e = useBusinessLogic(), optionsLogic = _e.optionsLogic, toolbarActionsLogic = _e.toolbarActionsLogic, toolbarLogic = _e.toolbarLogic;
    var nextItemAction = toolbarActionsLogic.getNextItem();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.nextButton);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, shortcuts: nextItemAction.keys, position: position, isShortcutVisible: isShortcutVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, xlinkHref: svgHref, showButton: toolbarLogic.getShouldDisplayNextAndBackButton(), style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.nextButton, subElementName: null }), useElementStyle: style, fillColor: fillColor }) :
        React.createElement(NextButton, { ref: ref, onClick: onClick, showButton: toolbarLogic.getShouldDisplayNextAndBackButton(), childStyle: style, fillColor: fillColor })));
});

var PauseButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, fillColor = props.fillColor, _c = props.childStyle, childStyle = _c === void 0 ? {} : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'backgroundColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.pauseButton;
    return (React.createElement("button", { style: __assign(__assign({}, style), stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth)), ref: ref, onClick: onClick, className: className },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'left', style: style })), className: "".concat(className, "--pause-left") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'right', style: style })), className: "".concat(className, "--pause-right") })));
});

var CarouselItemViewerPauseButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.isVisible, isVisible = _c === void 0 ? true : _c, _d = props.onClick, onClick = _d === void 0 ? function () { return null; } : _d, _e = props.position, position = _e === void 0 ? 'center' : _e;
    var elementStylings = useCarouselContext().elementStylings;
    var _f = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.pauseButton) || {}, svgHref = _f.svgHref, style = _f.style;
    var _g = useBusinessLogic(), optionsLogic = _g.optionsLogic, stylingLogic = _g.stylingLogic, toolbarActionsLogic = _g.toolbarActionsLogic;
    var pauseAction = toolbarActionsLogic.getPause();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.pauseButton);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, shortcuts: pauseAction.keys, position: position, isShortcutVisible: isShortcutVisible, isVisible: isVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, xlinkHref: svgHref, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.pauseButton, subElementName: null }), useElementStyle: style, fillColor: fillColor }) :
        React.createElement(PauseButton, { ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor })));
});

var PlayButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, fillColor = props.fillColor, _c = props.childStyle, childStyle = _c === void 0 ? {} : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'borderLeftColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.playButton;
    return (React.createElement("button", { style: __assign(__assign({}, style), stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth)), ref: ref, onClick: onClick, className: "".concat(className) },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), colorStyle) })), className: "".concat(className, "--play-triangle") })));
});

var CarouselItemViewerPlayButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.isVisible, isVisible = _c === void 0 ? true : _c, _d = props.onClick, onClick = _d === void 0 ? function () { return null; } : _d, _e = props.position, position = _e === void 0 ? 'center' : _e;
    var elementStylings = useCarouselContext().elementStylings;
    var _f = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.playButton) || {}, svgHref = _f.svgHref, style = _f.style;
    var _g = useBusinessLogic(), optionsLogic = _g.optionsLogic, stylingLogic = _g.stylingLogic, toolbarActionsLogic = _g.toolbarActionsLogic;
    var playAction = toolbarActionsLogic.getPlay();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.playButton);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, shortcuts: playAction.keys, position: position, isShortcutVisible: isShortcutVisible, isVisible: isVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.playButton, subElementName: null }), xlinkHref: svgHref, useElementStyle: style, fillColor: fillColor }) :
        React.createElement(PlayButton, { ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor })));
});

var PreviousButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, fillColor = props.fillColor, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.showButton, showButton = _c === void 0 ? true : _c, _d = props.childStyle, childStyle = _d === void 0 ? {} : _d, _e = props.style, style = _e === void 0 ? {} : _e;
    var _f = useBusinessLogic(), stylingLogic = _f.stylingLogic, optionsLogic = _f.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var firstStyle = StylingLogic.getColorStyle(fillColorToUse, 'background', childStyle);
    var secondStyle = StylingLogic.getColorStyle(fillColorToUse, 'borderRightColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.previousButton;
    return (React.createElement("button", { style: stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth), ref: ref, onClick: onClick, className: "".concat(className, "  ").concat(showButton ? '' : CLASSNAME__HIDDEN) },
        React.createElement("div", { style: __assign(__assign({}, firstStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'bar', style: __assign(__assign({}, style), firstStyle) })), className: "".concat(className, "--previous-left") }),
        React.createElement("div", { style: __assign(__assign({}, secondStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), secondStyle) })), className: "".concat(className, "--previous-right") })));
});

var CarouselItemViewerPreviousButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, isShortcutVisible = props.isShortcutVisible, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.position, position = _c === void 0 ? 'center' : _c;
    var elementStylings = useCarouselContext().elementStylings;
    var _d = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.previousButton) || {}, svgHref = _d.svgHref, style = _d.style;
    var _e = useBusinessLogic(), optionsLogic = _e.optionsLogic, stylingLogic = _e.stylingLogic, toolbarActionsLogic = _e.toolbarActionsLogic, toolbarLogic = _e.toolbarLogic;
    var previousItemAction = toolbarActionsLogic.getPreviousItem();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.previousButton);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, shortcuts: previousItemAction.keys, position: position, isShortcutVisible: isShortcutVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, xlinkHref: svgHref, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.previousButton, subElementName: null }), showButton: toolbarLogic.getShouldDisplayNextAndBackButton(), useElementStyle: style, fillColor: fillColor }) :
        React.createElement(PreviousButton, { ref: ref, onClick: onClick, showButton: toolbarLogic.getShouldDisplayNextAndBackButton(), childStyle: style, fillColor: fillColor })));
});

var SeekBackButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, fillColor = props.fillColor, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.childStyle, childStyle = _c === void 0 ? {} : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'borderLeftColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.seekBackButton;
    return (React.createElement("button", { style: stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth), ref: ref, onClick: onClick, className: className },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), colorStyle) })), className: "".concat(className, "--seek-back-left") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), colorStyle) })), className: "".concat(className, "--seek-back-right") })));
});

var CarouselItemViewerSeekBackButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.position, position = _d === void 0 ? 'center' : _d;
    var elementStylings = useCarouselContext().elementStylings;
    var _e = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.seekBackButton) || {}, svgHref = _e.svgHref, style = _e.style;
    var _f = useBusinessLogic(), optionsLogic = _f.optionsLogic, stylingLogic = _f.stylingLogic, toolbarActionsLogic = _f.toolbarActionsLogic;
    var seekBackwardsAction = toolbarActionsLogic.getSeekBackwards();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.seekBackButton);
    var actionNameToUse = useMemo(function () { return "".concat(actionName, " ").concat(optionsLogic.videoSeekAmount, " seconds"); }, [actionName, optionsLogic.videoSeekAmount]);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionNameToUse, shortcuts: seekBackwardsAction.keys, position: position, isShortcutVisible: isShortcutVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.seekBackButton, subElementName: null }), xlinkHref: svgHref, useElementStyle: style, fillColor: fillColor }) :
        React.createElement(SeekBackButton, { ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor })));
});

var SeekForwardButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, fillColor = props.fillColor, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.childStyle, childStyle = _c === void 0 ? {} : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'borderLeftColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.seekForwardButton;
    return (React.createElement("button", { style: stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth), ref: ref, onClick: onClick, className: className },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), colorStyle) })), className: "".concat(className, "--seek-forward-left") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, subElementName: 'triangle', style: __assign(__assign({}, style), colorStyle) })), className: "".concat(className, "--seek-forward-right") })));
});

var CarouselItemViewerSeekForwardButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.position, position = _d === void 0 ? 'center' : _d;
    var elementStylings = useCarouselContext().elementStylings;
    var _e = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.seekForwardButton) || {}, svgHref = _e.svgHref, style = _e.style;
    var _f = useBusinessLogic(), optionsLogic = _f.optionsLogic, stylingLogic = _f.stylingLogic, toolbarActionsLogic = _f.toolbarActionsLogic;
    var seekForwardAction = toolbarActionsLogic.getSeekForwards();
    var fillColor = optionsLogic.getButtonColor(CarouselElement.seekForwardButton);
    var actionNameToUse = useMemo(function () { return "".concat(actionName, " ").concat(optionsLogic.videoSeekAmount, " seconds"); }, [actionName, optionsLogic.videoSeekAmount]);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionNameToUse, shortcuts: seekForwardAction.keys, position: position, isShortcutVisible: isShortcutVisible }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClick, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.seekForwardButton, subElementName: null }), xlinkHref: svgHref, useElementStyle: style, fillColor: fillColor }) :
        React.createElement(SeekForwardButton, { ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor })));
});

var LoadingSpinner = function (props) {
    var _a = props.description, description = _a === void 0 ? '' : _a, _b = props.options, options = _b === void 0 ? {} : _b, _c = props.show, show = _c === void 0 ? false : _c, _d = props.type, type = _d === void 0 ? 'ring' : _d;
    //note: using useBusinessLogic here causes infinite re-render loop with videos
    var carouselOptions = useCarouselContext().options;
    var stylingLogic = new StylingLogic({ options: carouselOptions, loadingSpinnerOptions: options });
    var renderContent = useCallback(function (content) {
        if (!show)
            return null;
        switch (type) {
            case "roller":
                return (React.createElement(React.Fragment, null,
                    content,
                    React.createElement("div", { className: "".concat(CLASSNAME__LOADING_SPINNER, "-roller") },
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null))));
            case "ring":
                return (React.createElement(React.Fragment, null,
                    content,
                    React.createElement("div", { className: "".concat(CLASSNAME__LOADING_SPINNER, "-ring"), style: stylingLogic.carouselLoadingSpinnerRingContainerStyle },
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerRingItemStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerRingItemStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerRingItemStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerRingItemStyle }))));
            case 'circle':
                return (React.createElement(React.Fragment, null,
                    content,
                    React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerRingContainerStyle, className: "".concat(CLASSNAME__LOADING_SPINNER, "-circle") },
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }))));
            case 'grid':
                return (React.createElement(React.Fragment, null,
                    content,
                    React.createElement("div", { className: "".concat(CLASSNAME__LOADING_SPINNER, "-grid") },
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }),
                        React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerBackgroundColorStyle }))));
        }
    }, [
        show,
        stylingLogic.carouselLoadingSpinnerBackgroundColorStyle,
        stylingLogic.carouselLoadingSpinnerRingContainerStyle,
        stylingLogic.carouselLoadingSpinnerRingItemStyle,
        type
    ]);
    return (React.createElement("div", { className: "".concat(CLASSNAME__LOADING_SPINNER, "-container") }, renderContent((React.createElement("div", { style: stylingLogic.carouselLoadingSpinnerTextStyle, className: "".concat(CLASSNAME__LOADING_SPINNER, "-text") }, description ? React.createElement("h2", null,
        "Loading '",
        description,
        "'") : null)))));
};

var ToolbarPreviewDirection;
(function (ToolbarPreviewDirection) {
    ToolbarPreviewDirection[ToolbarPreviewDirection["none"] = 0] = "none";
    ToolbarPreviewDirection[ToolbarPreviewDirection["previous"] = 1] = "previous";
    ToolbarPreviewDirection[ToolbarPreviewDirection["next"] = 2] = "next";
})(ToolbarPreviewDirection || (ToolbarPreviewDirection = {}));
var CarouselItemViewerToolbarPreview = function (props) {
    //#region Init
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a; props.isLoaded; var itemToShow = props.itemToShow, setIsLoaded = props.setIsLoaded, _b = props.shortcuts, shortcuts = _b === void 0 ? [] : _b, show = props.show;
    var _c = useBusinessLogic(), optionsLogic = _c.optionsLogic, stylingLogic = _c.stylingLogic;
    var _d = itemToShow || {}, description = _d.description, srcMain = _d.srcMain, srcThumbnail = _d.srcThumbnail;
    var shouldShowImageJSX = useMemo(function () { return !!(!getIsVideo(itemToShow) || srcThumbnail); }, [itemToShow, srcThumbnail]);
    //#endregion
    //#region JSX
    var className = useMemo(function () { return getClassname({ elementName: 'item-viewer-toolbar-preview' }); }, []);
    var isVisible = useMemo(function () { return optionsLogic.itemViewerPreviewIsVisible; }, [optionsLogic.itemViewerPreviewIsVisible]);
    var shortcutString = useMemo(function () { return getShortcutsString(shortcuts); }, [shortcuts]);
    var imageJSX = useMemo(function () { return (React.createElement("div", { style: stylingLogic.carouselItemViewerPreviewImageContainerStyle, className: "".concat(className, "-image-container") },
        React.createElement(LoadingSpinner, { type: 'ring', options: {
                containerLength: 100,
                radius: 32,
                width: 4,
                containerMargin: '0px',
            }, description: '', show: true }),
        React.createElement("img", { style: stylingLogic.carouselItemViewerPreviewImageStyle, className: show ? '' : CLASSNAME__HIDDEN, src: srcThumbnail || srcMain, alt: description, onLoad: function () { return setIsLoaded(true); }, onAbort: function () { return setIsLoaded(false); }, onSuspend: function () { return setIsLoaded(false); }, onBlur: (function () { return setIsLoaded(false); }) }))); }, [
        className,
        description,
        setIsLoaded,
        show,
        srcMain,
        srcThumbnail,
        stylingLogic.carouselItemViewerPreviewImageContainerStyle,
        stylingLogic.carouselItemViewerPreviewImageStyle
    ]);
    var textJSX = useMemo(function () { return (React.createElement("div", { style: stylingLogic.carouselItemViewerPreviewImageDescriptionContainerStyle, className: "".concat(className, "-image-description") },
        React.createElement("div", { style: stylingLogic.carouselItemViewerPreviewImageDescriptionHeaderStyle },
            React.createElement("div", null, actionName.toUpperCase()),
            shortcutString ? (React.createElement("div", null,
                "(",
                shortcutString,
                ")")) : null),
        React.createElement("p", { style: stylingLogic.carouselItemViewerPreviewImageDescriptionBodyStyle }, description || 'No description'))); }, [
        actionName,
        className,
        description,
        shortcutString,
        stylingLogic.carouselItemViewerPreviewImageDescriptionBodyStyle,
        stylingLogic.carouselItemViewerPreviewImageDescriptionContainerStyle,
        stylingLogic.carouselItemViewerPreviewImageDescriptionHeaderStyle,
    ]);
    return (React.createElement("div", { style: stylingLogic.getCarouselItemViewerPreviewStyle(shouldShowImageJSX), className: "".concat(className, " ").concat(show && isVisible ? '' : CLASSNAME__HIDDEN) }, optionsLogic.itemViewerPreviewSwapImageAndText ? (React.createElement(React.Fragment, null,
        textJSX,
        shouldShowImageJSX ? imageJSX : null)) : (React.createElement(React.Fragment, null,
        shouldShowImageJSX ? imageJSX : null,
        textJSX))));
    //#endregion
};

var TIME_STRING_UPDATE_INTERVAL_DURATION = 100;
var NUMBER_TIME_STRING_UPDATE_CHECKS = 200;
/**
*updating time string on item change when {@link CarouselVideoOptions.autoPlay autoPlay} is `false`.
**/
var useUpdateTimeString = function (input) {
    var currentItemInInstance = input.currentItemInInstance, setTimeStrings = input.setTimeStrings, videoRef = input.videoRef;
    var checkVideoTimeStringIntervalRef = useRef();
    var checkVideoTimeStringCountRef = useRef(0);
    useEffect(function () {
        var _a;
        clearInterval(checkVideoTimeStringIntervalRef.current);
        if (!getIsVideo(currentItemInInstance))
            return;
        var isAutoPlay = (_a = currentItemInInstance === null || currentItemInInstance === void 0 ? void 0 : currentItemInInstance.video) === null || _a === void 0 ? void 0 : _a.autoPlay;
        if (isAutoPlay)
            return;
        checkVideoTimeStringIntervalRef.current = setInterval(function () {
            var _a, _b, _c;
            checkVideoTimeStringCountRef.current++;
            if ((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.duration) {
                clearInterval(checkVideoTimeStringIntervalRef.current);
                checkVideoTimeStringCountRef.current = 0;
                setTimeStrings({
                    durationStr: getFormattedTimeString(((_b = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _b === void 0 ? void 0 : _b.duration) || 0),
                    currentTimeStr: getFormattedTimeString(((_c = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _c === void 0 ? void 0 : _c.currentTime) || 0),
                });
            }
            if (checkVideoTimeStringCountRef.current >= NUMBER_TIME_STRING_UPDATE_CHECKS) {
                clearInterval(checkVideoTimeStringIntervalRef.current);
                checkVideoTimeStringCountRef.current = 0;
            }
        }, TIME_STRING_UPDATE_INTERVAL_DURATION);
    }, [currentItemInInstance, setTimeStrings, videoRef]);
};

var FullscreenButton = forwardRef(function (props, ref) {
    var _a = props.childStyle, childStyle = _a === void 0 ? {} : _a, _b = props.className, className = _b === void 0 ? CLASSNAME__BUTTON : _b, fillColor = props.fillColor, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var fillColorToUse = fillColor || optionsLogic.theme.colorFive;
    var fullScreenClassname = "".concat(className, "--fullscreen");
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'backgroundColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = CarouselElement.fullscreenButton;
    return (React.createElement("button", { style: stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth), ref: ref, onClick: onClick, className: "".concat(className, " ").concat(fullScreenClassname) },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-top ").concat(fullScreenClassname, "-top-left-horizontal") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-top ").concat(fullScreenClassname, "-top-right-horizontal") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-bottom ").concat(fullScreenClassname, "-bottom-left-horizontal") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-bottom ").concat(fullScreenClassname, "-bottom-right-horizontal") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-top ").concat(fullScreenClassname, "-top-left-vertical") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-top ").concat(fullScreenClassname, "-top-right-vertical") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-bottom ").concat(fullScreenClassname, "-bottom-left-vertical") }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style })), className: "".concat(fullScreenClassname, "-bottom ").concat(fullScreenClassname, "-bottom-right-vertical") })));
});

var CarouselItemViewerFullscreenButton = forwardRef(function (props, ref) {
    var _a = props.actionName, actionName = _a === void 0 ? '' : _a, _b = props.isShortcutVisible, isShortcutVisible = _b === void 0 ? false : _b, _c = props.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = props.position, position = _d === void 0 ? 'right' : _d, _e = props.style, style = _e === void 0 ? {} : _e, videoRef = props.videoRef;
    var _f = useCarouselContext(), elementStylings = _f.elementStylings, setIsFullscreenMode = _f.setIsFullscreenMode, isFullscreenMode = _f.isFullscreenMode, setCurrentVideoCurrentTime = _f.setCurrentVideoCurrentTime;
    var _g = useBusinessLogic(), optionsLogic = _g.optionsLogic, stylingLogic = _g.stylingLogic;
    var _h = (elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.fullscreenButton) || {}, svgHref = _h.svgHref, buttonStyle = _h.style;
    var fillColor = optionsLogic.getButtonColor(CarouselElement.fullscreenButton);
    var onClickLocal = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            onClick && onClick();
            setIsFullscreenMode(true);
            setCurrentVideoCurrentTime(((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.currentTime) || CURRENT_VIDEO_CURRENT_TIME_DEFAULT);
            return [2 /*return*/];
        });
    }); }, [onClick, setIsFullscreenMode, setCurrentVideoCurrentTime, videoRef]);
    return (React.createElement(CarouselItemViewerShortcutIndicator, { actionName: actionName, isShortcutVisible: isShortcutVisible, position: position, showButton: !isFullscreenMode, style: style }, !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { ref: ref, onClick: onClickLocal, xlinkHref: svgHref, style: stylingLogic.getCarouselElementChildSizeStlye({ buttonName: CarouselElement.fullscreenButton, subElementName: null }), useElementStyle: buttonStyle, fillColor: fillColor, classNamesToInclude: [CLASSNAME__BUTTON_SCALE_ON_HOVER] }) :
        React.createElement(FullscreenButton, { ref: ref, onClick: onClickLocal, fillColor: fillColor, childStyle: buttonStyle })));
});

var PROPERTY_TUPLE_EXPECTED_MIN_LENGTH = 2;
var PROPERTY_TUPLE_EXPECTED_MAX_LENGTH = 3;
var useSetCustomCssProperties = function (input) {
    var element = input.element, properties = input.properties;
    useEffect(function () {
        var _a;
        if (element && (properties === null || properties === void 0 ? void 0 : properties.length) > 0) {
            for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
                var property = properties_1[_i];
                if (!property ||
                    (property === null || property === void 0 ? void 0 : property.length) < PROPERTY_TUPLE_EXPECTED_MIN_LENGTH ||
                    (property === null || property === void 0 ? void 0 : property.length) > PROPERTY_TUPLE_EXPECTED_MAX_LENGTH)
                    continue;
                (_a = element.style) === null || _a === void 0 ? void 0 : _a.setProperty("--".concat(property[0]), property[1], property === null || property === void 0 ? void 0 : property[2]);
            }
        }
    }, [element, properties]);
};

var CarouselModalSection = function (props) {
    var button = props.button, codeSection = props.codeSection, title = props.title, index = props.index, _a = props.titleElementType, TitleTag = _a === void 0 ? MODAL_TITLE_TAG_DEFAULT : _a, text = props.text, _b = props.textElementType, Tag = _b === void 0 ? MODAL_TEXT_TAG_DEFAULT : _b, textStyles = props.textStyles, textContainerStyles = props.textContainerStyles;
    var isCodeSection = (codeSection === null || codeSection === void 0 ? void 0 : codeSection.lines) && codeSection.lines.length > 0;
    if (isCodeSection) {
        var codeSections = getCodeSections(codeSection);
        //using recursion to render each code section
        return codeSections === null || codeSections === void 0 ? void 0 : codeSections.map(function (codeSectionObj, index2) {
            var _a;
            //need to only apply the marginTop value to the first item in the section
            var currentPadding = (_a = codeSectionObj === null || codeSectionObj === void 0 ? void 0 : codeSectionObj.textContainerStyles) === null || _a === void 0 ? void 0 : _a.padding;
            var splitPadding = currentPadding === null || currentPadding === void 0 ? void 0 : currentPadding.toString().split(' ');
            var paddingTop = splitPadding === null || splitPadding === void 0 ? void 0 : splitPadding.shift();
            var newPadding = "".concat(index2 === 0 ? paddingTop : 0, " ").concat(splitPadding === null || splitPadding === void 0 ? void 0 : splitPadding.join(' '));
            var codeSectionObjToUse = __assign(__assign({}, codeSectionObj), { textContainerStyles: {
                    padding: newPadding,
                } });
            //@ts-ignore
            return React$1.createElement(CarouselModalSection, __assign({ key: "".concat(index, "-").concat(index2), button: button, index: index2 }, codeSectionObjToUse));
        });
    }
    return (React$1.createElement("div", { style: __assign(__assign({}, StylingLogic.getCarouselModalChildStyle(index)), textContainerStyles) },
        title ? (React$1.createElement("div", { className: CLASSNAME__MODAL_HEADER },
            React$1.createElement(TitleTag, { dangerouslySetInnerHTML: { __html: title || '' } }),
            index === 0 ? button : null)) : null,
        text ? (React$1.createElement(Tag, { style: textStyles, dangerouslySetInnerHTML: { __html: text || '' } })) : null));
};

var IS_VISIBLE_INITIAL = true;
var MODAL_HEIGHT_INITIAL = 0;
var CarouselModal = function (props) {
    //#region Init
    var _a = useCarouselContext(), elementStylings = _a.elementStylings, currentItemIndex = _a.currentItemIndex, currentItem = _a.currentItem, isModalMinimized = _a.isModalMinimized, setIsModalMinimized = _a.setIsModalMinimized;
    var children = props.children, isVideoPlaying = props.isVideoPlaying, sections = props.sections, isProgressBarMouseDownRef = props.isProgressBarMouseDownRef, isProgressBarBeingHoveredRef = props.isProgressBarBeingHoveredRef, itemViewerToolbarRef = props.itemViewerToolbarRef, itemRef = props.itemRef, _b = props.shouldHideWhenMinimized, shouldHideWhenMinimized = _b === void 0 ? false : _b;
    var modal = currentItem.modal;
    var closeButtonTop = (modal || {}).closeButtonTop;
    var _c = useState(IS_VISIBLE_INITIAL), isVisible = _c[0], setIsVisible = _c[1];
    var modalRef = useRef();
    var modalHeightRef = useRef(MODAL_HEIGHT_INITIAL);
    var svgHref = ((elementStylings === null || elementStylings === void 0 ? void 0 : elementStylings.closeButton) || {}).svgHref;
    var isCustom = useMemo(function () { return !!children; }, [children]);
    var _d = useBusinessLogic({ itemRef: itemRef, modalRef: modalRef, itemViewerToolbarRef: itemViewerToolbarRef }), optionsLogic = _d.optionsLogic, stylingLogic = _d.stylingLogic;
    var closeButtonColor = useMemo(function () { return optionsLogic.modalCloseButtonColor; }, [optionsLogic.modalCloseButtonColor]);
    var _e = useState(false), setShouldRerender = _e[1];
    useSetCustomCssProperties({
        element: modalRef === null || modalRef === void 0 ? void 0 : modalRef.current,
        properties: [
            [CSS_CUSTOM_PROPERTY_MODAL_SCROLLBAR_BACKGROUND_COLOR, optionsLogic === null || optionsLogic === void 0 ? void 0 : optionsLogic.modalBackgroundColor],
            [CSS_CUSTOM_PROPERTY_MODAL_SCROLLBAR_FOREGROUND_COLOR, optionsLogic === null || optionsLogic === void 0 ? void 0 : optionsLogic.modalTextColor],
            [CSS_CUSTOM_PROPERTY_MODAL_OPACITY_MINIMIZED, optionsLogic === null || optionsLogic === void 0 ? void 0 : optionsLogic.modalOpacityWhenMinimized]
        ]
    });
    //#endregion
    //#region Handlers/Functions
    var onClick = useCallback(function (e) {
        e.stopPropagation();
        if (optionsLogic.modalMinimizeOnClick) {
            setIsModalMinimized(function (current) { return !current; });
            return;
        }
        setIsModalMinimized(false);
    }, [optionsLogic.modalMinimizeOnClick, setIsModalMinimized]);
    var onCloseClick = useCallback(function (e) {
        onClick(e);
        setIsModalMinimized(true);
    }, [onClick, setIsModalMinimized]);
    //#endregion
    //#region Side Fx
    useEffect(function () {
        setIsVisible(IS_VISIBLE_INITIAL);
        if (!optionsLogic.modalMaintainMinimizedStateAcrossItems) {
            setIsModalMinimized(false);
        }
    }, [currentItem, currentItemIndex, optionsLogic.modalMaintainMinimizedStateAcrossItems, setIsModalMinimized]);
    useEffect(function () {
        var _a;
        var height = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
        if (height !== undefined && height > MODAL_HEIGHT_INITIAL) {
            modalHeightRef.current = Math.max(height, modalHeightRef.current);
        }
    });
    useEffect(function () {
        modalHeightRef.current = MODAL_HEIGHT_INITIAL;
        setShouldRerender(function (current) { return !current; });
    }, [currentItem]);
    //#endregion
    //#region JSX
    var classNameToUse = useMemo(function () { return "".concat(CLASSNAME__MODAL, " ").concat(isCustom ? CLASSNAME__MODAL_CUSTOM : '', " ").concat(isModalMinimized ? CLASSNAME__MODAL_MINIMIZED : ''); }, [isCustom, isModalMinimized]);
    var buttonJSX = useMemo(function () { return !!svgHref ? (React.createElement(CarouselItemViewerCustomButton, { onClick: onCloseClick, xlinkHref: svgHref, classNamesToInclude: ["".concat(CLASSNAME__ITEM_VIEWER_BUTTON, "-inverse")], fillColor: closeButtonColor, style: __assign(__assign({}, stylingLogic.carouselModalCloseButtonStyle), (closeButtonTop ? { top: closeButtonTop } : {})) })) : (React.createElement(CloseButton, { onClick: onCloseClick, className: isCustom ? CLASSNAME__ITEM_VIEWER_BUTTON : undefined, classNameModifier: 'inverse', fillColor: closeButtonColor, style: __assign(__assign({}, stylingLogic.carouselModalCloseButtonStyle), (closeButtonTop ? { top: closeButtonTop } : {})) })); }, [
        closeButtonColor,
        closeButtonTop,
        isCustom,
        onCloseClick,
        stylingLogic.carouselModalCloseButtonStyle,
        svgHref,
    ]);
    var renderChildren = useCallback(function () {
        if (isModalMinimized) {
            return (React.createElement("span", null, "Description"));
        }
        if (isCustom) {
            return (React.createElement("div", null,
                children,
                buttonJSX));
        }
        if (!sections || sections.length === 0 || isVideoPlaying)
            return null;
        return sections.map(function (section, index) {
            //@ts-ignore
            return React.createElement(CarouselModalSection, __assign({ key: index, index: index, button: buttonJSX }, section));
        });
    }, [buttonJSX, children, isCustom, isModalMinimized, isVideoPlaying, sections]);
    return (React.createElement("div", { ref: modalRef, className: classNameToUse, onClick: onClick, style: stylingLogic.getCarouselModalStyle((shouldHideWhenMinimized && isModalMinimized) || isVideoPlaying || !isVisible || !!(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current) || !!(isProgressBarBeingHoveredRef === null || isProgressBarBeingHoveredRef === void 0 ? void 0 : isProgressBarBeingHoveredRef.current), modalHeightRef.current, isModalMinimized) }, renderChildren()));
    //#endregion
};

var CarouselItemViewerToolbar = forwardRef(function (props, ref) {
    var _a, _b;
    //#region Init
    var currentVideoSection = props.currentVideoSection, description = props.description, imageRef = props.imageRef, isProgressBarMouseDownRef = props.isProgressBarMouseDownRef, isVideo = props.isVideo, itemContainerRef = props.itemContainerRef, _c = props.onClose, onClose = _c === void 0 ? function () { return null; } : _c, _d = props.onNextItemClick, onNextItemClick = _d === void 0 ? function () { return null; } : _d, _e = props.onPreviousItemClick, onPreviousItemClick = _e === void 0 ? function () { return null; } : _e, _f = props.percent, percent = _f === void 0 ? 0 : _f, _g = props.seekPercent, seekPercent = _g === void 0 ? 0 : _g, setCurrentVideoSection = props.setCurrentVideoSection, _h = props.toggleIsVideoPlaying, toggleIsVideoPlaying = _h === void 0 ? function () { return null; } : _h, _j = props.setPercent, setPercent = _j === void 0 ? function () { return null; } : _j, _k = props.setSeekPercent, setSeekPercent = _k === void 0 ? function () { return null; } : _k, videoRef = props.videoRef;
    var _l = useCarouselContext(), items = _l.items, currentItemIndex = _l.currentItemIndex, setCurrentItemIndex = _l.setCurrentItemIndex, currentItem = _l.currentItem, isFullscreenMode = _l.isFullscreenMode, hiddenInputRef = _l.hiddenInputRef;
    var isProgressBarBeingHoveredRef = useRef(false);
    var shouldHideTimoutRef = useRef(-1);
    var previousButtonRef = useRef(null);
    var nextButtonRef = useRef(null);
    var closeButtonRef = useRef(null);
    var fullscreenButtonRef = useRef(null);
    var pauseButtonRef = useRef(null);
    var playButtonRef = useRef(null);
    var seekForwardButtonRef = useRef(null);
    var seekBackwardButtonRef = useRef(null);
    var showToolbarOnItemChangeTimeoutRef = useRef();
    var innerRef = useRef(null);
    useImperativeHandle(ref, function () { return innerRef.current; });
    var doNothing = function () { return null; };
    var _m = useState({
        durationStr: getFormattedTimeString(((_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.duration) || -1),
        currentTimeStr: getFormattedTimeString(((_b = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _b === void 0 ? void 0 : _b.currentTime) || -1),
    }), timeStrings = _m[0], setTimeStrings = _m[1];
    var _o = useState(ToolbarPreviewDirection.none), previewDirection = _o[0], setPreviewDirection = _o[1];
    var _p = useState(false), isPreviousItemPreviewLoaded = _p[0], setIsPreviousItemPreviewLoaded = _p[1];
    var _q = useState(false), isNextItemPreviewLoaded = _q[0], setIsNextItemPreviewLoaded = _q[1];
    var _r = useState(false), showCloseButtonPopup = _r[0], setShowCloseButtonPopup = _r[1];
    var _s = useState(false), showFullscreenButtonPopup = _s[0], setShowFullscreenButtonPopup = _s[1];
    var _t = useState(false), showPauseButtonPopup = _t[0], setShowPauseButtonPopup = _t[1];
    var _u = useState(false), showPlayButtonPopup = _u[0], setShowPlayButtonPopup = _u[1];
    var _v = useState(false), showSeekForwardButtonPopup = _v[0], setShowSeekForwardButtonPopup = _v[1];
    var _w = useState(false), showSeekBackwardButtonPopup = _w[0], setShowSeekBackwardButtonPopup = _w[1];
    var _x = useState(false), showNextButtonPopup = _x[0], setShowNextButtonPopup = _x[1];
    var _y = useState(false), showPreviousButtonPopup = _y[0], setShowPreviousButtonPopup = _y[1];
    var _z = useBusinessLogic(), optionsLogic = _z.optionsLogic, stylingLogic = _z.stylingLogic, toolbarActionsLogic = _z.toolbarActionsLogic, toolbarLogic = _z.toolbarLogic;
    var isMobile = getIsMobile();
    useKeyboardShortcuts({
        keyboardShortcuts: [
            {
                keys: toolbarActionsLogic.getPlay().keys,
                action: toolbarActionsLogic.isPauseSeparate ? handleKeyboardPlay : handlePlayPauseUnited,
            },
            {
                keys: toolbarActionsLogic.getPause().keys,
                action: handleKeyboardPause,
            },
            {
                keys: toolbarActionsLogic.getSeekBackwards().keys,
                action: handleKeyboardSeekBackward,
            },
            {
                keys: toolbarActionsLogic.getSeekForwards().keys,
                action: handleKeyboardSeekForward,
            },
            {
                keys: toolbarActionsLogic.getNextItem().keys,
                action: function () { return onNextItemClickLocal(); },
            },
            {
                keys: toolbarActionsLogic.getPreviousItem().keys,
                action: function () { return onPreviousItemClickLocal(); },
            },
        ],
        skipCondition: function () { return toolbarLogic.getShouldSkipKeyboardShortcuts(); }
    });
    useOnSwipe({
        element: itemContainerRef === null || itemContainerRef === void 0 ? void 0 : itemContainerRef.current,
        maxClickThreshold: optionsLogic.itemViewerMaxClickThreshold,
        isDisabled: optionsLogic.isItemViewerSwipingDisabled,
        swipeHandlers: {
            left: {
                callback: function (e) {
                    onPreviousItemClickLocal();
                },
                skipCallbackParentClassnames: [CLASSNAME__ITEM_VIEWER_TOOLBAR],
            },
            right: {
                callback: function (e) {
                    onNextItemClickLocal();
                },
                skipCallbackParentClassnames: [CLASSNAME__ITEM_VIEWER_TOOLBAR],
            },
        },
        handleStyleChanges: function (styleCase, element) {
            if (!element)
                return;
            if (styleCase === 'start') {
                document.body.classList.add(CLASSNAME__GRABBING);
                element.classList.add(CLASSNAME__GRABBING);
            }
            else {
                document.body.classList.remove(CLASSNAME__GRABBING);
                element.classList.remove(CLASSNAME__GRABBING);
            }
        }
    });
    useUpdateTimeString({ currentItemInInstance: currentItem, setTimeStrings: setTimeStrings, videoRef: videoRef });
    var isVideoPlaying = getIsVideoPlaying(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
    //#endregion
    //#region Functions/handlers
    var resetPreviewItems = useCallback(function () {
        setIsNextItemPreviewLoaded(false);
        setIsPreviousItemPreviewLoaded(false);
    }, []);
    function getPreviewItemIndex(direction) {
        if (direction === ToolbarPreviewDirection.next) {
            if (currentItemIndex >= (items.length - 1))
                return 0;
            return currentItemIndex + 1;
        }
        else {
            if (currentItemIndex <= 0)
                return items.length - 1;
            return currentItemIndex - 1;
        }
    }
    var hideToolbar = useCallback(function () {
        var _a;
        if ((itemContainerRef === null || itemContainerRef === void 0 ? void 0 : itemContainerRef.current) && !isMobile && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current)) {
            (_a = itemContainerRef.current.classList) === null || _a === void 0 ? void 0 : _a.add(CLASSNAME__ITEM_CONTAINER_NO_TOOLBAR);
        }
    }, [isMobile, isProgressBarMouseDownRef, itemContainerRef]);
    var showToolbar = useCallback(function () {
        var _a;
        if (itemContainerRef === null || itemContainerRef === void 0 ? void 0 : itemContainerRef.current) {
            (_a = itemContainerRef.current.classList) === null || _a === void 0 ? void 0 : _a.remove(CLASSNAME__ITEM_CONTAINER_NO_TOOLBAR);
        }
    }, [itemContainerRef]);
    var handleAutoHide = useCallback(function (e) {
        var _a, _b;
        clearTimeout(shouldHideTimoutRef.current);
        if (!optionsLogic.isToolbarInVideo) {
            showToolbar();
            return;
        }
        stopPropagation(e);
        (_b = (_a = document.body) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.removeProperty('cursor');
        if ((!isFullscreenMode && isVideo && !isVideoPlaying) || optionsLogic.autoHideToolbarDuration === AUTO_HIDE_DISABLED_VALUE)
            return;
        var point = getPoint(e);
        var isInsideVideo = getIsPointInsideElement(point, videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
        if (isInsideVideo) {
            showToolbar();
        }
        shouldHideTimoutRef.current = setTimeout(function () {
            var _a, _b;
            hideToolbar();
            (_a = document.body.style) === null || _a === void 0 ? void 0 : _a.setProperty('cursor', 'none', 'important');
            (_b = hiddenInputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }, optionsLogic.autoHideToolbarDuration);
    }, [
        hiddenInputRef,
        hideToolbar,
        isFullscreenMode,
        isVideo,
        isVideoPlaying,
        optionsLogic.autoHideToolbarDuration,
        optionsLogic.isToolbarInVideo,
        showToolbar,
        videoRef,
    ]);
    function handlePlayPauseUnited() {
        if (getIsVideoPlaying(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current)) {
            onPauseClick();
        }
        else {
            onPlayClick();
        }
    }
    function handleKeyboardPause() {
        onPauseClick();
    }
    function handleKeyboardPlay() {
        onPlayClick();
    }
    function handleKeyboardSeekBackward() {
        onSeekBackClick();
    }
    function handleKeyboardSeekForward() {
        onSeekForwardClick();
    }
    var onNextItemClickLocal = useCallback(function () {
        if (items.length <= 1)
            return;
        var newIndex = currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1;
        setCurrentItemIndex(newIndex);
        resetPreviewItems();
        onNextItemClick && onNextItemClick();
        handleAutoHide();
        toolbarActionsLogic.getNextItem().onActionCompleted();
    }, [currentItemIndex, items, setCurrentItemIndex, resetPreviewItems, handleAutoHide, onNextItemClick, toolbarActionsLogic]);
    var onPreviousItemClickLocal = useCallback(function () {
        if (items.length <= 1)
            return;
        var newIndex = currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1;
        setCurrentItemIndex(newIndex);
        resetPreviewItems();
        onPreviousItemClick && onPreviousItemClick();
        handleAutoHide();
        toolbarActionsLogic.getPreviousItem().onActionCompleted();
    }, [currentItemIndex, items, setCurrentItemIndex, resetPreviewItems, handleAutoHide, onPreviousItemClick, toolbarActionsLogic]);
    var onPauseClick = useCallback(function () {
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef === null || videoRef === void 0 ? void 0 : videoRef.current.pause();
            toggleIsVideoPlaying(false);
        }
        handleAutoHide();
        toolbarActionsLogic.getPause().onActionCompleted();
    }, [videoRef, toggleIsVideoPlaying, handleAutoHide, toolbarActionsLogic]);
    var onPlayClick = useCallback(function () {
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef === null || videoRef === void 0 ? void 0 : videoRef.current.play();
            toggleIsVideoPlaying(true);
        }
        handleAutoHide();
        toolbarActionsLogic.getPlay().onActionCompleted();
    }, [videoRef, handleAutoHide, toolbarActionsLogic, toggleIsVideoPlaying]);
    var onSeekBackClick = useCallback(function () {
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef.current.currentTime -= optionsLogic.videoSeekAmount;
        }
        handleAutoHide();
        toolbarActionsLogic.getSeekBackwards().onActionCompleted();
    }, [videoRef, handleAutoHide, toolbarActionsLogic, optionsLogic.videoSeekAmount]);
    var onSeekForwardClick = useCallback(function () {
        if (videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) {
            videoRef.current.currentTime += optionsLogic.videoSeekAmount;
            if (videoRef.current.currentTime >= videoRef.current.duration) {
                toggleIsVideoPlaying(false);
            }
        }
        handleAutoHide();
        toolbarActionsLogic.getSeekForwards().onActionCompleted();
    }, [videoRef, handleAutoHide, toolbarActionsLogic, optionsLogic.videoSeekAmount, toggleIsVideoPlaying]);
    function onToolbarClick(e) {
        e.stopPropagation();
    }
    var handleMouseLeave = useCallback(function (e) {
        clearTimeout(showToolbarOnItemChangeTimeoutRef.current);
        if (isFullscreenMode)
            return;
        var point = getPoint(e);
        var isInVideoBox = getIsPointInsideElement(point, ((videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) || (imageRef === null || imageRef === void 0 ? void 0 : imageRef.current)));
        var isVideoPlaying = !!(imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) ? true : getIsVideoPlaying(videoRef === null || videoRef === void 0 ? void 0 : videoRef.current);
        if (isInVideoBox || !isVideoPlaying)
            return;
        hideToolbar();
    }, [hideToolbar, isFullscreenMode, videoRef, imageRef]);
    var handleMouseMove = useCallback(function (e) {
        clearTimeout(showToolbarOnItemChangeTimeoutRef.current);
        showToolbar();
    }, [showToolbar]);
    //#endregion
    //#region Side Fx
    useEffect(function () {
        handleAutoHide();
        window.addEventListener('mousemove', handleAutoHide);
        window.addEventListener('click', handleAutoHide);
        return function () {
            window.removeEventListener('mousemove', handleAutoHide);
            window.removeEventListener('click', handleAutoHide);
            clearTimeout(shouldHideTimoutRef.current);
        };
    }, [handleAutoHide]);
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f;
        var videoRefCopy = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
        var imageRefCopy = imageRef === null || imageRef === void 0 ? void 0 : imageRef.current;
        var innerRefCopy = innerRef === null || innerRef === void 0 ? void 0 : innerRef.current;
        if (optionsLogic.isToolbarInVideo) {
            (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('mousemove', handleMouseMove);
            (_b = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseleave', handleMouseLeave);
            (_c = imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) === null || _c === void 0 ? void 0 : _c.addEventListener('mousemove', handleMouseMove);
            (_d = imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) === null || _d === void 0 ? void 0 : _d.addEventListener('mouseleave', handleMouseLeave);
            (_e = innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) === null || _e === void 0 ? void 0 : _e.addEventListener('mousemove', handleMouseMove);
            (_f = innerRef === null || innerRef === void 0 ? void 0 : innerRef.current) === null || _f === void 0 ? void 0 : _f.addEventListener('mouseleave', handleMouseLeave);
        }
        return function () {
            videoRefCopy === null || videoRefCopy === void 0 ? void 0 : videoRefCopy.removeEventListener('mousemove', handleMouseMove);
            videoRefCopy === null || videoRefCopy === void 0 ? void 0 : videoRefCopy.removeEventListener('mouseleave', handleMouseLeave);
            imageRefCopy === null || imageRefCopy === void 0 ? void 0 : imageRefCopy.removeEventListener('mousemove', handleMouseMove);
            imageRefCopy === null || imageRefCopy === void 0 ? void 0 : imageRefCopy.removeEventListener('mouseleave', handleMouseLeave);
            innerRefCopy === null || innerRefCopy === void 0 ? void 0 : innerRefCopy.removeEventListener('mousemove', handleMouseMove);
            innerRefCopy === null || innerRefCopy === void 0 ? void 0 : innerRefCopy.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [
        handleAutoHide,
        handleMouseLeave,
        handleMouseMove,
        hideToolbar,
        imageRef,
        isVideo,
        optionsLogic.isToolbarInVideo,
        showToolbar,
        videoRef
    ]);
    //handling events for buttons
    useEffect(function () {
        var closeButtonRefCopy = closeButtonRef.current;
        var fullScreenButtonRefCopy = fullscreenButtonRef.current;
        var nextButtonRefCopy = nextButtonRef.current;
        var pauseButtonRefCopy = pauseButtonRef.current;
        var playButtonRefCopy = playButtonRef.current;
        var previousButtonRefCopy = previousButtonRef.current;
        var seekBackwardButtonRefCopy = seekBackwardButtonRef.current;
        var seekForwardButtonRefCopy = seekForwardButtonRef.current;
        var boundDisplayCloseButton = handleDisplayPopup.bind(null, true, setShowCloseButtonPopup);
        var boundHideCloseButton = handleDisplayPopup.bind(null, false, setShowCloseButtonPopup);
        var boundDisplayFullscreenButton = handleDisplayPopup.bind(null, true, setShowFullscreenButtonPopup);
        var boundHideFullscreenButton = handleDisplayPopup.bind(null, false, setShowFullscreenButtonPopup);
        var boundDisplayPauseButton = handleDisplayPopup.bind(null, true, setShowPauseButtonPopup);
        var boundHidePauseButton = handleDisplayPopup.bind(null, false, setShowPauseButtonPopup);
        var boundDisplayPlayButton = handleDisplayPopup.bind(null, true, setShowPlayButtonPopup);
        var boundHidePlayButton = handleDisplayPopup.bind(null, false, setShowPlayButtonPopup);
        var boundDisplaySeekForwardButton = handleDisplayPopup.bind(null, true, setShowSeekForwardButtonPopup);
        var boundHideSeekForwardButton = handleDisplayPopup.bind(null, false, setShowSeekForwardButtonPopup);
        var boundDisplaySeekBackwardButton = handleDisplayPopup.bind(null, true, setShowSeekBackwardButtonPopup);
        var boundHideSeekBackwardButton = handleDisplayPopup.bind(null, false, setShowSeekBackwardButtonPopup);
        function handleDisplayPopup(shouldShowPopup, showPopupSetter, e) {
            stopPropagation(e);
            showPopupSetter(shouldShowPopup);
        }
        function handleMouseEnterNextButton(e) {
            setPreviewDirection(ToolbarPreviewDirection.next);
            handleDisplayPopup(true, setShowNextButtonPopup, e);
        }
        function handleMouseEnterPreviousButton(e) {
            setPreviewDirection(ToolbarPreviewDirection.previous);
            handleDisplayPopup(true, setShowPreviousButtonPopup, e);
        }
        function handleMouseLeaveButton(e) {
            setPreviewDirection(ToolbarPreviewDirection.none);
            handleDisplayPopup(false, setShowNextButtonPopup, e);
            handleDisplayPopup(false, setShowPreviousButtonPopup, e);
        }
        if (closeButtonRef === null || closeButtonRef === void 0 ? void 0 : closeButtonRef.current) {
            closeButtonRef.current.addEventListener('mouseenter', boundDisplayCloseButton);
            closeButtonRef.current.addEventListener('mouseleave', boundHideCloseButton);
        }
        if (fullscreenButtonRef === null || fullscreenButtonRef === void 0 ? void 0 : fullscreenButtonRef.current) {
            fullscreenButtonRef.current.addEventListener('mouseenter', boundDisplayFullscreenButton);
            fullscreenButtonRef.current.addEventListener('mouseleave', boundHideFullscreenButton);
        }
        if (nextButtonRef === null || nextButtonRef === void 0 ? void 0 : nextButtonRef.current) {
            nextButtonRef.current.addEventListener('mouseenter', handleMouseEnterNextButton);
            nextButtonRef.current.addEventListener('mouseleave', handleMouseLeaveButton);
        }
        if (pauseButtonRef === null || pauseButtonRef === void 0 ? void 0 : pauseButtonRef.current) {
            pauseButtonRef.current.addEventListener('mouseenter', boundDisplayPauseButton);
            pauseButtonRef.current.addEventListener('mouseleave', boundHidePauseButton);
        }
        if (playButtonRef === null || playButtonRef === void 0 ? void 0 : playButtonRef.current) {
            playButtonRef.current.addEventListener('mouseenter', boundDisplayPlayButton);
            playButtonRef.current.addEventListener('mouseleave', boundHidePlayButton);
        }
        if (previousButtonRef === null || previousButtonRef === void 0 ? void 0 : previousButtonRef.current) {
            previousButtonRef.current.addEventListener('mouseenter', handleMouseEnterPreviousButton);
            previousButtonRef.current.addEventListener('mouseleave', handleMouseLeaveButton);
        }
        if (seekBackwardButtonRef === null || seekBackwardButtonRef === void 0 ? void 0 : seekBackwardButtonRef.current) {
            seekBackwardButtonRef.current.addEventListener('mouseenter', boundDisplaySeekBackwardButton);
            seekBackwardButtonRef.current.addEventListener('mouseleave', boundHideSeekBackwardButton);
        }
        if (seekForwardButtonRef === null || seekForwardButtonRef === void 0 ? void 0 : seekForwardButtonRef.current) {
            seekForwardButtonRef.current.addEventListener('mouseenter', boundDisplaySeekForwardButton);
            seekForwardButtonRef.current.addEventListener('mouseleave', boundHideSeekForwardButton);
        }
        return function () {
            if (closeButtonRefCopy) {
                closeButtonRefCopy.removeEventListener('mouseenter', boundDisplayCloseButton);
                closeButtonRefCopy.removeEventListener('mouseleave', boundHideCloseButton);
            }
            if (fullScreenButtonRefCopy) {
                fullScreenButtonRefCopy.removeEventListener('mouseenter', boundDisplayFullscreenButton);
                fullScreenButtonRefCopy.removeEventListener('mouseleave', boundHideFullscreenButton);
            }
            if (nextButtonRefCopy) {
                nextButtonRefCopy.removeEventListener('mouseenter', handleMouseEnterNextButton);
                nextButtonRefCopy.removeEventListener('mouseleave', handleMouseLeaveButton);
            }
            if (pauseButtonRefCopy) {
                pauseButtonRefCopy.removeEventListener('mouseenter', boundDisplayPauseButton);
                pauseButtonRefCopy.removeEventListener('mouseleave', boundHidePauseButton);
            }
            if (playButtonRefCopy) {
                playButtonRefCopy.removeEventListener('mouseenter', boundDisplayPlayButton);
                playButtonRefCopy.removeEventListener('mouseleave', boundHidePlayButton);
            }
            if (previousButtonRefCopy) {
                previousButtonRefCopy.removeEventListener('mouseenter', handleMouseEnterPreviousButton);
                previousButtonRefCopy.removeEventListener('mouseleave', handleMouseLeaveButton);
            }
            if (seekBackwardButtonRefCopy) {
                seekBackwardButtonRefCopy.removeEventListener('mouseenter', boundDisplaySeekBackwardButton);
                seekBackwardButtonRefCopy.removeEventListener('mouseleave', boundHideSeekBackwardButton);
            }
            if (seekForwardButtonRefCopy) {
                seekForwardButtonRefCopy.removeEventListener('mouseenter', boundDisplaySeekForwardButton);
                seekForwardButtonRefCopy.removeEventListener('mouseleave', boundHideSeekForwardButton);
            }
        };
    }, [
        closeButtonRef,
        currentItemIndex,
        fullscreenButtonRef,
        nextButtonRef,
        pauseButtonRef,
        playButtonRef,
        previousButtonRef,
        seekBackwardButtonRef,
        seekForwardButtonRef,
    ]);
    //show the toolbar for SHOW_TOOLBAR_ON_ITEM_CHANGE_DURATION on item change then hide
    useEffect(function () {
        if (!optionsLogic.isToolbarInVideo)
            return;
        clearTimeout(showToolbarOnItemChangeTimeoutRef.current);
        showToolbar();
        if (isVideo && !isVideoPlaying)
            return;
        showToolbarOnItemChangeTimeoutRef.current = setTimeout(function () {
            hideToolbar();
        }, AUTO_HIDE_VIDEO_TOOLBAR_DURATION_DEFAULT);
        return function () {
            clearTimeout(showToolbarOnItemChangeTimeoutRef.current);
        };
    }, [currentItemIndex, hideToolbar, isVideo, isVideoPlaying, optionsLogic.isToolbarInVideo, showToolbar]);
    //#endregion
    //#region JSX
    return (React$1.createElement("div", { ref: innerRef, onClick: onToolbarClick, className: CLASSNAME__ITEM_VIEWER_TOOLBAR, style: stylingLogic.toolbarStyle }, isVideo && !isFullscreenMode && optionsLogic.useDefaultVideoControls ? null : (React$1.createElement("div", { style: stylingLogic.toolbarOuterContainerStyle },
        videoRef ?
            React$1.createElement(CarouselItemViewerProgressBar, { currentVideoSection: currentVideoSection === undefined ? CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL : currentVideoSection, isMouseDownRef: isProgressBarMouseDownRef, isProgressBarBeingHoveredRef: isProgressBarBeingHoveredRef, percent: percent, setCurrentVideoSection: setCurrentVideoSection || doNothing, setTimeStrings: setTimeStrings, setSeekPercent: setSeekPercent, seekPercent: seekPercent, setPercent: setPercent, toggleIsVideoPlaying: toggleIsVideoPlaying, videoRef: videoRef }) : null,
        React$1.createElement("div", { style: stylingLogic.toolbarInnerContainerStyle, className: CLASSNAME__TOOLBAR_CONTAINER },
            videoRef ? (React$1.createElement("div", { className: CLASSNAME__TOOLBAR_LEFT },
                React$1.createElement(CarouselItemViewerPlayButton, { actionName: 'Play', isShortcutVisible: showPlayButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), isVisible: !isVideoPlaying, onClick: onPlayClick, ref: playButtonRef, position: 'left' }),
                React$1.createElement(CarouselItemViewerPauseButton, { actionName: 'Pause', isShortcutVisible: showPauseButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), isVisible: isVideoPlaying, onClick: onPauseClick, ref: pauseButtonRef, position: 'left' }),
                React$1.createElement(CarouselItemViewerSeekBackButton, { actionName: 'Seek Back', isShortcutVisible: showSeekBackwardButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: onSeekBackClick, ref: seekBackwardButtonRef, position: 'left' }),
                React$1.createElement(CarouselItemViewerSeekForwardButton, { actionName: 'Seek Forward', isShortcutVisible: showSeekForwardButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: onSeekForwardClick, ref: seekForwardButtonRef, position: 'left' }))) : null,
            React$1.createElement(CarouselItemViewerToolbarText, { isVideo: isVideo, description: description || '', timeStrings: timeStrings }),
            React$1.createElement("div", { className: CLASSNAME__TOOLBAR_RIGHT },
                React$1.createElement(CarouselItemViewerPreviousButton, { actionName: 'Previous', isShortcutVisible: !optionsLogic.itemViewerPreviewIsVisible && showPreviousButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: onPreviousItemClickLocal, ref: previousButtonRef }),
                React$1.createElement(CarouselItemViewerNextButton, { actionName: 'Next', isShortcutVisible: !optionsLogic.itemViewerPreviewIsVisible && showNextButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: onNextItemClickLocal, ref: nextButtonRef }),
                React$1.createElement(CarouselItemViewerFullscreenButton, { actionName: 'Fullscreen', isShortcutVisible: !isFullscreenMode && showFullscreenButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: function () { return null; }, ref: fullscreenButtonRef, videoRef: videoRef, style: {
                        paddingRight: 2,
                    } }),
                React$1.createElement(CarouselItemViewerCloseButton, { actionName: 'Exit', isShortcutVisible: isFullscreenMode && showCloseButtonPopup && !(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), onClick: onClose, ref: closeButtonRef, position: 'right', videoRef: videoRef }))),
        React$1.createElement(CarouselItemViewerToolbarPreview, { itemToShow: items[getPreviewItemIndex(ToolbarPreviewDirection.previous)], show: previewDirection === ToolbarPreviewDirection.previous, isLoaded: isPreviousItemPreviewLoaded, setIsLoaded: setIsPreviousItemPreviewLoaded, shortcuts: toolbarActionsLogic.getPreviousItem().keys, actionName: "Previous" }),
        React$1.createElement(CarouselItemViewerToolbarPreview, { itemToShow: items[getPreviewItemIndex(ToolbarPreviewDirection.next)], show: previewDirection === ToolbarPreviewDirection.next, isLoaded: isNextItemPreviewLoaded, setIsLoaded: setIsNextItemPreviewLoaded, shortcuts: toolbarActionsLogic.getNextItem().keys, actionName: "Next" }),
        (currentItem === null || currentItem === void 0 ? void 0 : currentItem.modal) ? (React$1.createElement(CarouselModal, __assign({ itemViewerToolbarRef: innerRef, itemRef: isVideo ? videoRef : imageRef, isVideoPlaying: isVideoPlaying, isProgressBarMouseDownRef: isProgressBarMouseDownRef, isProgressBarBeingHoveredRef: isProgressBarBeingHoveredRef, shouldHideWhenMinimized: showPauseButtonPopup || showPlayButtonPopup || showSeekBackwardButtonPopup || showSeekForwardButtonPopup }, currentItem === null || currentItem === void 0 ? void 0 : currentItem.modal))) : null))));
    //#endregion
});

var CarouselVideoCurrentStateIndicatorPlayButton = forwardRef(function (props, ref) {
    var _a, _b;
    var options = useCarouselContext().options;
    var _c = ((_b = (_a = options.styling) === null || _a === void 0 ? void 0 : _a.videoCurrentStateIndicator) === null || _b === void 0 ? void 0 : _b.playIcon) || {}, svgHref = _c.svgHref, style = _c.style;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var fillColor = useMemo(function () { return stylingLogic.getVideoCurrentStateIndicatorForegroundColor(CarouselVideoCurrentStateIndicatorButtonName.playIcon); }, [stylingLogic]);
    var onClick = useCallback(function () { return null; }, []);
    return (!!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { style: stylingLogic.carouselVideoCurrentStateIndicatorButtonStyle, ref: ref, onClick: onClick, xlinkHref: svgHref, useElementStyle: style, fillColor: fillColor }) :
        React.createElement(PlayButton, { style: stylingLogic.carouselVideoCurrentStateIndicatorButtonStyle, ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor }));
});

var CarouselVideoCurrentStateIndicatorPauseButton = forwardRef(function (props, ref) {
    var _a, _b;
    var options = useCarouselContext().options;
    var _c = ((_b = (_a = options.styling) === null || _a === void 0 ? void 0 : _a.videoCurrentStateIndicator) === null || _b === void 0 ? void 0 : _b.pauseIcon) || {}, svgHref = _c.svgHref, style = _c.style;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var fillColor = useMemo(function () { return stylingLogic.getVideoCurrentStateIndicatorForegroundColor(CarouselVideoCurrentStateIndicatorButtonName.pauseIcon); }, [stylingLogic]);
    var onClick = useCallback(function () { return null; }, []);
    return (!!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { style: stylingLogic.carouselVideoCurrentStateIndicatorButtonStyle, ref: ref, onClick: onClick, xlinkHref: svgHref, useElementStyle: style, fillColor: fillColor }) :
        React.createElement(PauseButton, { style: stylingLogic.carouselVideoCurrentStateIndicatorButtonStyle, ref: ref, onClick: onClick, childStyle: style, fillColor: fillColor }));
});

var CarouselVideoCurrentStateIndicator = function (props) {
    var isVideoPlaying = props.isVideoPlaying;
    var _a = useBusinessLogic(), stylingLogic = _a.stylingLogic, optionsLogic = _a.optionsLogic;
    var _b = useState(!isVideoPlaying), isAnimating = _b[0], setIsAnimating = _b[1];
    var timeoutRef = useRef(-1);
    useEffect(function () {
        setIsAnimating(false);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(function () {
            setIsAnimating(true);
        }, 50);
    }, [isVideoPlaying, setIsAnimating]);
    //#region JSX
    var className = "".concat(CLASSNAME__BUTTON, "--video-state-indicator");
    var isAnimatingClassName = isAnimating && !optionsLogic.useDefaultVideoControls
        ? "".concat(CLASSNAME__BUTTON, "--video-state-indicator-is-animating")
        : '';
    var backgroundColorStyle = useMemo(function () { return StylingLogic.getColorStyle(optionsLogic.videoCurrentStateIndicatorBackgroundColor, 'backgroundColor'); }, [optionsLogic.videoCurrentStateIndicatorBackgroundColor]);
    return (React.createElement("div", { style: __assign(__assign({}, stylingLogic.carouselVideoCurrentStateIndicatorContainerStyle), backgroundColorStyle), onAnimationEnd: function () { return setIsAnimating(false); }, className: "".concat(className, " ").concat(isAnimatingClassName) }, !isVideoPlaying ?
        React.createElement(CarouselVideoCurrentStateIndicatorPauseButton, null) :
        React.createElement(CarouselVideoCurrentStateIndicatorPlayButton, null)));
    //#endregion
};

/**
*This is a hack to get the image/video to re-render after exiting full screen when {@link CarouselLayoutOptions.itemDisplayLocation itemDisplayLocation} is not {@link CarouselItemDisplayLocation none}}.
*the issue seems to stem from the fact that the height of the `itemViewer`
*depends on the `toolbarRef` but the toolbar is a child of
*{@link CarouselVideo}/{@link CarouselImage}, so the style is calculated before the child has finished rendering.
**/
var useRerenderOnExitFullscreenMode = function () {
    var isFullscreenMode = useCarouselContext().isFullscreenMode;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _a = useState(false); _a[0]; var setShouldRerender = _a[1];
    var countRef = useRenderCount();
    useLayoutEffect(function () {
        if (isFullscreenMode || countRef.current <= 0)
            return;
        setTimeout(function () {
            setShouldRerender(function (current) { return !current; });
        }, 1);
    }, [isFullscreenMode, countRef]);
};

var useResetCarouselVideoCurrentSection = function (input) {
    var element = input.element, progressBarElement = input.progressBarElement, currentSection = input.currentSection, setCurrentSection = input.setCurrentSection, isMouseDownRef = input.isMouseDownRef;
    var handleMove = useCallback(function (e) {
        if (currentSection === CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL || isMouseDownRef.current)
            return;
        var point = getPoint(e);
        var isInsideProgressBar = getIsPointInsideElement(point, progressBarElement);
        if (isInsideProgressBar)
            return;
        setCurrentSection(CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL);
    }, [currentSection, isMouseDownRef, progressBarElement, setCurrentSection]);
    useEffect(function () {
        if (!element || !progressBarElement)
            return;
        element.addEventListener('mousemove', handleMove);
        return function () {
            element.removeEventListener('mousemove', handleMove);
        };
    }, [element, handleMove, progressBarElement]);
};

var CarouselVideoCurrentTimeViewer = function (props) {
    var isProgressBarMouseDownRef = props.isProgressBarMouseDownRef; props.isVideoPlaying; var itemContainerHeight = props.itemContainerHeight, _a = props.percent, percent = _a === void 0 ? 0 : _a, srcMain = props.srcMain, type = props.type;
    var videoRef = useRef();
    var stylingLogic = useBusinessLogic().stylingLogic;
    useSetVideoCurrentTime({ percent: percent, video: videoRef === null || videoRef === void 0 ? void 0 : videoRef.current });
    return (React$1.createElement("video", { style: stylingLogic.getCarouselVideoCurrentTimeViewerStyle(!!(isProgressBarMouseDownRef === null || isProgressBarMouseDownRef === void 0 ? void 0 : isProgressBarMouseDownRef.current), itemContainerHeight), ref: videoRef, autoPlay: false, muted: true, loop: false },
        React$1.createElement("source", { src: resolveSrcMain(srcMain), type: "video/".concat(type) })));
};

var CarouselVideo = function (props) {
    var _a, _b, _c;
    //#region Init
    var description = props.description, isVideoPlaying = props.isVideoPlaying, isVideoStateChangeInitiatedInternallyRef = props.isVideoStateChangeInitiatedInternallyRef, itemContainerRef = props.itemContainerRef, setIsVideoPlaying = props.setIsVideoPlaying, srcMain = props.srcMain, videoProps = props.video;
    var _d = useCarouselContext(), options = _d.options, currentItemIndex = _d.currentItemIndex, currentVideoCurrentTime = _d.currentVideoCurrentTime, isFullscreenMode = _d.isFullscreenMode, setCurrentVideoCurrentTime = _d.setCurrentVideoCurrentTime, itemContainerHeight = _d.itemContainerHeight;
    var _e = videoProps || {}, _f = _e.autoPlay, autoPlay = _f === void 0 ? false : _f, _g = _e.loop, loop = _g === void 0 ? false : _g, _h = _e.muted, muted = _h === void 0 ? true : _h;
    var _j = useState(false), isLoaded = _j[0], setIsLoaded = _j[1];
    var _k = useState(PROGRESS_BAR_PERCENT_INITIAL_VALUE), percent = _k[0], setPercent = _k[1];
    var _l = useState(PROGRESS_BAR_PERCENT_INITIAL_VALUE), seekPercent = _l[0], setSeekPercent = _l[1];
    var _m = useState(CAROUSEL_VIDEO_CURRENT_SECTION_INITIAL), currentVideoSection = _m[0], setCurrentVideoSection = _m[1];
    var videoRef = useRef();
    var itemViewerToolbarRef = useRef();
    var isProgressBarMouseDownRef = useRef(false);
    var srcMainToUse = resolveSrcMain(srcMain, true);
    var type = useMemo(function () { return srcMainToUse === null || srcMainToUse === void 0 ? void 0 : srcMainToUse.slice((srcMainToUse === null || srcMainToUse === void 0 ? void 0 : srcMainToUse.lastIndexOf('.')) + 1); }, [srcMainToUse]);
    var _o = useBusinessLogic({ itemViewerToolbarRef: itemViewerToolbarRef }), stylingLogic = _o.stylingLogic, optionsLogic = _o.optionsLogic;
    useRerenderOnExitFullscreenMode();
    useResetCarouselVideoCurrentSection({
        element: itemContainerRef === null || itemContainerRef === void 0 ? void 0 : itemContainerRef.current,
        progressBarElement: (_a = itemContainerRef === null || itemContainerRef === void 0 ? void 0 : itemContainerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(CLASSNAME__TOOLBAR_PROGRESS)),
        currentSection: currentVideoSection,
        setCurrentSection: setCurrentVideoSection,
        isMouseDownRef: isProgressBarMouseDownRef,
    });
    //#endregion
    //#region Functions/Handlers
    var toggleIsVideoPlaying = useCallback(function (state) {
        isVideoStateChangeInitiatedInternallyRef.current = true;
        if (state) {
            setIsVideoPlaying(state);
        }
        else {
            setIsVideoPlaying(function (current) { return current; });
        }
    }, [isVideoStateChangeInitiatedInternallyRef, setIsVideoPlaying]);
    var playVideo = useCallback(function () {
        var _a, _b;
        if (videoRef.current) {
            if (getIsVideoPlaying(videoRef.current)) {
                (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.pause();
                toggleIsVideoPlaying(false);
            }
            else {
                (_b = videoRef.current) === null || _b === void 0 ? void 0 : _b.play();
                toggleIsVideoPlaying(true);
            }
        }
    }, [toggleIsVideoPlaying]);
    var handleItemNavigation = useCallback(function () {
        var _a;
        setIsLoaded(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        if ((_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.load) {
            videoRef.current.load();
        }
    }, [setIsLoaded, videoRef]);
    var handleOnLoadedData = useCallback(function () {
        setIsLoaded(true);
        toggleIsVideoPlaying(false);
    }, [toggleIsVideoPlaying]);
    //#endregion
    //#region Side Fx
    //Ensuring percent is valid value
    useLayoutEffect(function () {
        if (percent > 1) {
            setPercent(1);
        }
        else if (percent < 0) {
            setPercent(0);
        }
    }, [percent]);
    //triggering a load event (https://stackoverflow.com/questions/41303012/updating-source-url-on-html5-video-with-react)
    useEffect(function () {
        var _a;
        setIsLoaded(false);
        setCurrentVideoCurrentTime(CURRENT_VIDEO_CURRENT_TIME_DEFAULT);
        if ((_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.load) {
            videoRef.current.load();
        }
    }, [currentItemIndex, srcMain, videoRef, videoProps === null || videoProps === void 0 ? void 0 : videoProps.autoPlay, setCurrentVideoCurrentTime]);
    useEffect(function () {
        if (videoRef.current) {
            videoRef.current.currentTime = currentVideoCurrentTime;
        }
    }, [currentVideoCurrentTime]);
    useEffect(function () {
        function handleFullscreenChange(e) {
            var _a;
            setCurrentVideoCurrentTime(((_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.currentTime) || CURRENT_VIDEO_CURRENT_TIME_DEFAULT);
            if (!isFullscreenMode)
                return;
            playVideo();
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return function () {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, [isFullscreenMode, playVideo, setCurrentVideoCurrentTime, setIsVideoPlaying]);
    useEffect(function () {
        if (isVideoStateChangeInitiatedInternallyRef.current)
            return;
        playVideo();
    }, [isVideoPlaying, isVideoStateChangeInitiatedInternallyRef, playVideo]);
    //#endregion
    //#region JSX   
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: stylingLogic.carouselVideoContainerStyle },
            React.createElement(CarouselVideoCurrentStateIndicator, { isVideoPlaying: isVideoPlaying }),
            React.createElement(LoadingSpinner, __assign({ type: 'ring', show: !isLoaded, description: description }, (_c = (_b = options === null || options === void 0 ? void 0 : options.styling) === null || _b === void 0 ? void 0 : _b.itemViewer) === null || _c === void 0 ? void 0 : _c.loadingSpinner)),
            React.createElement(CarouselVideoCurrentTimeViewer, { isProgressBarMouseDownRef: isProgressBarMouseDownRef, isVideoPlaying: isVideoPlaying, itemContainerHeight: itemContainerHeight, percent: percent, srcMain: srcMain, type: type }),
            React.createElement("video", { controls: optionsLogic.useDefaultVideoControls, draggable: false, className: "".concat(getClassname({ elementName: 'video' }), " ").concat(isLoaded ? '' : CLASSNAME__HIDDEN), style: stylingLogic.getCarouselVideoStyle(!!isProgressBarMouseDownRef.current, itemContainerHeight), ref: videoRef, autoPlay: autoPlay, muted: muted, loop: loop, onLoadedData: handleOnLoadedData, onPlay: function () { return toggleIsVideoPlaying(true); }, onEnded: function () { return toggleIsVideoPlaying(false); } },
                React.createElement("source", { src: srcMainToUse, type: "video/".concat(type) }),
                "Your browser does not support the HTML5 video tag. Try using a different browser.")),
        React.createElement(CarouselItemViewerToolbar, { currentVideoSection: currentVideoSection, description: description || '', isProgressBarMouseDownRef: isProgressBarMouseDownRef, isVideo: true, itemContainerRef: itemContainerRef, onNextItemClick: handleItemNavigation, onPreviousItemClick: handleItemNavigation, ref: itemViewerToolbarRef, percent: percent, setPercent: setPercent, seekPercent: seekPercent, setCurrentVideoSection: setCurrentVideoSection, toggleIsVideoPlaying: toggleIsVideoPlaying, setSeekPercent: setSeekPercent, videoRef: videoRef }),
        React.createElement(CarouselVideoProgressBarScreenshotViewerMemoized, { currentVideoSection: currentVideoSection, percent: isProgressBarMouseDownRef.current ? percent : seekPercent, srcMain: srcMain, toolbarRef: itemViewerToolbarRef, type: type, videoRef: videoRef })));
    //#endregion
};

var RE_RENDER_DURATION = 1;
var CarouselImage = function (props) {
    var _a, _b;
    var _c = useCarouselContext(), options = _c.options, setIsFullscreenMode = _c.setIsFullscreenMode, currentItemIndex = _c.currentItemIndex, itemContainerHeight = _c.itemContainerHeight;
    var _d = useState(false), isLoaded = _d[0], setIsLoaded = _d[1];
    var _e = useState(false), setShouldRerender = _e[1];
    var imageRef = useRef();
    var itemViewerToolbarRef = useRef();
    var rerenderTimoutRef = useRef();
    var description = props.description, itemContainerRef = props.itemContainerRef, srcMain = props.srcMain, modal = props.modal;
    var stylingLogic = useBusinessLogic({ itemViewerToolbarRef: itemViewerToolbarRef }).stylingLogic;
    useRerenderOnExitFullscreenMode();
    var onImageClick = useCallback(function (e) {
        if (e.detail === 2) {
            setIsFullscreenMode(function (current) { return !current; });
        }
    }, [setIsFullscreenMode]);
    useLayoutEffect(function () {
        //only re-render if there is a modal to display
        if (!modal)
            return;
        clearTimeout(rerenderTimoutRef.current);
        rerenderTimoutRef.current = setTimeout(function () {
            setShouldRerender(function (current) { return !current; });
        }, RE_RENDER_DURATION);
        return function () {
            clearTimeout(rerenderTimoutRef.current);
        };
    }, [currentItemIndex, modal]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: stylingLogic.carouselImageContainerStlye },
            React.createElement(LoadingSpinner, __assign({ type: 'ring', show: !isLoaded, description: description }, (_b = (_a = options === null || options === void 0 ? void 0 : options.styling) === null || _a === void 0 ? void 0 : _a.itemViewer) === null || _b === void 0 ? void 0 : _b.loadingSpinner)),
            React.createElement("img", { ref: imageRef, onClick: onImageClick, draggable: false, style: stylingLogic.getCarouselImageStlye(itemContainerHeight), className: isLoaded ? '' : CLASSNAME__HIDDEN, src: srcMain, alt: description, onLoad: function () { return setIsLoaded(true); } })),
        React.createElement(CarouselItemViewerToolbar, { ref: itemViewerToolbarRef, isVideo: false, description: description || '', itemContainerRef: itemContainerRef, onNextItemClick: function () {
                setIsLoaded(false);
            }, onPreviousItemClick: function () {
                setIsLoaded(false);
            }, imageRef: imageRef })));
};

var CarouselItemToRender = function (props) {
    var _a = useCarouselContext(), currentItem = _a.currentItem, setIsFullscreenMode = _a.setIsFullscreenMode;
    var itemContainerRef = useRef();
    var isVideoStateChangeInitiatedInternallyRef = useRef(false);
    var isVideo = useMemo(function () { return getIsVideo(currentItem); }, [currentItem]);
    var _b = useState(false), isVideoPlaying = _b[0], setIsVideoPlaying = _b[1];
    var onClick = useCallback(function (e) {
        if (!isVideo)
            return;
        if (e.detail === 2) {
            setIsFullscreenMode(function (current) { return !current; });
        }
        isVideoStateChangeInitiatedInternallyRef.current = false;
        setIsVideoPlaying(function (current) { return !current; });
    }, [isVideo, setIsFullscreenMode]);
    return (React.createElement(CarouselItemViewerContainer, { ref: itemContainerRef, onClick: onClick }, isVideo ?
        React.createElement(CarouselVideo, __assign({ itemContainerRef: itemContainerRef, isVideoPlaying: isVideoPlaying, isVideoStateChangeInitiatedInternallyRef: isVideoStateChangeInitiatedInternallyRef, setIsVideoPlaying: setIsVideoPlaying }, currentItem))
        :
            React.createElement(CarouselImage, __assign({ itemContainerRef: itemContainerRef }, currentItem))));
};

var ArrowButton = forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? CLASSNAME__BUTTON : _a, fillColor = props.fillColor, direction = props.direction, _b = props.onClick, onClick = _b === void 0 ? function () { return null; } : _b, _c = props.childStyle, childStyle = _c === void 0 ? {} : _c, _d = props.style, style = _d === void 0 ? {} : _d;
    var _e = useBusinessLogic(), stylingLogic = _e.stylingLogic, optionsLogic = _e.optionsLogic;
    var classNameToUse = "".concat(className, "--arrow-").concat(direction);
    var leftClassName = "".concat(classNameToUse, "-one");
    var rightClassName = "".concat(classNameToUse, "-two");
    var fillColorToUse = fillColor || optionsLogic.theme.colorOne;
    var colorStyle = StylingLogic.getColorStyle(fillColorToUse, 'backgroundColor', childStyle);
    var instanceWidth = parseInt(style.width, 10) || 0;
    var buttonName = direction === ArrowButtonDirection.next ? CarouselElement.arrowRight : CarouselElement.arrowLeft;
    return (React.createElement("button", { style: __assign(__assign({}, style), stylingLogic.getCarouselElementSizeStlye(buttonName, instanceWidth)), ref: ref, onClick: onClick, className: "".concat(className, " ").concat(classNameToUse) },
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style, subElementName: 'first' })), className: leftClassName }),
        React.createElement("div", { style: __assign(__assign({}, colorStyle), stylingLogic.getCarouselElementChildSizeStlye({ buttonName: buttonName, style: style, subElementName: 'second' })), className: rightClassName })));
});

var EmptyFillerButton = function () {
    return (React.createElement("div", { className: CLASSNAME__BUTTON }));
};

var CarouselArrowButton = function (props) {
    var _a, _b, _c, _d;
    var currentPage = props.currentPage, direction = props.direction, numberOfDots = props.numberOfDots, _e = props.options, options = _e === void 0 ? {} : _e, onClick = props.onClick;
    var customButton = ((_b = (_a = options === null || options === void 0 ? void 0 : options.styling) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b.arrowRight) || {};
    if (direction === ArrowButtonDirection.previous) {
        customButton = ((_d = (_c = options === null || options === void 0 ? void 0 : options.styling) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.arrowLeft) || {};
    }
    var style = customButton.style, svgHref = customButton.svgHref;
    var optionsLogic = useBusinessLogic().optionsLogic;
    var isHidden = direction === ArrowButtonDirection.previous ? currentPage === 0 : currentPage === numberOfDots - 1;
    var shouldHide = optionsLogic.isWrappingDisabled;
    var defaultColor = optionsLogic.isDefaultItemDisplayLocation ? optionsLogic.theme.colorOne : optionsLogic.theme.colorFive;
    var fillColor = optionsLogic.getButtonColor(direction === ArrowButtonDirection.previous ? CarouselElement.arrowLeft : CarouselElement.arrowRight, defaultColor);
    if ((shouldHide && isHidden) || numberOfDots < NUMBER_OF_DOTS_MINIMUM_TO_DISPLAY_NAV_ITEMS)
        return React.createElement(EmptyFillerButton, null);
    return !!svgHref ?
        React.createElement(CarouselItemViewerCustomButton, { fillColor: fillColor, onClick: onClick, xlinkHref: svgHref, useElementStyle: style }) :
        React.createElement(ArrowButton, { fillColor: fillColor, direction: direction, onClick: onClick, childStyle: style });
};

var CarouselDots = function (props) {
    var _a, _b;
    //#region Init
    var currentPage = props.currentPage, items = props.items, _c = props.numberOfDots, numberOfDots = _c === void 0 ? (items === null || items === void 0 ? void 0 : items.length) || NUMBER_OF_DOTS_MINIMUM_TO_DISPLAY_NAV_ITEMS - 1 : _c, _d = props.options, options = _d === void 0 ? {} : _d, setCurrentPage = props.setCurrentPage;
    var _e = ((_b = (_a = options === null || options === void 0 ? void 0 : options.styling) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b.dots) || {}, style = _e.style, svgHref = _e.svgHref;
    var _f = useBusinessLogic(), optionsLogic = _f.optionsLogic, stylingLogic = _f.stylingLogic;
    var defaultColor = optionsLogic.isDefaultItemDisplayLocation ? optionsLogic.theme.colorOne : optionsLogic.theme.colorFive;
    var fillColor = optionsLogic.getButtonColor(CarouselElement.dots, defaultColor);
    //#endregion
    //#region Handlers/Functions
    var onDotClick = useCallback(function (index) {
        if (index === currentPage)
            return;
        setCurrentPage(index);
    }, [setCurrentPage, currentPage]);
    //#endregion
    //#region JSX
    var useStyles = useMemo(function () { return StylingLogic.getColorStyle(fillColor, 'fill'); }, [fillColor]);
    var divStyles = useMemo(function () { return StylingLogic.getColorStyle(fillColor, 'backgroundColor', {
        opacity: CAROUSEL_DOT_OPACITY_DEFAULT,
    }); }, [fillColor]);
    var containerHeight = useMemo(function () { var _a; return (((_a = stylingLogic.getCarouselElementSizeStlye(CarouselElement.dots)) === null || _a === void 0 ? void 0 : _a.width) || CAROUSEL_DOT_HEIGHT_DEFAULT) * 2 / 3; }, [stylingLogic]);
    var containerWidth = useMemo(function () { var _a; return (((_a = stylingLogic.getCarouselElementSizeStlye(CarouselElement.dots)) === null || _a === void 0 ? void 0 : _a.width) || CAROUSEL_DOT_HEIGHT_DEFAULT) * 2 / 3; }, [stylingLogic]);
    var dotContainerSizeStyle = useMemo(function () { return ({
        width: CAROUSEL_DOT_WIDTH_DEFAULT + (Math.abs(containerWidth - CAROUSEL_DOT_WIDTH_DEFAULT) / CAROUSEL_DOT_WIDTH_DEFAULT),
        height: containerHeight,
    }); }, [containerHeight, containerWidth]);
    var dotSizeStyle = useMemo(function () { return ({
        width: containerHeight / 4,
        height: containerHeight / 4,
    }); }, [containerHeight]);
    var renderDots = useCallback(function () {
        var dots = [];
        var _loop_1 = function (index) {
            var isCurrentPage = index === currentPage;
            var svgToUse = optionsLogic.getXlinkHref(svgHref);
            var currentDotStyle = isCurrentPage && !!svgToUse ? {
                opacity: 1,
            } : isCurrentPage ? {
                backgroundColor: fillColor || optionsLogic.theme.colorOne,
                opacity: 1,
            } : {};
            var currentPageClassname = isCurrentPage ? "".concat(CLASSNAME__DOTS, "-current") : '';
            dots.push((!!svgToUse ? (React$1.createElement("svg", { key: index, onClick: function () { return onDotClick(index); }, className: currentPageClassname },
                React$1.createElement("use", { style: __assign(__assign({}, useStyles), currentDotStyle), xlinkHref: svgToUse, href: svgToUse }))) : (React$1.createElement("div", { key: index, style: dotContainerSizeStyle, onClick: function () { return onDotClick(index); }, className: currentPageClassname },
                React$1.createElement("div", { style: __assign(__assign(__assign({}, divStyles), currentDotStyle), dotSizeStyle) })))));
        };
        for (var index = 0; index < numberOfDots; index++) {
            _loop_1(index);
        }
        return dots;
    }, [
        currentPage,
        divStyles,
        dotContainerSizeStyle,
        dotSizeStyle,
        fillColor,
        numberOfDots,
        onDotClick,
        optionsLogic,
        svgHref,
        useStyles
    ]);
    if (numberOfDots < NUMBER_OF_DOTS_MINIMUM_TO_DISPLAY_NAV_ITEMS)
        return null;
    return (React$1.createElement("div", { className: CLASSNAME__DOTS, style: style }, renderDots()));
    //#endregion
};

var CarouselNavigation = function (props) {
    var currentPage = props.currentPage, items = props.items, numberOfPages = props.numberOfPages, _a = props.options, options = _a === void 0 ? {} : _a, setCurrentPage = props.setCurrentPage;
    var stylingLogic = useBusinessLogic().stylingLogic;
    return numberOfPages > 1 ? (React$1.createElement("div", { style: stylingLogic.navigationStyle, className: CLASSNAME__NAVIGATION },
        React$1.createElement(CarouselArrowButton, { options: options, currentPage: currentPage, numberOfDots: numberOfPages, direction: ArrowButtonDirection.previous, onClick: function () { return onArrowButtonClick(ArrowButtonDirection.previous, currentPage, numberOfPages, setCurrentPage); } }),
        React$1.createElement(CarouselDots, { items: items || [], numberOfDots: numberOfPages, setCurrentPage: setCurrentPage, currentPage: currentPage, options: options }),
        React$1.createElement(CarouselArrowButton, { options: options, currentPage: currentPage, numberOfDots: numberOfPages, direction: ArrowButtonDirection.next, onClick: function () { return onArrowButtonClick(ArrowButtonDirection.next, currentPage, numberOfPages, setCurrentPage); } }))) : null;
};
var CarouselNavigationMemoized = React$1.memo(CarouselNavigation);

var CarouselItem = function (props) {
    //#region Init
    var description = props.description, index = props.index, srcMain = props.srcMain, srcThumbnail = props.srcThumbnail;
    var _a = useCarouselContext(), setCurrentItemIndex = _a.setCurrentItemIndex, currentItemIndex = _a.currentItemIndex, setIsFullscreenMode = _a.setIsFullscreenMode;
    var _b = useBusinessLogic({ isCurrentItem: index === currentItemIndex }), stylingLogic = _b.stylingLogic, optionsLogic = _b.optionsLogic;
    //#endregion
    //#region Functions/Handlers
    function onPress(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setCurrentItemIndex(index);
                if (optionsLogic.isDefaultItemDisplayLocation) {
                    setIsFullscreenMode(true);
                }
                return [2 /*return*/];
            });
        });
    }
    //#endregion
    //#region JSX
    return (React.createElement("div", { onClick: function (e) { return onPress(); }, className: CLASSNAME__CAROUSEL_ITEM, style: stylingLogic.carouselItemStyle },
        description ? (React.createElement("div", { style: stylingLogic.thumbnailOverlayBackgroundStyle },
            React.createElement("p", { style: stylingLogic.thumbnailOverlayTextStyle }, description))) : null,
        React.createElement("img", { "data-index": index, draggable: false, style: stylingLogic.carouselItemCursorStyle, className: CLASSNAME__CAROUSEL_ITEM_THUMBNAIL, src: srcThumbnail || resolveSrcMain(srcMain), alt: description || 'user picture or video' })));
    //#endregion
};

var CarouselItems = forwardRef(function (props, ref) {
    var interItemSpacing = props.interItemSpacing, isLastPage = props.isLastPage, items = props.items, translationAmount = props.translationAmount, translationAmountChangeRef = props.translationAmountChangeRef;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var itemsContainerOuterRef = useRef(null);
    return (React$1.createElement("div", { ref: itemsContainerOuterRef, style: __assign(__assign({}, stylingLogic.carouselItemsOuterContainerStyle), stylingLogic.fontFamilyNavigationStyle), className: CLASSNAME__CAROUSEL_ITEMS_CONTAINER },
        React$1.createElement("div", { ref: ref, style: stylingLogic.getCarouselItemsInnerContainerStyle(interItemSpacing, translationAmount, isLastPage, translationAmountChangeRef), className: CLASSNAME__CAROUSEL_ITEMS }, items.map(function (item, index) { return React$1.createElement(CarouselItem, __assign({ key: index, index: index }, item)); }))));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
*Tracks why the translation amount changed.
*Used to fix issue with translation amount when {@link CarouselNavigationOptions.isLastPageFlush isLastPageFlush} is `true`.
**/
var TranslationAmountChange;
(function (TranslationAmountChange) {
    TranslationAmountChange[TranslationAmountChange["currentItemIndex"] = 0] = "currentItemIndex";
    TranslationAmountChange[TranslationAmountChange["currentPage"] = 1] = "currentPage";
    TranslationAmountChange[TranslationAmountChange["isLastPageFlushAdjustment"] = 2] = "isLastPageFlushAdjustment";
    TranslationAmountChange[TranslationAmountChange["swipe"] = 3] = "swipe";
    TranslationAmountChange[TranslationAmountChange["none"] = 4] = "none";
})(TranslationAmountChange || (TranslationAmountChange = {}));
var WINDOW_RESIZE_DEBOUNCE_INTERVAL = 100;
var CarouselContent = function (props) {
    var _a, _b;
    //#region Init
    var carouselContainerRef = props.carouselContainerRef, items = props.items, options = props.options;
    var _c = useCarouselContext(), currentItemIndex = _c.currentItemIndex, numberOfPages = _c.numberOfPages, setNumberOfPages = _c.setNumberOfPages, isFullscreenMode = _c.isFullscreenMode, setIsFullscreenMode = _c.setIsFullscreenMode, currentPage = _c.currentPage, setCurrentPage = _c.setCurrentPage;
    var _d = useBusinessLogic(), optionsLogic = _d.optionsLogic, stylingLogic = _d.stylingLogic;
    var hasCalculatedNumberOfDotsRef = useRef(false);
    var hasCalculatedItemSpacingRef = useRef(false);
    var resizeWindowDebounceRef = useRef();
    var translationAmountDifferenceRef = useRef(0);
    var itemsContainerInnerRef = useRef(null);
    var previousCurrentItemIndexRef = useRef(CURRENT_ITEM_INDEX_INITIAL);
    var translationAmountChangeRef = useRef(TranslationAmountChange.none);
    var isLastPage = useMemo(function () { return currentPage + 1 === numberOfPages; }, [currentPage, numberOfPages]);
    var _e = useState(false), hasForcedRender = _e[0], setHasForcedRender = _e[1]; //used to force layout calculation initially
    var _f = useState(optionsLogic.getThumbnailSpacing()), interItemSpacing = _f[0], setInterItemSpacing = _f[1];
    var _g = useState(TRANSLATION_AMOUNT_INITIAL), translationAmount = _g[0], setTranslationAmount = _g[1];
    useOnSwipe({
        element: itemsContainerInnerRef.current,
        isDisabled: optionsLogic.isNavigationSwipingDisabled,
        maxClickThreshold: optionsLogic.navigationMaxClickThreshold,
        swipeHandlers: {
            left: {
                callback: function () {
                    if (optionsLogic.isWrappingDisabled && currentPage === 0) {
                        return;
                    }
                    onArrowButtonClick(ArrowButtonDirection.previous, currentPage, numberOfPages, setCurrentPage);
                },
            },
            right: {
                callback: function () {
                    if (optionsLogic.isWrappingDisabled && currentPage === (numberOfPages - 1)) {
                        return;
                    }
                    onArrowButtonClick(ArrowButtonDirection.next, currentPage, numberOfPages, setCurrentPage);
                },
            },
            onMoveWhenGrabbing: function (xDiff, yDiff) {
                translationAmountChangeRef.current = TranslationAmountChange.swipe;
                setTranslationAmount(function (current) {
                    var offset = xDiff;
                    if (optionsLogic.isWrappingDisabled && current <= 0 && offset >= 0)
                        return current;
                    if (optionsLogic.isWrappingDisabled && currentPage === (numberOfPages - 1) && offset <= 0)
                        return current;
                    return current - offset;
                });
            },
        },
        handleStyleChanges: function (styleCase, element) {
            if (!element || numberOfPages <= 1)
                return;
            if (styleCase === 'start') {
                document.body.classList.add(CLASSNAME__GRABBING);
                element.classList.add(CLASSNAME__GRABBING);
            }
            else {
                document.body.classList.remove(CLASSNAME__GRABBING);
                element.classList.remove(CLASSNAME__GRABBING);
            }
        }
    });
    //#endregion
    //#region Functions/Handlers
    var getInterItemSpacing = useCallback(function () {
        var _a;
        //if there is itemSpacing is defined, the dynamic behavior is disabled
        if (((_a = options === null || options === void 0 ? void 0 : options.thumbnail) === null || _a === void 0 ? void 0 : _a.spacing) !== undefined) {
            var currentItemSpacing = optionsLogic.getThumbnailSpacing(GET_CURRENT_VALUE_DEFAULT);
            if (currentItemSpacing >= GET_CURRENT_VALUE_DEFAULT)
                return currentItemSpacing;
        }
        var _b = getNumberOfItemsThatCanFit(items.length, carouselContainerRef === null || carouselContainerRef === void 0 ? void 0 : carouselContainerRef.current, stylingLogic, optionsLogic), numberOfWholeItemsThatCanFit = _b.numberOfWholeItemsThatCanFit, containerWidth = _b.containerWidth, itemSize = _b.itemSize;
        var numberOfGaps = numberOfWholeItemsThatCanFit - 1;
        var remainingSpace = containerWidth - (numberOfWholeItemsThatCanFit * itemSize);
        //numberOfGaps logic needed to prevent crashing at smaller viewport, since divide by <= 0 
        var newInterItemSpacing = (remainingSpace / (numberOfGaps <= 0 ? 1 : numberOfGaps));
        return newInterItemSpacing || CAROUSEL_ITEM_SPACING_DEFAULT;
    }, [(_a = options === null || options === void 0 ? void 0 : options.thumbnail) === null || _a === void 0 ? void 0 : _a.spacing, items.length, carouselContainerRef, stylingLogic, optionsLogic]);
    var doTranslationAmountCommon = useCallback(function () {
        var _a;
        var interItemSpacingToUse = optionsLogic.getThumbnailSpacingBasedOnThumbnailPositioning(interItemSpacing);
        var isDefaultCase = ((_a = options === null || options === void 0 ? void 0 : options.thumbnail) === null || _a === void 0 ? void 0 : _a.spacing) === undefined && optionsLogic.thumbnailPositioning === undefined;
        var _b = getNumberOfItemsThatCanFit(items.length, carouselContainerRef === null || carouselContainerRef === void 0 ? void 0 : carouselContainerRef.current, stylingLogic, optionsLogic), numberOfWholeItemsThatCanFit = _b.numberOfWholeItemsThatCanFit, containerWidth = _b.containerWidth, itemSize = _b.itemSize;
        var defaultAmount = interItemSpacingToUse + containerWidth;
        if (isDefaultCase) {
            translationAmountDifferenceRef.current = containerWidth + interItemSpacing;
        }
        else if (interItemSpacingToUse !== undefined && interItemSpacingToUse >= 0) {
            if (interItemSpacingToUse === 0) {
                translationAmountDifferenceRef.current = numberOfWholeItemsThatCanFit * itemSize;
            }
            else if (!translationAmountDifferenceRef.current) {
                translationAmountDifferenceRef.current = numberOfWholeItemsThatCanFit * itemSize + (numberOfWholeItemsThatCanFit) * interItemSpacingToUse;
            }
        }
        else if (numberOfWholeItemsThatCanFit <= 1) {
            translationAmountDifferenceRef.current = containerWidth;
        }
        else {
            translationAmountDifferenceRef.current = defaultAmount;
        }
        return { numberOfWholeItemsThatCanFit: numberOfWholeItemsThatCanFit, containerWidth: containerWidth, itemSize: itemSize };
    }, [
        carouselContainerRef,
        interItemSpacing,
        items.length,
        (_b = options === null || options === void 0 ? void 0 : options.thumbnail) === null || _b === void 0 ? void 0 : _b.spacing,
        optionsLogic,
        stylingLogic
    ]);
    var getLastPageOffset = useCallback(function (numberOfWholeItemsThatCanFit, itemSize) {
        var offset = 0;
        if (numberOfPages > 1 && currentPage === numberOfPages - 1 && (items === null || items === void 0 ? void 0 : items.length) > 0) {
            var numberOfAlreadyDisplayedItems = currentPage * numberOfWholeItemsThatCanFit;
            var numberOfRemainingItems = items.length - numberOfAlreadyDisplayedItems;
            var widthOfRemainingSpaces = numberOfRemainingItems * optionsLogic.getThumbnailSpacingBasedOnThumbnailPositioning(interItemSpacing);
            var widthOfRemainingItems = numberOfRemainingItems * itemSize;
            offset = (translationAmountDifferenceRef.current - (widthOfRemainingSpaces + widthOfRemainingItems));
        }
        return offset;
    }, [currentPage, interItemSpacing, items.length, numberOfPages, optionsLogic]);
    var getTranslationAmountByCurrentPage = useCallback(function () {
        doTranslationAmountCommon();
        return currentPage * translationAmountDifferenceRef.current;
    }, [currentPage, doTranslationAmountCommon]);
    var getTranslationAmountByCurrentItemIndex = useCallback(function () {
        var numberOfWholeItemsThatCanFit = doTranslationAmountCommon().numberOfWholeItemsThatCanFit;
        var newCurrentPage = Math.floor(currentItemIndex / numberOfWholeItemsThatCanFit);
        setCurrentPage(newCurrentPage);
        return newCurrentPage * translationAmountDifferenceRef.current;
    }, [currentItemIndex, setCurrentPage, doTranslationAmountCommon]);
    var setNumberOfDotsToDisplay = useCallback(function () {
        var newNumberOfPages = getNumberOfPages(carouselContainerRef === null || carouselContainerRef === void 0 ? void 0 : carouselContainerRef.current, items.length, stylingLogic, optionsLogic);
        setNumberOfPages && setNumberOfPages(newNumberOfPages);
        if (currentPage >= newNumberOfPages) {
            setCurrentPage(newNumberOfPages - 1);
        }
    }, [carouselContainerRef, items.length, stylingLogic, optionsLogic, setNumberOfPages, currentPage, setCurrentPage]);
    //#endregion
    //#region Side Fx
    //have to reset hasCalculatedItemSpacingRef if the dependencies for the getInterItemSpacing callback change
    useEffect(function () {
        hasCalculatedItemSpacingRef.current = false;
    }, [options === null || options === void 0 ? void 0 : options.thumbnail, carouselContainerRef, hasCalculatedItemSpacingRef]);
    useEffect(function () {
        if (!hasForcedRender)
            return setHasForcedRender(true);
        else if (hasCalculatedItemSpacingRef.current)
            return;
        hasCalculatedItemSpacingRef.current = true;
        setInterItemSpacing(getInterItemSpacing());
    }, [hasForcedRender, setHasForcedRender, setInterItemSpacing, getInterItemSpacing, hasCalculatedItemSpacingRef]);
    useEffect(function () {
        if (hasCalculatedNumberOfDotsRef.current)
            return;
        setNumberOfDotsToDisplay();
        hasCalculatedNumberOfDotsRef.current = true;
    }, [hasCalculatedNumberOfDotsRef, setNumberOfDotsToDisplay]);
    useEffect(function () {
        function handleResize() {
            clearTimeout(resizeWindowDebounceRef.current);
            resizeWindowDebounceRef.current = setTimeout(function () {
                translationAmountDifferenceRef.current = 0;
                setNumberOfDotsToDisplay();
                setInterItemSpacing(getInterItemSpacing());
            }, WINDOW_RESIZE_DEBOUNCE_INTERVAL);
        }
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [setNumberOfDotsToDisplay, setInterItemSpacing, getInterItemSpacing, getTranslationAmountByCurrentPage, setCurrentPage]);
    //Tracking the itemViewer item and moving the corresponding carousel to match the page the item is on
    useEffect(function () {
        if ((!isFullscreenMode && optionsLogic.isDefaultItemDisplayLocation) ||
            (items === null || items === void 0 ? void 0 : items.length) <= 0 ||
            (optionsLogic.autoChangePage === false)) {
            return;
        }
        if (previousCurrentItemIndexRef.current === currentItemIndex) {
            return;
        }
        var numberOfWholeItemsThatCanFit = getNumberOfItemsThatCanFit(items.length, carouselContainerRef === null || carouselContainerRef === void 0 ? void 0 : carouselContainerRef.current, stylingLogic, optionsLogic).numberOfWholeItemsThatCanFit;
        var currentNthItem = currentItemIndex + 1;
        var isNextItemClick = getIsNextItemClick();
        var lastItemInViewIndex = currentPage * numberOfWholeItemsThatCanFit + numberOfWholeItemsThatCanFit;
        var firstItemInViewIndex = currentPage * numberOfWholeItemsThatCanFit + 1;
        // console.log({ currentNthItem, lastItemInViewIndex, isNextItemClick, currentPage, numberOfWholeItemsThatCanFit, previousCurrentItemIndexRef: previousCurrentItemIndexRef.current, itemsLEngth: items.length});
        if (isNextItemClick) {
            if (currentNthItem === 1 && previousCurrentItemIndexRef.current === items.length - 1) {
                setCurrentPage(0);
            }
            else if (currentNthItem > lastItemInViewIndex) {
                setCurrentPage(currentPage + 1);
            }
        }
        else {
            if (currentNthItem >= items.length) {
                setCurrentPage(numberOfPages - 1);
            }
            else if (currentNthItem < firstItemInViewIndex) {
                setCurrentPage(currentPage - 1);
            }
        }
        previousCurrentItemIndexRef.current = currentItemIndex;
        function getIsNextItemClick() {
            if (previousCurrentItemIndexRef.current === 0 && currentNthItem === items.length)
                return false;
            else if (previousCurrentItemIndexRef.current === items.length - 1 && currentItemIndex === 0)
                return true;
            return previousCurrentItemIndexRef.current < currentItemIndex;
        }
    }, [
        carouselContainerRef,
        currentPage,
        items,
        optionsLogic,
        stylingLogic,
        numberOfPages,
        currentItemIndex,
        previousCurrentItemIndexRef,
        isFullscreenMode,
        setCurrentPage,
    ]);
    //need to track the previous item index whenever an item is opened
    //needed for the above useEffect to work correctly
    useEffect(function () {
        previousCurrentItemIndexRef.current = currentItemIndex;
    }, [items, currentItemIndex]);
    //resetting state when exiting full screen via esc key
    useEffect(function () {
        function handleFullscreenChange() {
            //@ts-ignore
            var wasFullscreen = !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement;
            if (wasFullscreen) {
                setIsFullscreenMode(false);
            }
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return function () {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, [setIsFullscreenMode]);
    //updating translation amount
    useEffect(function () {
        if (!optionsLogic.autoChangePage || (translationAmountChangeRef === null || translationAmountChangeRef === void 0 ? void 0 : translationAmountChangeRef.current) !== TranslationAmountChange.currentPage)
            return;
        translationAmountChangeRef.current = TranslationAmountChange.currentItemIndex;
        var newTranslationAmount = getTranslationAmountByCurrentItemIndex();
        setTranslationAmount(newTranslationAmount);
    }, [optionsLogic.autoChangePage, getTranslationAmountByCurrentItemIndex]);
    useEffect(function () {
        if (!optionsLogic.autoChangePage && (translationAmountChangeRef === null || translationAmountChangeRef === void 0 ? void 0 : translationAmountChangeRef.current) === TranslationAmountChange.currentItemIndex)
            return;
        translationAmountChangeRef.current = TranslationAmountChange.currentPage;
        var newTranslationAmount = getTranslationAmountByCurrentPage();
        setTranslationAmount(newTranslationAmount);
    }, [getTranslationAmountByCurrentPage, optionsLogic.autoChangePage]);
    //adjusting the translation amount based on isLastPageFlush
    useEffect(function () {
        if (!optionsLogic.isLastPageFlush)
            return;
        var _a = getNumberOfItemsThatCanFit(items.length, carouselContainerRef === null || carouselContainerRef === void 0 ? void 0 : carouselContainerRef.current, stylingLogic, optionsLogic), numberOfWholeItemsThatCanFit = _a.numberOfWholeItemsThatCanFit, itemSize = _a.itemSize;
        var offset = getLastPageOffset(numberOfWholeItemsThatCanFit, itemSize);
        if (offset > 0) {
            translationAmountChangeRef.current = TranslationAmountChange.isLastPageFlushAdjustment;
            setTranslationAmount(function (current) { return current - offset; });
        }
    }, [carouselContainerRef, currentPage, getLastPageOffset, items.length, optionsLogic, stylingLogic]);
    //#endregion
    //#region JSX
    return (React.createElement(React.Fragment, null,
        optionsLogic.isItemDisplayLocationAbove ? (React.createElement(CarouselItemToRender, null)) : null,
        React.createElement(CarouselItems, { ref: itemsContainerInnerRef, interItemSpacing: interItemSpacing, translationAmount: translationAmount, isLastPage: isLastPage, translationAmountChangeRef: translationAmountChangeRef, items: items }),
        React.createElement(CarouselNavigationMemoized, { currentPage: currentPage, numberOfPages: numberOfPages, options: options || {}, setCurrentPage: setCurrentPage, items: items, numberOfDots: 0 }),
        optionsLogic.isItemDisplayLocationBelow ? (React.createElement(CarouselItemToRender, null)) : null));
    //#endregion
};

/*
*Use this when extending styling options.  Many default styles are currently in _carousel.scss or _buttons_scss
*/
var StylingLogic = /** @class */ (function () {
    function StylingLogic(constructor) {
        this.LAST_PAGE_CAROUSEL_AMOUNT_INITIAL = 0;
        var carouselContainerRef = constructor.carouselContainerRef, currentItem = constructor.currentItem, isCurrentItem = constructor.isCurrentItem, isFullscreenMode = constructor.isFullscreenMode, optionsLogic = constructor.optionsLogic, items = constructor.items, itemViewerRef = constructor.itemViewerRef, itemViewerToolbarRef = constructor.itemViewerToolbarRef, loadingSpinnerOptions = constructor.loadingSpinnerOptions, numberOfPages = constructor.numberOfPages, options = constructor.options, modalRef = constructor.modalRef, itemRef = constructor.itemRef;
        this.carouselContainerRef = carouselContainerRef;
        this.currentItem = currentItem;
        this.isCurrentItem = isCurrentItem;
        this.isCurrentItemVideo = getIsVideo(currentItem);
        this.isFullscreenMode = !!isFullscreenMode;
        this.items = items || [];
        this.loadingSpinnerOptions = loadingSpinnerOptions;
        this.itemViewerRef = itemViewerRef || { current: null };
        this.itemViewerToolbarRef = itemViewerToolbarRef || { current: null };
        this.lastPageCarouselTranslationAmount = this.LAST_PAGE_CAROUSEL_AMOUNT_INITIAL;
        this.numberOfPages = numberOfPages || 0;
        this.itemRef = itemRef;
        this.modalRef = modalRef;
        this.modalHeight = 0;
        this.options = options || {};
        this.optionsLogic = optionsLogic || new OptionsLogic({
            options: this.options,
            isFullscreenMode: false,
            carouselContainerRef: carouselContainerRef,
        });
    }
    Object.defineProperty(StylingLogic.prototype, "carouselImageContainerStlye", {
        //#region Public Getters
        get: function () {
            var _a = this.getItemViewerHorizontalSpacing(0), leftSpacing = _a.left, rightSpacing = _a.right;
            return {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                // height: '100%',
                paddingLeft: leftSpacing,
                paddingRight: rightSpacing,
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselImageStlye = function (height) {
        // const cursorStyle = this.isFullscreenMode ?  {
        //     zIndex: 0,
        //     cursor: "zoom-out",
        // } as CSSProperties : {
        //     zIndex: 10,
        //     cursor: "zoom-in",
        // }as CSSProperties;
        var userDefinedStyles = __assign({}, this.optionsLogic.itemStyles);
        return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign(__assign({ width: '100%' }, this.getCarouselItemHeightStyle(height)), userDefinedStyles) : __assign({}, userDefinedStyles);
    };
    StylingLogic.prototype.getCarouselItemHeightStyle = function (height) {
        return {
            height: this.isFullscreenMode ? 'auto' : height,
        };
    };
    Object.defineProperty(StylingLogic.prototype, "carouselStyle", {
        get: function () {
            var _a = this.optionsLogic.containerMargin, marginTop = _a.top, marginBottom = _a.bottom, marginLeft = _a.left, marginRight = _a.right;
            var common = {
                paddingTop: this.optionsLogic.getPaddingAmount(SpacingDirection.top, CarouselSection.itemViewer),
                paddingBottom: this.optionsLogic.getPaddingAmount(SpacingDirection.bottom, CarouselSection.itemViewer),
                marginTop: parseInt(marginTop || '0', 10) - CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginRight: marginRight,
                maxHeight: this.optionsLogic.maxHeight,
            };
            return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign({ background: this.optionsLogic.navigationBackground || this.optionsLogic.containerBackgroundColor, borderRadius: 4, paddingRight: 0, paddingLeft: 0 }, common) : __assign({}, common);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselHiddenInputStyle", {
        get: function () {
            return {
                display: 'none',
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemCursorStyle", {
        get: function () {
            return this.isCurrentItemSelected ? {
                cursor: 'auto',
            } : {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemStyle", {
        get: function () {
            var customCurrenItemBorder = this.optionsLogic.thumbnailBorderString;
            var marginStyle = this.optionsLogic.isDefaultItemDisplayLocation ? {
                margin: 0,
            } : {};
            var widthStyle = {
                width: this.optionsLogic.thumbnailSize,
                height: this.optionsLogic.thumbnailSize,
            };
            var selectionStyle = this.isCurrentItemSelected ? __assign({ border: this.getBorderStringToUse(customCurrenItemBorder), pointerEvents: 'none' }, this.carouselItemCursorStyle) : {};
            return __assign(__assign(__assign({}, selectionStyle), widthStyle), marginStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerStyle", {
        get: function () {
            return {
                display: this.isFullscreenMode ? 'flex' : 'none',
                backgroundColor: this.optionsLogic.itemViewerBackgroundColor,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerPreviewImageContainerStyle", {
        get: function () {
            var _a, _b;
            var width = this.optionsLogic.itemViewerPreviewWidth;
            var swapImageAndTextToUse = this.optionsLogic.itemViewerPreviewSwapImageAndText;
            var borderTemp = this.optionsLogic.itemViewerPreviewBorder;
            var splitBorder = ((_a = borderTemp === null || borderTemp === void 0 ? void 0 : borderTemp.toString().trim().split(RegexpPattern.splitAtSpaceAndRgb)) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return !!item; })) || [];
            var lastBorderElement = (_b = splitBorder[(splitBorder === null || splitBorder === void 0 ? void 0 : splitBorder.length) - 1]) === null || _b === void 0 ? void 0 : _b.trim();
            var isHex = lastBorderElement === null || lastBorderElement === void 0 ? void 0 : lastBorderElement.match(RegexpPattern.hexColor);
            var isRgb = lastBorderElement === null || lastBorderElement === void 0 ? void 0 : lastBorderElement.match(RegexpPattern.rgbColor);
            var isRgba = lastBorderElement === null || lastBorderElement === void 0 ? void 0 : lastBorderElement.match(RegexpPattern.rgbaColor);
            var color = isHex || isRgb || isRgba ? lastBorderElement : convertColorNameToHex(lastBorderElement);
            var borderToUse = "1px solid ".concat(convertHexToRgba(color || this.optionsLogic.theme.colorFive, CAROUSEL_ITEM_VIEWER_PREVIEW_BORDER_CENTER_LINE_OPACITY_DEFAULT));
            return {
                width: width / 2,
                borderLeft: swapImageAndTextToUse ? borderToUse : undefined,
                borderRight: swapImageAndTextToUse ? undefined : borderToUse,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerPreviewImageStyle", {
        get: function () {
            return {
                objectFit: this.optionsLogic.itemViewerPreviewImageFit,
                objectPosition: this.optionsLogic.itemViewerPreviewImagePosition,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerPreviewImageDescriptionBodyStyle", {
        get: function () {
            var size = this.optionsLogic.itemViewerPreviewTextBodySize;
            var color = this.optionsLogic.itemViewerPreviewTextBodyColor;
            var fontFamily = this.optionsLogic.itemViewerPreviewTextBodyFontFamily;
            return {
                fontFamily: fontFamily,
                color: color,
                fontSize: size,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerPreviewImageDescriptionHeaderStyle", {
        get: function () {
            var size = this.optionsLogic.itemViewerPreviewTextHeaderSize;
            var color = this.optionsLogic.itemViewerPreviewTextHeaderColor;
            var fontFamily = this.optionsLogic.itemViewerPreviewTextHeaderFontFamily;
            return {
                fontFamily: fontFamily,
                color: color,
                fontSize: size,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselItemViewerPreviewImageDescriptionContainerStyle", {
        get: function () {
            var width = this.optionsLogic.itemViewerPreviewWidth;
            var fontFamily = this.optionsLogic.itemViewerPreviewTextHeaderFontFamily;
            return {
                width: width / 2,
                fontFamily: fontFamily,
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselItemViewerPreviewStyle = function (shouldShowImageJSX) {
        var background = this.optionsLogic.itemViewerPreviewBackground;
        var border = this.optionsLogic.itemViewerPreviewBorder;
        var borderRadius = this.optionsLogic.itemViewerPreviewBorderRadius;
        var opacity = this.optionsLogic.itemViewerPreviewOpacity;
        var width = this.optionsLogic.itemViewerPreviewWidth;
        var height = this.optionsLogic.itemViewerPreviewHeight;
        var padding = this.optionsLogic.itemViewerPreviewTextContainerPadding;
        var verticalAlignment = this.optionsLogic.itemViewerPreviewTextContainerVerticalAlignment;
        var hitSlopTop = this.getCarouselVideoProgressHitSlop().paddingTop;
        var top = 0;
        var right = this.toolbarInnerContainerStyle.paddingRight;
        var isVideo = getIsVideo(this.currentItem);
        var translateYSpacing = "-".concat(CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT).concat(CAROUSEL_SPACING_UNIT);
        var translateYAmount = this.optionsLogic.isToolbarInVideo && isVideo ? "calc(-100% + ".concat(hitSlopTop).concat(CAROUSEL_SPACING_UNIT, " + ").concat(translateYSpacing, ")") : "calc(-100% + ".concat(translateYSpacing, ")");
        return {
            width: !shouldShowImageJSX ? width / 2 : width,
            height: height,
            top: top,
            right: right,
            backgroundColor: convertHexToRgba(background, parseFloat(opacity)),
            border: border,
            borderRadius: borderRadius,
            paddingTop: padding.top,
            paddingBottom: padding.bottom,
            paddingLeft: padding.left,
            paddingRight: padding.right,
            alignItems: verticalAlignment,
            transform: "translateY(".concat(translateYAmount, ")")
        };
    };
    Object.defineProperty(StylingLogic.prototype, "carouselItemsOuterContainerStyle", {
        get: function () {
            var common = {
                marginLeft: "".concat(this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.navigation)).concat(CAROUSEL_SPACING_UNIT),
                marginRight: "".concat(this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.navigation)).concat(CAROUSEL_SPACING_UNIT),
                overflow: 'hidden',
            };
            return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign({ paddingTop: this.optionsLogic.isToolbarInVideo && this.optionsLogic.isItemDisplayLocationAbove ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT - CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT : 0, paddingBottom: this.numberOfPages <= 1 && this.optionsLogic.isItemDisplayLocationBelow ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT : 0, overflow: 'hidden' }, common) : __assign({}, common);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselLoadingSpinnerRingContainerStyle", {
        get: function () {
            var _a = this.loadingSpinnerOptions, containerLength = _a.containerLength, containerMargin = _a.containerMargin;
            var widthStyle = containerLength ? {
                width: containerLength,
                height: containerLength,
            } : {};
            var marginStyle = containerMargin ? {
                margin: containerMargin,
            } : {};
            return __assign(__assign({}, widthStyle), marginStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselLoadingSpinnerColor", {
        get: function () {
            var _a = this.loadingSpinnerOptions, color = _a.color, spinnerColor = _a.spinnerColor;
            return spinnerColor || color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselLoadingSpinnerBackgroundColorStyle", {
        get: function () {
            return {
                backgroundColor: this.carouselLoadingSpinnerColor,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselLoadingSpinnerRingItemStyle", {
        get: function () {
            var RING_RADIUS_DEFAULT = 64;
            var _a = this.loadingSpinnerOptions, radius = _a.radius, width = _a.width, containerLength = _a.containerLength;
            var isContainerLengthLessThanRadius = containerLength && containerLength <= (radius || RING_RADIUS_DEFAULT);
            var divRadiusStyle = radius || isContainerLengthLessThanRadius ? {
                width: Math.min((radius || Number.MAX_SAFE_INTEGER), containerLength || Number.MAX_SAFE_INTEGER),
                height: Math.min(radius || Number.MAX_SAFE_INTEGER, containerLength || Number.MAX_SAFE_INTEGER),
            } : {};
            var divSizeStyle = width || containerLength ? {
                margin: width ? width : isContainerLengthLessThanRadius ? containerLength / 4 : 4,
                border: "".concat(width ? width : isContainerLengthLessThanRadius ? containerLength / 4 : 4).concat(CAROUSEL_SPACING_UNIT, " solid ").concat(this.optionsLogic.theme.colorFive),
            } : {};
            var colorStyle = {
                borderTopColor: this.carouselLoadingSpinnerColor,
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
            };
            return __assign(__assign(__assign({}, divRadiusStyle), divSizeStyle), colorStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselLoadingSpinnerTextStyle", {
        get: function () {
            var _a = this.loadingSpinnerOptions, color = _a.color, textColor = _a.textColor;
            var customColor = textColor || color;
            return {
                color: customColor,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselModalCloseButtonStyle", {
        get: function () {
            var _a, _b;
            var areChildrenPresent = !!((_b = (_a = this.currentItem) === null || _a === void 0 ? void 0 : _a.modal) === null || _b === void 0 ? void 0 : _b.children);
            var _c = this.optionsLogic.modalPadding, paddingRight = _c.right, paddingTop = _c.top;
            var rightStyle = paddingRight !== undefined ? {
                right: paddingRight,
            } : {};
            var topStyle = paddingTop !== undefined ? {
                top: paddingTop,
            } : {};
            var widthStyle = {
                width: this.optionsLogic.modalCloseButtonWidth,
            };
            return areChildrenPresent ? __assign(__assign(__assign({}, rightStyle), topStyle), widthStyle) : __assign({}, widthStyle);
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselModalStyle = function (shouldHide, modalHeight, isMinimized) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (isMinimized === void 0) { isMinimized = false; }
        this.modalHeight = Math.max(this.modalHeight, modalHeight);
        var minimizeOnClick = this.optionsLogic.modalMinimizeOnClick;
        var isToolbarEmbedded = this.optionsLogic.isToolbarInVideo;
        var _m = this.optionsLogic.modalPadding, paddingBottom = _m.bottom, paddingLeft = _m.left, paddingRight = _m.right, paddingTop = _m.top;
        var widthToUse = this.optionsLogic.getModalWidth(isMinimized);
        var customFontSize = this.optionsLogic.modalFontSize;
        var toolbarInnerContainerPaddingLeft = Number(((_a = this.toolbarInnerContainerStyle) === null || _a === void 0 ? void 0 : _a.paddingLeft) || 0);
        var toolbarInnerContainerPaddingRight = Number(((_b = this.toolbarInnerContainerStyle) === null || _b === void 0 ? void 0 : _b.paddingRight) || 0);
        var carouselPaddingTop = this.optionsLogic.getPaddingAmount(SpacingDirection.top, CarouselSection.container);
        var progressBarPaddingTop = this.getCarouselVideoProgressHitSlop().paddingTop;
        var toolbarPaddingBottom = this.optionsLogic.getPaddingAmount(SpacingDirection.bottom, CarouselSection.toolbar);
        var spaceBetweenModalTopAndItemTop = CAROUSEL_ITEM_SPACING_DEFAULT * 2;
        var maxHeight = 0;
        var heightBetweenItemTopAndToolbarBarTop = 270;
        if (!isMinimized) {
            if (this.isFullscreenMode) {
                var itemViewer = (_c = this.itemViewerRef) === null || _c === void 0 ? void 0 : _c.current;
                var progressBar = itemViewer === null || itemViewer === void 0 ? void 0 : itemViewer.querySelector(".".concat(CLASSNAME__TOOLBAR_PROGRESS));
                var progressBarRect = progressBar === null || progressBar === void 0 ? void 0 : progressBar.getBoundingClientRect();
                if (this.isCurrentItemVideo) {
                    heightBetweenItemTopAndToolbarBarTop = Math.abs(((progressBarRect === null || progressBarRect === void 0 ? void 0 : progressBarRect.top) || window.innerHeight * .9));
                }
                else {
                    var toolbar_1 = itemViewer === null || itemViewer === void 0 ? void 0 : itemViewer.querySelector(".".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR));
                    var toolbarFirstDiv = toolbar_1 === null || toolbar_1 === void 0 ? void 0 : toolbar_1.querySelector('div');
                    var toolbarFirstDivRect = toolbarFirstDiv === null || toolbarFirstDiv === void 0 ? void 0 : toolbarFirstDiv.getBoundingClientRect();
                    heightBetweenItemTopAndToolbarBarTop = Math.abs(((toolbarFirstDivRect === null || toolbarFirstDivRect === void 0 ? void 0 : toolbarFirstDivRect.top) || window.innerHeight * .925) + toolbarPaddingBottom);
                }
                maxHeight = heightBetweenItemTopAndToolbarBarTop - spaceBetweenModalTopAndItemTop * 4;
            }
            else if (this.optionsLogic.itemDisplayLocation !== 'none') {
                var carouselContainerRect = (_e = (_d = this.carouselContainerRef) === null || _d === void 0 ? void 0 : _d.current) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect();
                var toolbarProgress = (_g = (_f = this.carouselContainerRef) === null || _f === void 0 ? void 0 : _f.current) === null || _g === void 0 ? void 0 : _g.querySelector(".".concat(CLASSNAME__TOOLBAR_PROGRESS));
                var itemViewerToolbar = (_j = (_h = this.carouselContainerRef) === null || _h === void 0 ? void 0 : _h.current) === null || _j === void 0 ? void 0 : _j.querySelector(".".concat(CLASSNAME__ITEM_VIEWER_TOOLBAR));
                var itemContainer = (_l = (_k = this.carouselContainerRef) === null || _k === void 0 ? void 0 : _k.current) === null || _l === void 0 ? void 0 : _l.querySelector(".".concat(CLASSNAME__ITEM_CONTAINER));
                var elementToUse = this.isCurrentItemVideo && isToolbarEmbedded ? toolbarProgress : itemViewerToolbar;
                var elementToUseRect = elementToUse === null || elementToUse === void 0 ? void 0 : elementToUse.getBoundingClientRect();
                var elementFirstDiv = elementToUse === null || elementToUse === void 0 ? void 0 : elementToUse.querySelector("div");
                var elementFirstDivRect = elementFirstDiv === null || elementFirstDiv === void 0 ? void 0 : elementFirstDiv.getBoundingClientRect();
                var embeddedOffset = isToolbarEmbedded && this.isCurrentItemVideo ? 0 : CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT * (this.isCurrentItemVideo ? 1.33 : 2);
                if (carouselContainerRect && elementToUseRect && elementFirstDivRect) {
                    var imageMaxHeightOffset = this.isCurrentItemVideo ? 0 : (elementFirstDivRect === null || elementFirstDivRect === void 0 ? void 0 : elementFirstDivRect.height) || 30;
                    var toolbarTop = this.isCurrentItemVideo ? (elementToUseRect.y + progressBarPaddingTop) : (elementFirstDivRect.y + toolbarPaddingBottom);
                    heightBetweenItemTopAndToolbarBarTop = Math.abs(carouselContainerRect.y + carouselPaddingTop - toolbarTop);
                    if (this.optionsLogic.isItemDisplayLocationBelow) {
                        var itemContainerRect = itemContainer === null || itemContainer === void 0 ? void 0 : itemContainer.getBoundingClientRect();
                        if (itemContainerRect) {
                            heightBetweenItemTopAndToolbarBarTop = Math.abs((itemContainerRect === null || itemContainerRect === void 0 ? void 0 : itemContainerRect.top) - toolbarTop);
                            maxHeight = Math.floor(heightBetweenItemTopAndToolbarBarTop - spaceBetweenModalTopAndItemTop * 2);
                        }
                    }
                    else {
                        maxHeight = Math.floor(heightBetweenItemTopAndToolbarBarTop - spaceBetweenModalTopAndItemTop * 2);
                    }
                    maxHeight += -embeddedOffset + imageMaxHeightOffset;
                }
                // console.log({heightBetweenItemTopAndToolbarBarTop,rectToUse, maxHeight, modalHeight: this.modalHeight});
                // console.log({heightBetweenItemTopAndToolbarBarTop, carouselContainerRect, rectToUse, maxHeight, modalHeight: this.modalHeight});
                // console.log({ heightBetweenItemTopAndToolbarBarTop, toolbarPaddingBottom, top, maxHeight, modalHeigt: this.modalHeight, minTopValue });
            }
        }
        var widthStyle = {
            width: widthToUse,
            maxWidth: "calc(".concat(widthToUse, " - ").concat((toolbarInnerContainerPaddingLeft + toolbarInnerContainerPaddingRight)).concat(CAROUSEL_SPACING_UNIT, ")"),
            boxShadow: "0 10px 15px -3px rgba(0,0,0,.25)",
        };
        var paddingStyle = isMinimized ? {
            padding: "".concat(CAROUSEL_ITEM_SPACING_DEFAULT / 2).concat(CAROUSEL_SPACING_UNIT, " ").concat(CAROUSEL_ITEM_SPACING_DEFAULT * 1).concat(CAROUSEL_SPACING_UNIT),
        } : {
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        };
        var positionStyle = {
            top: 'auto',
            bottom: Math.abs(this.carouselShortcutIndicatorTextTop) + 24,
            left: "".concat(toolbarInnerContainerPaddingLeft + 1).concat(CAROUSEL_SPACING_UNIT),
            right: 'auto',
        };
        var textStyle = {
            color: this.optionsLogic.modalTextColor,
            fontSize: customFontSize,
            fontWeight: isMinimized ? 'bold' : FONT_WEIGHT_DEFAULT,
        };
        var generalStyle = {
            position: 'absolute',
            transition: "opacity .25s ease",
            borderRadius: 5,
            background: this.optionsLogic.modalBackgroundColor,
            maxHeight: isMinimized ? 'auto' : maxHeight,
            overflow: 'auto',
            cursor: isMinimized || minimizeOnClick ? 'pointer' : 'auto',
        };
        var hiddenStyle = {
            visibility: shouldHide ? 'hidden' : 'visible',
            pointerEvents: shouldHide ? 'none' : 'auto',
        };
        return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, generalStyle), paddingStyle), widthStyle), positionStyle), textStyle), this.fontFamilyItemViewerStyle), hiddenStyle), { zIndex: -1 });
    };
    Object.defineProperty(StylingLogic.prototype, "carouselToolbarTextDescriptionStyle", {
        get: function () {
            return __assign(__assign({}, this.getMaxLineCountStyle(1)), { flex: 1 });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselToolbarTextStyle", {
        get: function () {
            return {
                color: this.optionsLogic.toolbarTextColor,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoContainerStyle", {
        get: function () {
            var _a = this.getItemViewerHorizontalSpacing(0), leftSpacing = _a.left, rightSpacing = _a.right;
            var common = {
                position: 'relative',
                display: 'flex',
            };
            var layoutStyle = !this.optionsLogic.isDefaultItemDisplayLocation ? {
                width: "100%",
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: leftSpacing,
                paddingRight: rightSpacing,
            } : {};
            return __assign(__assign({}, common), layoutStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoCurrentStateIndicatorButtonStyle", {
        get: function () {
            var widthToUse = this.optionsLogic.videoCurrentStateIndicatorSize;
            return {
                height: widthToUse,
                width: widthToUse,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoCurrentStateIndicatorContainerStyle", {
        get: function () {
            var buttonStyle = this.carouselVideoCurrentStateIndicatorButtonStyle;
            return {
                height: parseInt(buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle.width, 10) * 2.75,
                width: parseInt(buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle.width, 10) * 2.75,
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselVideoCommonStyles = function (itemContainerHeight) {
        return __assign(__assign({}, this.getCarouselItemHeightStyle(itemContainerHeight)), this.optionsLogic.itemStyles);
    };
    StylingLogic.prototype.getCarouselVideoCurrentTimeViewerStyle = function (shouldShow, itemContainerHeight) {
        if (!shouldShow)
            return {
                display: 'none',
            };
        return __assign({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', paddingLeft: this.carouselVideoContainerStyle.paddingLeft, paddingRight: this.carouselVideoContainerStyle.paddingRight }, this.getCarouselVideoCommonStyles(itemContainerHeight));
    };
    StylingLogic.prototype.getCarouselVideoStyle = function (shouldHide, itemContainerHeight) {
        return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign(__assign({ width: "100%" }, this.getCarouselVideoCommonStyles(itemContainerHeight)), { zIndex: shouldHide ? -1 : 1 }) : __assign({}, this.optionsLogic.itemStyles);
    };
    StylingLogic.prototype.getCarouselVideoProgressHitSlop = function () {
        var hitSlop = this.optionsLogic.videoProgressBarHitSlop;
        return {
            paddingTop: hitSlop.top,
            paddingBottom: hitSlop.bottom,
        };
    };
    Object.defineProperty(StylingLogic.prototype, "carouselVideoProgressContainerStyle", {
        get: function () {
            var widthToUse = this.optionsLogic.progressBarShouldSpanEntireWidth
                ? "calc(100% + ".concat(this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.toolbar) + this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.toolbar)).concat(CAROUSEL_SPACING_UNIT, ")")
                : "100%";
            var heightToUse = this.optionsLogic.isToolbarInVideo ? 'auto' : CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT;
            var common = __assign({ height: heightToUse, background: 'transparent', width: widthToUse, position: 'relative' }, (this.optionsLogic.isToolbarInVideo ? this.getCarouselVideoProgressHitSlop() : {}));
            return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign({}, common) : __assign({}, common);
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselVideoProgressSectionCommonStyle = function (percent, left, index, sectionsLength, isBackgroundDiv) {
        if (isBackgroundDiv === void 0) { isBackgroundDiv = false; }
        var isFirst = index === 0;
        var isLast = index === sectionsLength - 1;
        var sectionGap = this.optionsLogic.videoProgressBarSectionGap;
        var borderString = "".concat(sectionGap / 2).concat(CAROUSEL_SPACING_UNIT, " solid transparent");
        var borderLeftToUse = !isBackgroundDiv || isFirst ? undefined : borderString;
        var borderRightToUse = !isBackgroundDiv || isLast ? undefined : borderString;
        var widthOffset = isBackgroundDiv || sectionsLength <= 1 ? 0 : isFirst ? sectionGap / 2 : (isLast ? sectionGap / 2 : sectionGap);
        var leftOffset = isBackgroundDiv || isFirst ? 0 : -sectionGap / 2;
        return {
            width: percent >= 0 && percent <= 1 ? "calc(".concat(percent * 100, "% - ").concat(widthOffset).concat(CAROUSEL_SPACING_UNIT, ")") : percent - widthOffset,
            left: sectionsLength <= 1 ? 0 : "calc(".concat(left * 100, "% - ").concat(leftOffset).concat(CAROUSEL_SPACING_UNIT, ")"),
            borderLeft: borderLeftToUse,
            borderRight: borderRightToUse,
            backfaceVisibility: 'hidden',
        };
    };
    StylingLogic.prototype.getCarouselVideoProgressBackgroundSectionContainerStyle = function (percent, left, index, sectionsLength, currentSectionIndex) {
        var isCurrentSection = index === currentSectionIndex;
        var scaleAmount = this.optionsLogic.videoProgressBarScaleAmount;
        var isToolbarInVideo = this.optionsLogic.isToolbarInVideo;
        var common = __assign({ backfaceVisibility: 'hidden', transition: "transform .125s ease", transformOrigin: isToolbarInVideo ? 'center' : 'top', touchAction: 'none' }, this.getCarouselVideoProgressSectionCommonStyle(percent, left, index, sectionsLength, true));
        if (sectionsLength <= 0) {
            return __assign({ width: '100%', position: 'absolute', transform: isCurrentSection
                    ? "".concat(this.carouselVideoProgressPositioningStyle.transform, " scaleY(").concat(scaleAmount, ")")
                    : this.carouselVideoProgressPositioningStyle.transform }, common);
        }
        return __assign(__assign(__assign({}, this.carouselVideoProgressPositioningStyle), { background: 'transparent', transform: isCurrentSection
                ? "".concat(this.carouselVideoProgressPositioningStyle.transform || '', " scaleY(").concat(scaleAmount, ")")
                : this.carouselVideoProgressPositioningStyle.transform }), common);
    };
    StylingLogic.prototype.getCarouselVideoProgressBackgroundSectionStyle = function (isLast) {
        if (isLast === void 0) { isLast = false; }
        return __assign(__assign({}, this.carouselVideoProgressBackgroundCommon), { width: "calc(100% - ".concat(isLast ? TOOLBAR_MARGIN_RIGHT_OFFSET : 0).concat(CAROUSEL_SPACING_UNIT) });
    };
    StylingLogic.prototype.getCarouselVideoProgressForegroundStyle = function (percent, left, index, sectionsLength, currentSectionIndex) {
        var isCurrent = index === currentSectionIndex;
        return __assign(__assign(__assign({ background: this.optionsLogic.videoProgressBarForegroundColor, height: this.optionsLogic.videoProgressBarHeight * (isCurrent ? this.optionsLogic.videoProgressBarScaleAmount : 1) }, this.carouselVideoProgressPositioningStyle), this.getCarouselVideoProgressSectionCommonStyle(percent, left, index, sectionsLength)), { zIndex: 2, touchAction: 'none' });
    };
    StylingLogic.prototype.getCarouselVideoProgressSeekDotStyle = function (percentWidthDecimal, isVisible, isInCurrentSection) {
        var scaleAmount = this.optionsLogic.videoProgressBarScaleAmount;
        var _a = this.optionsLogic.videoProgressBarDotSettings, diameter = _a.diameter, isAlwaysVisible = _a.isAlwaysVisible, transitionDuration = _a.transitionDuration;
        return {
            left: "calc(".concat(percentWidthDecimal * 100, "% - ").concat(diameter / 2).concat(CAROUSEL_SPACING_UNIT, ")"),
            borderRadius: '50%',
            position: 'absolute',
            background: this.optionsLogic.videoProgressBarForegroundColor,
            height: diameter,
            width: diameter,
            transform: "translate(0, -50%) scale(".concat((isVisible || isAlwaysVisible) ? (isInCurrentSection ? scaleAmount / 2 : '1') : '0', ")"),
            transition: "opacity ".concat(transitionDuration, " ease, transform ").concat(transitionDuration, " ease"),
            zIndex: 10,
            touchAction: 'none',
        };
    };
    StylingLogic.prototype.getCarouselVideoProgressSeekStyle = function (percent, left, index, sectionsLength, currentSectionIndex) {
        var isCurrent = index === currentSectionIndex;
        return __assign(__assign({ position: 'absolute', background: this.optionsLogic.videoProgressBarSeekColor, height: this.optionsLogic.videoProgressBarHeight * (isCurrent ? this.optionsLogic.videoProgressBarScaleAmount : 1), touchAction: 'none' }, this.carouselVideoProgressPositioningStyle), this.getCarouselVideoProgressSectionCommonStyle(percent, left, index, sectionsLength));
    };
    Object.defineProperty(StylingLogic.prototype, "carouselVideoProgressScreenshotViewerVideoStyle", {
        get: function () {
            return {
                pointerEvents: 'none',
                border: '2px solid white',
                borderRadius: 2,
                backgroundColor: 'white',
                width: '100%'
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselVideoProgressScreenshotViewerContainerStyle = function (percent, videoRef, toolbarElement, screenShotTextElement, screenShotCanvasElement, textTranslateOffsetRef) {
        var _a, _b;
        var width = this.optionsLogic.videoProgressBarScreenshotViewer.width;
        var _c = this.getItemViewerHorizontalSpacing(), paddingBetweenContainerAndVideoLeft = _c.left, paddingBetweenContainerAndVideoRight = _c.right;
        var isEmbedded = this.optionsLogic.isToolbarInVideo;
        var videoRect = (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var toolbarInnerContainerRect = (_b = toolbarElement === null || toolbarElement === void 0 ? void 0 : toolbarElement.querySelector('div')) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        var screenShotTextContainerRect = screenShotTextElement === null || screenShotTextElement === void 0 ? void 0 : screenShotTextElement.getBoundingClientRect();
        var screenShotCanvasRect = screenShotCanvasElement === null || screenShotCanvasElement === void 0 ? void 0 : screenShotCanvasElement.getBoundingClientRect();
        var progressBarElement = toolbarElement === null || toolbarElement === void 0 ? void 0 : toolbarElement.querySelector(".".concat(CLASSNAME__TOOLBAR_PROGRESS));
        var progressBarRect = progressBarElement === null || progressBarElement === void 0 ? void 0 : progressBarElement.getBoundingClientRect();
        var hitSlopBottom = this.getCarouselVideoProgressHitSlop().paddingBottom;
        var bottom = (toolbarInnerContainerRect === null || toolbarInnerContainerRect === void 0 ? void 0 : toolbarInnerContainerRect.height) && (progressBarRect === null || progressBarRect === void 0 ? void 0 : progressBarRect.height)
            ? toolbarInnerContainerRect.height - progressBarRect.height + ((screenShotTextContainerRect === null || screenShotTextContainerRect === void 0 ? void 0 : screenShotTextContainerRect.height) || 20) + hitSlopBottom + this.toolbarPaddingBottom + CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT * 1.33
            : (isEmbedded ? 103 : 90); //fallback
        var translateX = '-50%';
        var left = "".concat(paddingBetweenContainerAndVideoLeft + (((videoRect === null || videoRect === void 0 ? void 0 : videoRect.width) || 200) - (this.isFullscreenMode ? (paddingBetweenContainerAndVideoLeft + paddingBetweenContainerAndVideoRight) : 0)) * percent).concat(CAROUSEL_SPACING_UNIT);
        var right = "auto";
        if (videoRect && screenShotCanvasRect && screenShotTextContainerRect && progressBarRect) {
            var cursorLeftPosition = videoRect.left + videoRect.width * percent;
            var minCursorLeftValue = videoRect.left + (screenShotCanvasRect.width / 2);
            var maxCursorLeftValue = videoRect.right - (screenShotCanvasRect.width / 2);
            //handling right-bound case
            if (cursorLeftPosition >= maxCursorLeftValue) {
                left = 'auto';
                right = "0".concat(CAROUSEL_SPACING_UNIT);
                translateX = "".concat(-paddingBetweenContainerAndVideoRight).concat(CAROUSEL_SPACING_UNIT);
            }
            // console.log({ leftBound, viewerLeft, cursorLeftPosition, minCursorLeftValue });
            //handling left-bound case
            if (cursorLeftPosition <= minCursorLeftValue) {
                left = "0".concat(CAROUSEL_SPACING_UNIT);
                translateX = "".concat(paddingBetweenContainerAndVideoLeft).concat(CAROUSEL_SPACING_UNIT);
            }
        }
        return {
            display: percent < 0 ? 'none' : 'block',
            padding: CAROUSEL_ITEM_SPACING_DEFAULT,
            paddingInline: 0,
            width: width + CAROUSEL_ITEM_SPACING_DEFAULT * 2,
            pointerEvents: 'none',
            borderRadius: 4,
            textAlign: 'center',
            position: 'absolute',
            bottom: bottom,
            left: left,
            right: right,
            background: 'transparent',
            zIndex: 100000000,
            transform: "translateX(".concat(translateX, ")"),
        };
    };
    Object.defineProperty(StylingLogic.prototype, "carouselVideoProgressScreenshotViewerTextContainerStyle", {
        get: function () {
            var width = this.optionsLogic.videoProgressBarScreenshotViewer.width;
            return {
                color: this.optionsLogic.videoProgressBarScreenshotViewer.textColor,
                position: 'absolute',
                width: '10000px',
                transform: "translateX(calc(-".concat(4988 - width / 2).concat(CAROUSEL_SPACING_UNIT, ")"),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselVideoProgressScreenshotViewerTextStyle = function (percent, videoRef, screenShotTextElement, screenShotCanvasElement, textTranslateOffsetRef, textTranslationAmountRef) {
        var _a;
        var screenShotCanvasRect = screenShotCanvasElement === null || screenShotCanvasElement === void 0 ? void 0 : screenShotCanvasElement.getBoundingClientRect();
        var screenShotTextContainerRect = screenShotTextElement === null || screenShotTextElement === void 0 ? void 0 : screenShotTextElement.getBoundingClientRect();
        if (screenShotCanvasRect && screenShotTextContainerRect) {
            var isTextOusdieCanvasBound = screenShotCanvasRect.right < screenShotTextContainerRect.right || screenShotCanvasRect.left > screenShotTextContainerRect.left;
            if (isTextOusdieCanvasBound) {
                var isTextTranslateOffsetRefDone = Object.keys((textTranslateOffsetRef === null || textTranslateOffsetRef === void 0 ? void 0 : textTranslateOffsetRef.current) || {}).length > 0;
                var videoRect = (_a = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                //setting textTranslateOffsetRef
                if (!isTextTranslateOffsetRefDone &&
                    videoRect &&
                    textTranslateOffsetRef.current) {
                    var leftOffset = 0;
                    if (screenShotCanvasRect.left > screenShotTextContainerRect.left) {
                        leftOffset = Math.abs(screenShotCanvasRect.left - screenShotTextContainerRect.left);
                    }
                    var rightOffset = 0;
                    if (screenShotCanvasRect.right < screenShotTextContainerRect.right) {
                        rightOffset = Math.abs(screenShotCanvasRect.right - screenShotTextContainerRect.right);
                    }
                    var minCursorLeftValue = (videoRect === null || videoRect === void 0 ? void 0 : videoRect.left) + (screenShotCanvasRect.width / 2) + leftOffset;
                    var maxCursorLeftValue = videoRect.right - (screenShotCanvasRect.width / 2) - rightOffset;
                    textTranslateOffsetRef.current = {
                        left: Math.abs(screenShotCanvasRect.left - screenShotTextContainerRect.left),
                        maxCursorLeftValue: maxCursorLeftValue,
                        minCursorLeftValue: minCursorLeftValue,
                        right: Math.abs(screenShotCanvasRect.right - screenShotTextContainerRect.right),
                    };
                }
                //tracking cursor against textTranslateOffsetRef and setting textTranslationAmountRef
                if (isTextTranslateOffsetRefDone && videoRect) {
                    var cursorLeftPosition = videoRect.left + videoRect.width * percent;
                    if (cursorLeftPosition >= textTranslateOffsetRef.current.maxCursorLeftValue) {
                        textTranslationAmountRef.current = -textTranslateOffsetRef.current.right;
                    }
                    else if (cursorLeftPosition <= textTranslateOffsetRef.current.minCursorLeftValue) {
                        textTranslationAmountRef.current = textTranslateOffsetRef.current.left;
                    }
                    else if (cursorLeftPosition > textTranslateOffsetRef.current.minCursorLeftValue &&
                        cursorLeftPosition < textTranslateOffsetRef.current.maxCursorLeftValue) {
                        textTranslationAmountRef.current = TEXT_TRANSLATION_AMOUNT_REF_INITIAL;
                    }
                    // console.log({ cursorLeftPosition, minCursorLeftValue: textTranslateOffsetRef.current.minCursorLeftValue, maxCursorLeftValue: textTranslateOffsetRef.current.maxCursorLeftValue });
                }
            }
        }
        return {
            transform: !!textTranslationAmountRef.current ? "translateX(".concat(textTranslationAmountRef.current).concat(CAROUSEL_SPACING_UNIT, ")") : 'none',
        };
    };
    Object.defineProperty(StylingLogic.prototype, "carouselVideoProgressBackgroundCommon", {
        get: function () {
            return {
                height: this.optionsLogic.videoProgressBarHeight,
                background: this.optionsLogic.videoProgressBarBackgroundColor,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoProgressPositioningStyle", {
        get: function () {
            var isToolbarInVideo = this.optionsLogic.isToolbarInVideo;
            return {
                position: 'absolute',
                transform: isToolbarInVideo ? 'translate(0, -50%)' : undefined,
                left: 0,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoTimeTextDividierStyle", {
        get: function () {
            return {
                paddingInline: CAROUSEL_ITEM_SPACING_DEFAULT / 2,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "carouselVideoTimeTextStyle", {
        get: function () {
            var selectStyle = {
                userSelect: 'none',
            };
            return !this.optionsLogic.isDefaultItemDisplayLocation && !this.isFullscreenMode ? __assign({ flexGrow: 0 }, selectStyle) : __assign({}, selectStyle);
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselVideoTimeTextBlockStyle = function (timeString) {
        var sectionCountToWidthMapping = {
            "1": 42,
            "2": 64,
            "3": 86,
        };
        var sectionCount = (timeString === null || timeString === void 0 ? void 0 : timeString.split(TOOLBAR_TIME_STRING_SECTION_DIVIDER).length) - 1 || 1;
        return {
            display: 'inline-block',
            width: sectionCountToWidthMapping[sectionCount.toString()], //adjusting this based on length of timeString to fix the jumpiness during playback
        };
    };
    Object.defineProperty(StylingLogic.prototype, "isCurrentItemSelected", {
        get: function () {
            return !this.optionsLogic.isDefaultItemDisplayLocation && !!this.isCurrentItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "itemViewerContainerHorizontalPadding", {
        get: function () {
            var padding = this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.itemViewer) + this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.itemViewer);
            return padding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "fontFamilyItemViewerStyle", {
        get: function () {
            return {
                fontFamily: this.optionsLogic.itemViewerFontFamily,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "fontFamilyNavigationStyle", {
        get: function () {
            return {
                fontFamily: this.optionsLogic.navigationFontFamily,
            };
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getItemViewerHorizontalSpacing = function (fullscreenValue) {
        if (fullscreenValue === void 0) { fullscreenValue = CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT; }
        return {
            left: this.isFullscreenMode ? fullscreenValue : this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.itemViewer, CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT),
            right: this.isFullscreenMode ? fullscreenValue : this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.itemViewer, CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT),
        };
    };
    StylingLogic.prototype.getMaxLineCountStyle = function (maxLineCount) {
        return {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: maxLineCount,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        };
    };
    Object.defineProperty(StylingLogic.prototype, "navigationContainerHorizontalPadding", {
        get: function () {
            var navigationPadding = this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.navigation) + this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.navigation);
            return navigationPadding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "navigationStyle", {
        get: function () {
            var common = {
                paddingLeft: "".concat(this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.navigation)).concat(CAROUSEL_SPACING_UNIT),
                paddingRight: "".concat(this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.navigation)).concat(CAROUSEL_SPACING_UNIT),
            };
            return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign({ paddingTop: CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT, paddingBottom: this.optionsLogic.isItemDisplayLocationBelow ? CAROUSEL_ITEM_SPACING_DEFAULT * 2 : 0 }, common) : __assign(__assign({}, common), { paddingTop: CAROUSEL_ITEM_SPACING_DEFAULT });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "thumbnailOverlayBackgroundStyle", {
        get: function () {
            var _a, _b, _c, _d;
            var isOverlayHidden = this.optionsLogic.thumbnailOverlayIsHidden;
            var isOverlayDisabled = this.optionsLogic.thumbnailOverlayIsDisabled;
            var _e = this.optionsLogic.thumbnailOverlayBackgroundGradient, angle = _e.angle, startColor = _e.startColor, startOpacity = _e.startOpacity, endColor = _e.endColor, endOpacity = _e.endOpacity;
            var _f = this.optionsLogic.thumbnailOverlayBackgroundSolid, opacity = _f.opacity, color = _f.color;
            var paddingHorizontal = this.optionsLogic.thumbnailSize * 0.06666667;
            var paddingVertical = paddingHorizontal / 2;
            var backgroundSolidStyle = {
                background: convertHexToRgba(color, opacity),
            };
            var disabledStyle = isOverlayDisabled ? {
                display: 'none'
            } : {};
            var backgroundGradientStyle = ((_d = (_c = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.descriptionOverlay) === null || _c === void 0 ? void 0 : _c.background) === null || _d === void 0 ? void 0 : _d.gradient) ? {
                background: "linear-gradient(".concat(angle, "deg, ").concat(convertHexToRgba(startColor, startOpacity), " 0%, ").concat(convertHexToRgba(endColor, endOpacity), " 100%)"),
            } : {};
            var bottomStyle = isOverlayHidden ? {
                bottom: '-100%',
            } : {};
            var paddingStyle = {
                padding: "".concat(paddingVertical).concat(CAROUSEL_SPACING_UNIT, " ").concat(paddingHorizontal).concat(CAROUSEL_SPACING_UNIT)
            };
            var thumbnailBackgroundStyle = __assign(__assign(__assign(__assign(__assign(__assign({}, paddingStyle), bottomStyle), backgroundSolidStyle), backgroundGradientStyle), this.carouselItemCursorStyle), disabledStyle);
            return thumbnailBackgroundStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "thumbnailOverlayTextStyle", {
        get: function () {
            var _a = this.optionsLogic.thumbnailOverlayText, fontSize = _a.fontSize, maxLineCount = _a.maxLineCount, color = _a.color;
            return __assign(__assign({ fontSize: fontSize, color: color }, this.getMaxLineCountStyle(maxLineCount)), this.carouselItemCursorStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarHorizontalSpacing", {
        get: function () {
            var left = this.optionsLogic.getPaddingAmount(SpacingDirection.left, CarouselSection.toolbar, CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT);
            var right = this.optionsLogic.getPaddingAmount(SpacingDirection.right, CarouselSection.toolbar, CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT);
            return {
                left: left,
                right: right
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarStyle", {
        get: function () {
            var isItemVideo = getIsVideo(this.currentItem);
            var _a = this.getItemViewerHorizontalSpacing(), leftSpacing = _a.left, rightSpacing = _a.right;
            var paddingHorizontalStyle = {
                paddingLeft: this.optionsLogic.isToolbarInVideo && !this.isFullscreenMode ? 0 : leftSpacing,
                paddingRight: this.optionsLogic.isToolbarInVideo && !this.isFullscreenMode ? 0 : rightSpacing,
                marginLeft: !this.optionsLogic.isToolbarInVideo || this.isFullscreenMode ? 0 : leftSpacing,
                marginRight: (!this.optionsLogic.isToolbarInVideo || this.isFullscreenMode ? 0 : rightSpacing) - TOOLBAR_MARGIN_RIGHT_OFFSET,
            };
            var nonDefaultItemDisplayStyle = __assign(__assign(__assign({}, this.getToolbarBackgroundColorStyle()), paddingHorizontalStyle), { position: this.optionsLogic.isToolbarInVideo || this.isFullscreenMode ? "absolute" : "relative", width: this.optionsLogic.isToolbarInVideo ? undefined : '100%', paddingTop: isItemVideo ? 0 : CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT, paddingBottom: this.toolbarPaddingBottom, top: this.optionsLogic.isToolbarInVideo ? (this.isFullscreenMode ? '75%' : '0%') : undefined, justifyContent: 'flex-end', pointerEvents: 'none' });
            return __assign(__assign({}, nonDefaultItemDisplayStyle), this.fontFamilyItemViewerStyle);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarInnerContainerStyle", {
        get: function () {
            var isEmbedded = this.optionsLogic.isToolbarInVideo;
            return {
                paddingLeft: isEmbedded && !this.isFullscreenMode ? CAROUSEL_ITEM_SPACING_DEFAULT : undefined,
                paddingRight: isEmbedded && !this.isFullscreenMode ? CAROUSEL_ITEM_SPACING_DEFAULT : undefined,
                marginTop: this.toolbarInnerContainerMarginTop,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarInnerContainerMarginTop", {
        get: function () {
            var isVideo = getIsVideo(this.currentItem);
            var isEmbedded = this.optionsLogic.isToolbarInVideo;
            var progressBarHitSlop = this.optionsLogic.videoProgressBarHitSlop;
            return isVideo && isEmbedded ? Math.max(CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT - progressBarHitSlop.bottom, 0) : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarOuterContainerStyle", {
        get: function () {
            return {
                position: 'relative',
                pointerEvents: "all",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flexEnd",
                alignItems: "center",
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StylingLogic.prototype, "toolbarPaddingBottom", {
        get: function () {
            return this.optionsLogic.isItemDisplayLocationBelow ? CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT : CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT - (this.optionsLogic.isToolbarInVideo ? 0 : CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT);
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    //#region Public Methods
    //todo: this is currently setup with the assumption that givenButtonSize comes from toolbar.buttonSize
    //need to generalize for other cases (think individual button options)
    //this is used on the button container for each button and the dots
    StylingLogic.prototype.getCarouselElementSizeStlye = function (buttonName, defaultSize) {
        if (defaultSize === void 0) { defaultSize = 0; }
        var valueToUse = this.optionsLogic.getButtonSize(buttonName, defaultSize);
        return {
            width: valueToUse,
            height: valueToUse,
        };
    };
    /**
    *Use this to get the size for a button.
    *Custom icon buttons should set {@link GetToolbarButtonSizeStlye.subElementName subElementName} to `null`.
    *See the usage of `CarouselItemViewerCustomButton` in {@link CarouselItemViewerCloseButton} for an example.
    **/
    StylingLogic.prototype.getCarouselElementChildSizeStlye = function (_a) {
        var buttonName = _a.buttonName, subElementName = _a.subElementName, style = _a.style;
        var buttonSizeStyle = this.getCarouselElementSizeStlye(buttonName, parseInt(style === null || style === void 0 ? void 0 : style.width, 10) || 0);
        //If no subElementName is used, then it's a custom icon and we just want the buttonSizeStyle
        if (subElementName === null)
            return buttonSizeStyle;
        var parsedWidth = parseInt(buttonSizeStyle.width, 10);
        var maxHeightFactor = .8333333;
        var arrowButtonHeight = Math.hypot(parsedWidth, parsedWidth / 2) / 3;
        var commonArrowButtonStyle = {
            width: parsedWidth / 8,
            height: arrowButtonHeight,
        };
        var arrowButtonTranslationAmountOne = arrowButtonHeight / Math.sqrt(40); //no idea why 40 works here
        var arrowButtonTranslationAmountTwo = parsedWidth / Math.sqrt(40);
        var arrowButtonTopOneStlye = {
            top: "calc((50% + ".concat(arrowButtonTranslationAmountOne).concat(CAROUSEL_SPACING_UNIT, ") - ").concat(arrowButtonTranslationAmountTwo).concat(CAROUSEL_SPACING_UNIT, ")"),
        };
        var arrowButtonTopTwoStlye = {
            top: "calc((50% - ".concat(arrowButtonTranslationAmountOne).concat(CAROUSEL_SPACING_UNIT, ") + ").concat(arrowButtonTranslationAmountTwo).concat(CAROUSEL_SPACING_UNIT, ")"),
        };
        switch (buttonName) {
            case CarouselElement.arrowLeft:
                switch (subElementName) {
                    case "first":
                        return __assign(__assign({}, commonArrowButtonStyle), arrowButtonTopOneStlye);
                    case "second":
                        return __assign(__assign({}, commonArrowButtonStyle), arrowButtonTopTwoStlye);
                    default:
                        return buttonSizeStyle;
                }
            case CarouselElement.arrowRight:
                switch (subElementName) {
                    case "first":
                        return __assign(__assign({}, commonArrowButtonStyle), arrowButtonTopTwoStlye);
                    case "second":
                        return __assign(__assign({}, commonArrowButtonStyle), arrowButtonTopOneStlye);
                    default:
                        return buttonSizeStyle;
                }
            case CarouselElement.closeButton:
                return {
                    height: parsedWidth,
                    width: parsedWidth / 4,
                };
            case CarouselElement.fullscreenButton:
                return {
                    height: parsedWidth / 8,
                };
            case CarouselElement.playButton:
            case CarouselElement.nextButton:
            case CarouselElement.previousButton:
            case CarouselElement.seekBackButton:
            case CarouselElement.seekForwardButton:
                var isPlayButton = buttonName === CarouselElement.playButton;
                var isNextButton = buttonName === CarouselElement.nextButton;
                var isPreviousButton = buttonName === CarouselElement.previousButton;
                var isSeekButton = buttonName === CarouselElement.seekBackButton || buttonName === CarouselElement.seekForwardButton;
                var triangleSizeFactorDefaultCase = 2.25;
                var triangleSizeFactorPlayCase = 1.5;
                var triangleSizeFactorSeekCase = 3;
                switch (subElementName) {
                    case "triangle":
                        return {
                            borderTop: "".concat(parsedWidth / triangleSizeFactorDefaultCase).concat(CAROUSEL_SPACING_UNIT, " solid transparent"),
                            borderBottom: "".concat(parsedWidth / triangleSizeFactorDefaultCase).concat(CAROUSEL_SPACING_UNIT, " solid transparent"),
                            borderLeft: isNextButton || isPlayButton || isSeekButton ?
                                "".concat(parsedWidth / (isPlayButton ? triangleSizeFactorPlayCase : isSeekButton ? triangleSizeFactorSeekCase : triangleSizeFactorDefaultCase)).concat(CAROUSEL_SPACING_UNIT, " solid ").concat(style === null || style === void 0 ? void 0 : style.borderLeftColor) :
                                undefined,
                            borderRight: isPreviousButton ?
                                "".concat(parsedWidth / triangleSizeFactorDefaultCase).concat(CAROUSEL_SPACING_UNIT, " solid ").concat(style === null || style === void 0 ? void 0 : style.borderRightColor) :
                                undefined,
                        };
                    case "bar":
                        return {
                            width: parsedWidth / 8,
                            height: parsedWidth * maxHeightFactor,
                            transform: isNextButton || isPreviousButton ?
                                "translate(calc(-50% ".concat(isNextButton ? '+' : '-', " ").concat(parsedWidth * maxHeightFactor / 3 * (isPreviousButton ? .85 : 1)).concat(CAROUSEL_SPACING_UNIT, "), -50%) rotate(0)")
                                : undefined,
                        };
                    default:
                        return buttonSizeStyle;
                }
            case CarouselElement.pauseButton:
                var pauseBarHeight = parsedWidth * maxHeightFactor;
                var pauseBarWidth = parsedWidth * .25;
                var isLeftSide = subElementName === 'left';
                return {
                    width: pauseBarWidth,
                    height: pauseBarHeight,
                    transform: isLeftSide ?
                        "translate(calc(-50% - ".concat(pauseBarWidth * maxHeightFactor * maxHeightFactor).concat(CAROUSEL_SPACING_UNIT, "), -50%) rotate(0)") :
                        "translate(calc(-50% + ".concat(pauseBarWidth * maxHeightFactor * (1 / maxHeightFactor)).concat(CAROUSEL_SPACING_UNIT, "), -50%) rotate(0)"),
                };
            default:
                return buttonSizeStyle;
        }
    };
    //This is a function rather than a getter to allow for setting of itemContainer height manually which prevent "jumping" when switching between item types
    StylingLogic.prototype.getCarouselItemContainerStyle = function (height) {
        if (height === void 0) { height = 'auto'; }
        var containerContentJustification = {
            justifyContent: this.optionsLogic.itemContainerContentJustification,
        };
        return !this.optionsLogic.isDefaultItemDisplayLocation ? __assign({ width: "100%", height: this.isFullscreenMode ? '100vh' : this.optionsLogic.isToolbarInVideo ? height : 'auto', position: "relative", backgroundColor: this.optionsLogic.itemViewerBackgroundColor, overflow: "hidden" }, containerContentJustification) : __assign({}, containerContentJustification);
    };
    StylingLogic.prototype.getCarouselItemsInnerContainerStyle = function (interItemSpacing, translationAmount, isLastPage, translationAmountChangeRef) {
        var _a, _b;
        var _c = getNumberOfItemsThatCanFit(this.items.length, (_a = this.carouselContainerRef) === null || _a === void 0 ? void 0 : _a.current, this, this.optionsLogic), numberOfWholeItemsThatCanFit = _c.numberOfWholeItemsThatCanFit, containerWidth = _c.containerWidth, itemSize = _c.itemSize;
        var translationAmountToUse = translationAmount;
        var isValidChange = translationAmountChangeRef.current !== TranslationAmountChange.swipe;
        if (isValidChange && isLastPage && !!translationAmountChangeRef.current) {
            if (translationAmount > 0 && this.lastPageCarouselTranslationAmount === this.LAST_PAGE_CAROUSEL_AMOUNT_INITIAL) {
                this.lastPageCarouselTranslationAmount = translationAmount;
            }
            translationAmountToUse = Math.max(this.lastPageCarouselTranslationAmount, translationAmount);
        }
        var itemPositioning = this.optionsLogic.thumbnailPositioning;
        var numberOfItemsToUse = Math.min(numberOfWholeItemsThatCanFit, (((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) || Number.MAX_SAFE_INTEGER));
        var numberOfSpaces = numberOfItemsToUse - 1;
        var itemSpacing = this.optionsLogic.getThumbnailSpacingBasedOnThumbnailPositioning(interItemSpacing);
        var widthOfInterItemSpacing = numberOfSpaces * itemSpacing;
        var widthOfItems = numberOfItemsToUse * itemSize;
        // console.log({
        //     numberOfItemsToUse,
        //     containerWidth,
        //     givenItemSpacing: this.options?.thumbnail?.itemSpacing,
        //     itemPositioning,
        //     widthOfItems,
        //     widthOfInterItemSpacing, interItemSpacing, numberOfSpaces
        // });
        var positioningStyle = itemPositioning === 'center' ? {
            marginLeft: Math.max((containerWidth - (widthOfItems + widthOfInterItemSpacing)) / 2, 0),
        } : itemPositioning === 'right' ? {
            marginLeft: Math.max((containerWidth - (widthOfItems + widthOfInterItemSpacing)), 0),
        } : {};
        var interItemSpacingStyle = {
            columnGap: itemSpacing,
        };
        var translationStyle = {
            transform: "translateX(".concat(translationAmountToUse < 0 ? '' : '-').concat(Math.abs(translationAmountToUse)).concat(CAROUSEL_SPACING_UNIT, ")"),
        };
        return __assign(__assign(__assign(__assign({}, interItemSpacingStyle), translationStyle), positioningStyle), { marginTop: CAROUSEL_ITEM_HOVER_TRANSLATE_UP_AMOUNT });
    };
    StylingLogic.prototype.getCarouselShortcutIndicatorContainerStlye = function (showButton) {
        var containerStyle = !showButton ? {
            display: 'none',
        } : {};
        return __assign({}, containerStyle);
    };
    Object.defineProperty(StylingLogic.prototype, "carouselShortcutIndicatorTextTop", {
        get: function () {
            var isVideo = getIsVideo(this.currentItem);
            var _a = this.getCarouselVideoProgressHitSlop(); _a.paddingTop; var hitSlopBottom = _a.paddingBottom;
            return this.optionsLogic.isToolbarInVideo ? -CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT * 1.5 - hitSlopBottom + (!isVideo ? CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT : 0) : -hitSlopBottom - (isVideo ? 2 : .5) * CAROUSEL_PROGRESS_BAR_CONTAINER_HEIGHT_DEFAULT;
        },
        enumerable: false,
        configurable: true
    });
    StylingLogic.prototype.getCarouselShortcutIndicatorTextStlye = function (position) {
        var _a = this.optionsLogic.toolbarShortcutIndicator, backgroundColor = _a.backgroundColor, textColor = _a.textColor;
        var topStyle = {
            top: this.carouselShortcutIndicatorTextTop,
        };
        var commonStyle = __assign({ zIndex: 1000000000000 }, topStyle);
        var shortcutStyle = position === 'left' ? __assign(__assign({}, commonStyle), { left: 0, right: 'auto', transform: 'translate(0%, -100%)' }) : position === 'right' ? __assign(__assign({}, commonStyle), { right: 0, left: 'auto', transform: 'translate(0%, -100%)' }) : __assign(__assign({}, commonStyle), { transform: 'translate(-50%, -100%)' });
        var colorStyle = {
            color: textColor,
            backgroundColor: backgroundColor,
        };
        return __assign(__assign({}, shortcutStyle), colorStyle);
    };
    StylingLogic.prototype.getToolbarBackgroundColorStyle = function (shouldUseSolidColor) {
        if (shouldUseSolidColor === void 0) { shouldUseSolidColor = false; }
        var customColor = this.optionsLogic.toolbarBackgroundColor;
        var backgroundToUse = this.optionsLogic.useDefaultVideoControls && getIsVideo(this.currentItem) ? 'transparent' : this.optionsLogic.isToolbarInVideo && !shouldUseSolidColor ? "linear-gradient(0deg, ".concat(customColor, ", transparent)") : customColor;
        return {
            background: backgroundToUse,
        };
    };
    StylingLogic.prototype.getVideoCurrentStateIndicatorForegroundColor = function (buttonName) {
        var foregroundColor = this.optionsLogic.videoCurrentStateIndicatorForegroundColor;
        var buttonColor = this.optionsLogic.getVideoCurrentStateIndicatorButtonColor(buttonName);
        return buttonColor || foregroundColor;
    };
    StylingLogic.getCarouselModalChildStyle = function (index) {
        return {
            paddingTop: index === 0 ? 0 : CAROUSEL_OVERLAY_ITEM_PADDING_TOP,
        };
    };
    StylingLogic.getColorStyle = function (fillColor, propertyName, style) {
        var _a;
        if (style === void 0) { style = {}; }
        return __assign(__assign({}, style), (_a = {}, _a[propertyName] = fillColor, _a));
    };
    //#endregion
    //#region Private Methods
    /*
    *Only accepts three argument versions or border https://developer.mozilla.org/en-US/docs/Web/CSS/border
    *Currently there is no keyword recognition so something like 'thickest double #000' will be considered valid.
    *If the border isn't showing up, check your string to make sure it is valid.
    */
    StylingLogic.prototype.getBorderStringToUse = function (borderStr, defaultValue) {
        var _a, _b, _c;
        if (defaultValue === void 0) { defaultValue = "1".concat(CAROUSEL_SPACING_UNIT, " solid ").concat(this.optionsLogic.theme.colorFour); }
        var borderStrToUse = borderStr === null || borderStr === void 0 ? void 0 : borderStr.toString();
        var isValid = borderStr && ((_c = (_b = (_a = borderStrToUse === null || borderStrToUse === void 0 ? void 0 : borderStrToUse.trim()) === null || _a === void 0 ? void 0 : _a.split(/(\s+|rgb.+\))/)) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return !!item && (item === null || item === void 0 ? void 0 : item.match(/\w+/)); })) === null || _c === void 0 ? void 0 : _c.length) === 3;
        return isValid ? borderStr : defaultValue;
    };
    return StylingLogic;
}());

/*
*Use this for logic related to the Item Viewer toolbar
*/
var ToolbarLogic = /** @class */ (function () {
    function ToolbarLogic(_a) {
        var items = _a.items;
        this.items = items;
    }
    ToolbarLogic.prototype.getShouldDisplayNextAndBackButton = function () {
        var _a;
        return ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > 1;
    };
    ToolbarLogic.prototype.getShouldSkipKeyboardShortcuts = function () {
        var _a;
        return !this.items || ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) === 0;
    };
    return ToolbarLogic;
}());

/*
*Use this if/when adding new actions/buttons to Item Viewer toolbar
*/
var ToolbarActionsLogic = /** @class */ (function () {
    function ToolbarActionsLogic(constructor) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        this._doNothing = function () { return null; };
        this._emptyAction = {
            onActionCompleted: this._doNothing,
            keys: [],
        };
        var options = constructor.options, isFullscreenMode = constructor.isFullscreenMode;
        this._options = options;
        this._isFullscreenMode = isFullscreenMode;
        this._itemViewerShortcuts = ((_a = options === null || options === void 0 ? void 0 : options.shortcuts) === null || _a === void 0 ? void 0 : _a.itemViewer) || {};
        this._closeShortcut = {
            onActionCompleted: (_c = (_b = this._itemViewerShortcuts) === null || _b === void 0 ? void 0 : _b[CarouselElement.closeButton]) === null || _c === void 0 ? void 0 : _c.onActionCompleted,
            keys: ((_e = (_d = this._itemViewerShortcuts) === null || _d === void 0 ? void 0 : _d[CarouselElement.closeButton]) === null || _e === void 0 ? void 0 : _e.keys) || ITEM_VIEWER_CLOSE_SHORTCUTS,
        };
        this._nextItemShortcut = {
            onActionCompleted: (_g = (_f = this._itemViewerShortcuts) === null || _f === void 0 ? void 0 : _f[CarouselElement.nextButton]) === null || _g === void 0 ? void 0 : _g.onActionCompleted,
            keys: ((_j = (_h = this._itemViewerShortcuts) === null || _h === void 0 ? void 0 : _h[CarouselElement.nextButton]) === null || _j === void 0 ? void 0 : _j.keys) || ITEM_VIEWER_NEXT_ITEM_SHORTCUTS,
        };
        this._pauseShortcut = {
            onActionCompleted: (_l = (_k = this._itemViewerShortcuts) === null || _k === void 0 ? void 0 : _k[CarouselElement.pauseButton]) === null || _l === void 0 ? void 0 : _l.onActionCompleted,
            keys: ((_o = (_m = this._itemViewerShortcuts) === null || _m === void 0 ? void 0 : _m[CarouselElement.pauseButton]) === null || _o === void 0 ? void 0 : _o.keys) || ITEM_VIEWER_PLAY_SHORTCUTS,
        };
        this._playShortcut = {
            onActionCompleted: (_q = (_p = this._itemViewerShortcuts) === null || _p === void 0 ? void 0 : _p[CarouselElement.playButton]) === null || _q === void 0 ? void 0 : _q.onActionCompleted,
            keys: ((_s = (_r = this._itemViewerShortcuts) === null || _r === void 0 ? void 0 : _r[CarouselElement.playButton]) === null || _s === void 0 ? void 0 : _s.keys) || ITEM_VIEWER_PLAY_SHORTCUTS,
        };
        this._previousItemShortcut = {
            onActionCompleted: (_u = (_t = this._itemViewerShortcuts) === null || _t === void 0 ? void 0 : _t[CarouselElement.previousButton]) === null || _u === void 0 ? void 0 : _u.onActionCompleted,
            keys: ((_w = (_v = this._itemViewerShortcuts) === null || _v === void 0 ? void 0 : _v[CarouselElement.previousButton]) === null || _w === void 0 ? void 0 : _w.keys) || ITEM_VIEWER_PREVIOUS_ITEM_SHORTCUTS,
        };
        this._seekBackwardsShortcut = {
            onActionCompleted: (_y = (_x = this._itemViewerShortcuts) === null || _x === void 0 ? void 0 : _x[CarouselElement.seekBackButton]) === null || _y === void 0 ? void 0 : _y.onActionCompleted,
            keys: ((_0 = (_z = this._itemViewerShortcuts) === null || _z === void 0 ? void 0 : _z[CarouselElement.seekBackButton]) === null || _0 === void 0 ? void 0 : _0.keys) || ITEM_VIEWER_SEEK_BACKWARDS_SHORTCUTS,
        };
        this._seekForwardsShortcut = {
            onActionCompleted: (_2 = (_1 = this._itemViewerShortcuts) === null || _1 === void 0 ? void 0 : _1[CarouselElement.seekForwardButton]) === null || _2 === void 0 ? void 0 : _2.onActionCompleted,
            keys: ((_4 = (_3 = this._itemViewerShortcuts) === null || _3 === void 0 ? void 0 : _3[CarouselElement.seekForwardButton]) === null || _4 === void 0 ? void 0 : _4.keys) || ITEM_VIEWER_SEEK_FORWARDS_SHORTCUTS,
        };
        this.isPauseSeparate = !!((_5 = this._itemViewerShortcuts[CarouselElement.pauseButton]) === null || _5 === void 0 ? void 0 : _5.keys);
    }
    Object.defineProperty(ToolbarActionsLogic.prototype, "shouldReturnEmptyAction", {
        get: function () {
            return !this._isFullscreenMode;
        },
        enumerable: false,
        configurable: true
    });
    ToolbarActionsLogic.prototype.getAll = function () {
        return {
            keys: this.getAllKeys(),
            onActionCompleted: this.getAllOnActionCompleted(),
        };
    };
    ToolbarActionsLogic.prototype.getAllKeys = function () {
        var _a;
        return _a = {},
            _a[CarouselElement.closeButton] = this._closeShortcut.keys,
            _a[CarouselElement.nextButton] = this._nextItemShortcut.keys,
            _a[CarouselElement.pauseButton] = this._pauseShortcut.keys,
            _a[CarouselElement.playButton] = this._playShortcut.keys,
            _a[CarouselElement.previousButton] = this._previousItemShortcut.keys,
            _a[CarouselElement.seekBackButton] = this._seekBackwardsShortcut.keys,
            _a[CarouselElement.seekForwardButton] = this._seekForwardsShortcut.keys,
            _a;
    };
    ToolbarActionsLogic.prototype.getAllOnActionCompleted = function () {
        var _a;
        return _a = {},
            _a[CarouselElement.closeButton] = this._closeShortcut.onActionCompleted,
            _a[CarouselElement.nextButton] = this._nextItemShortcut.onActionCompleted,
            _a[CarouselElement.pauseButton] = this._pauseShortcut.onActionCompleted,
            _a[CarouselElement.playButton] = this._playShortcut.onActionCompleted,
            _a[CarouselElement.previousButton] = this._previousItemShortcut.onActionCompleted,
            _a[CarouselElement.seekBackButton] = this._seekBackwardsShortcut.onActionCompleted,
            _a[CarouselElement.seekForwardButton] = this._seekForwardsShortcut.onActionCompleted,
            _a;
    };
    ToolbarActionsLogic.prototype.getClose = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        var keysToUse = __spreadArray([], this._closeShortcut.keys, true);
        if (!keysToUse.includes(ValidKey.escape)) {
            keysToUse.push(ValidKey.escape);
        }
        return {
            onActionCompleted: this._closeShortcut.onActionCompleted || this._doNothing,
            keys: keysToUse,
        };
    };
    ToolbarActionsLogic.prototype.getNextItem = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._nextItemShortcut.onActionCompleted || this._doNothing,
            keys: this._nextItemShortcut.keys,
        };
    };
    ToolbarActionsLogic.prototype.getPause = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._pauseShortcut.onActionCompleted || this._doNothing,
            keys: this._pauseShortcut.keys,
        };
    };
    ToolbarActionsLogic.prototype.getPlay = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._playShortcut.onActionCompleted || this._doNothing,
            keys: this._playShortcut.keys,
        };
    };
    ToolbarActionsLogic.prototype.getPreviousItem = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._previousItemShortcut.onActionCompleted || this._doNothing,
            keys: this._previousItemShortcut.keys,
        };
    };
    ToolbarActionsLogic.prototype.getSeekForwards = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._seekForwardsShortcut.onActionCompleted || this._doNothing,
            keys: this._seekForwardsShortcut.keys,
        };
    };
    ToolbarActionsLogic.prototype.getSeekBackwards = function () {
        if (this.shouldReturnEmptyAction)
            return this._emptyAction;
        return {
            onActionCompleted: this._seekBackwardsShortcut.onActionCompleted || this._doNothing,
            keys: this._seekBackwardsShortcut.keys,
        };
    };
    return ToolbarActionsLogic;
}());

/**
*Handles creation of all business logic that is not static.
**/
var useBusinessLogic = function (input) {
    var _a = input || {}, isCurrentItem = _a.isCurrentItem, itemRef = _a.itemRef, itemViewerToolbarRef = _a.itemViewerToolbarRef, loadingSpinnerOptions = _a.loadingSpinnerOptions, modalRef = _a.modalRef, optionsInput = _a.options;
    var _b = useCarouselContext(), carouselContainerRef = _b.carouselContainerRef, currentItem = _b.currentItem, 
    // currentItemIndex,
    // elementStylings,
    isFullscreenMode = _b.isFullscreenMode, items = _b.items, itemViewerRef = _b.itemViewerRef, numberOfPages = _b.numberOfPages, optionsGlobal = _b.options;
    var options = optionsInput || optionsGlobal;
    var _c = useState(getOptionsLogic({
        carouselContainerRef: carouselContainerRef,
        currentItem: currentItem,
        isFullscreenMode: isFullscreenMode,
        items: items,
        numberOfPages: numberOfPages,
        options: options,
    })), optionsLogic = _c[0], setOptionsLogic = _c[1];
    var _d = useState(getToolbarLogic({
        items: items,
    })), toolbarLogic = _d[0], setToolbarLogic = _d[1];
    var _e = useState(getToolbarActionsLogic({
        options: options,
        isFullscreenMode: isFullscreenMode,
    })), toolbarActionsLogic = _e[0], setToolbarActionsLogic = _e[1];
    var _f = useState(getStylingLogic({
        carouselContainerRef: carouselContainerRef,
        currentItem: currentItem,
        isCurrentItem: isCurrentItem,
        isFullscreenMode: isFullscreenMode,
        itemRef: itemRef,
        items: items,
        itemViewerRef: itemViewerRef,
        itemViewerToolbarRef: itemViewerToolbarRef,
        loadingSpinnerOptions: loadingSpinnerOptions,
        modalRef: modalRef,
        numberOfPages: numberOfPages,
        options: options,
        optionsLogic: optionsLogic,
    })), stylingLogic = _f[0], setStylingLogic = _f[1];
    useEffect(function () {
        var newOptionsLogic = getOptionsLogic({
            carouselContainerRef: carouselContainerRef,
            currentItem: currentItem,
            isFullscreenMode: isFullscreenMode,
            items: items,
            numberOfPages: numberOfPages,
            options: options,
        });
        var newStylingLogic = getStylingLogic({
            carouselContainerRef: carouselContainerRef,
            currentItem: currentItem,
            isCurrentItem: isCurrentItem,
            isFullscreenMode: isFullscreenMode,
            items: items,
            itemViewerRef: itemViewerRef,
            itemViewerToolbarRef: itemViewerToolbarRef,
            loadingSpinnerOptions: loadingSpinnerOptions,
            numberOfPages: numberOfPages,
            options: options,
            optionsLogic: newOptionsLogic,
            modalRef: modalRef,
            itemRef: itemRef
        });
        setOptionsLogic(newOptionsLogic);
        setStylingLogic(newStylingLogic);
    }, [
        carouselContainerRef,
        currentItem,
        isCurrentItem,
        isFullscreenMode,
        itemRef,
        items,
        itemViewerRef,
        itemViewerToolbarRef,
        loadingSpinnerOptions,
        modalRef,
        numberOfPages,
        options,
    ]);
    useEffect(function () {
        var newToolbarActionsLogic = getToolbarActionsLogic({
            options: options,
            isFullscreenMode: isFullscreenMode
        });
        setToolbarActionsLogic(newToolbarActionsLogic);
    }, [isFullscreenMode, options]);
    useEffect(function () {
        var newToolbarLogic = getToolbarLogic({ items: items });
        setToolbarLogic(newToolbarLogic);
    }, [items]);
    return {
        optionsLogic: optionsLogic,
        stylingLogic: stylingLogic,
        toolbarActionsLogic: toolbarActionsLogic,
        toolbarLogic: toolbarLogic,
    };
};
function getOptionsLogic(constructor) {
    return new OptionsLogic(constructor);
}
function getStylingLogic(constructor) {
    return new StylingLogic(constructor);
}
function getToolbarActionsLogic(constructor) {
    return new ToolbarActionsLogic(constructor);
}
function getToolbarLogic(constructor) {
    return new ToolbarLogic(constructor);
}

var CarouselItemViewer = forwardRef(function (props, ref) {
    //#region Init
    var _a = useCarouselContext(), currentItem = _a.currentItem, isFullscreenMode = _a.isFullscreenMode;
    var stylingLogic = useBusinessLogic().stylingLogic;
    var isVisible = useMemo(function () { var _a; return ((_a = Object.keys(currentItem || {})) === null || _a === void 0 ? void 0 : _a.length) > 0 && isFullscreenMode; }, [currentItem, isFullscreenMode]);
    var innerRef = useRef(null);
    useImperativeHandle(ref, function () { return innerRef.current; });
    //#endregion
    //#region JSX
    var visibilityStyle = isVisible ? getClassname({ modifiedName: 'visible' }) : getClassname({ modifiedName: 'hidden' });
    var containerClassname = "".concat(CLASSNAME__ITEM_VIEWER, " ").concat(visibilityStyle);
    return (React.createElement("div", { ref: innerRef, className: containerClassname, style: stylingLogic.carouselItemViewerStyle },
        React.createElement(CarouselItemToRender, null)));
    //#endregion
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root {\r\n  --thumbnail-carousel-modal-custom-button-top: calc(20px * .5);\r\n  --thumbnail-carousel-modal-custom-button-right: calc(20px * .5);\r\n  --thumbnail-carousel-modal-scrollbar-background-color: #1d0e0b;\r\n  --thumbnail-carousel-modal-scrollbar-foreground-color: #fff9f5;\r\n  --thumbnail-carousel-modal-opacity-minimized: 0.875;\r\n}\r\n\r\n.thumbnail-carousel--hidden, .thumbnail-carousel__item-container--no-toolbar .thumbnail-carousel__item-viewer-toolbar, .thumbnail-carousel__item-container--no-toolbar .thumbnail-carousel__video-screenshot-viewer {\r\n  pointer-events: none !important;\r\n  opacity: 0 !important;\r\n}\r\n\r\n.thumbnail-carousel--visible {\r\n  pointer-events: all !important;\r\n  opacity: 1 !important;\r\n}\r\n\r\n.thumbnail-carousel__loading-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 20px;\r\n  column-gap: 0px;\r\n  color: #fff9f5;\r\n  text-align: center;\r\n}\r\n.thumbnail-carousel__loading-roller {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.thumbnail-carousel__loading-roller-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 20px;\r\n  column-gap: 0px;\r\n  padding: 20px;\r\n}\r\n.thumbnail-carousel__loading-roller div {\r\n  animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  transform-origin: calc(80px / 2) calc(80px / 2);\r\n}\r\n.thumbnail-carousel__loading-roller div:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: #fff9f5;\r\n  margin: -4px 0 0 -4px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(1) {\r\n  animation-delay: -0.036s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(1)::after {\r\n  top: 63px;\r\n  left: 63px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(2) {\r\n  animation-delay: -0.072s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(2)::after {\r\n  top: 68px;\r\n  left: 56px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(3) {\r\n  animation-delay: -0.108s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(3)::after {\r\n  top: 71px;\r\n  left: 48px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(4) {\r\n  animation-delay: -0.144s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(4)::after {\r\n  top: 72px;\r\n  left: 40px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(5) {\r\n  animation-delay: -0.18s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(5)::after {\r\n  top: 71px;\r\n  left: 32px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(6) {\r\n  animation-delay: -0.216s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(6)::after {\r\n  top: 68px;\r\n  left: 24px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(7) {\r\n  animation-delay: -0.252s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(7)::after {\r\n  top: 63px;\r\n  left: 17px;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(8) {\r\n  animation-delay: -0.288s;\r\n}\r\n.thumbnail-carousel__loading-roller div:nth-child(8)::after {\r\n  top: 56px;\r\n  left: 12px;\r\n}\r\n@keyframes roller {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.thumbnail-carousel__loading-ring {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 0px;\r\n  column-gap: 0px;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n.thumbnail-carousel__loading-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 72px;\r\n  height: 72px;\r\n  margin: 8px;\r\n  border: 8px solid #fff9f5;\r\n  border-radius: 50%;\r\n  animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #fff9f5 transparent transparent transparent;\r\n}\r\n.thumbnail-carousel__loading-ring div:nth-child(1) {\r\n  animation-delay: -0.45s;\r\n}\r\n.thumbnail-carousel__loading-ring div:nth-child(2) {\r\n  animation-delay: -0.3s;\r\n}\r\n.thumbnail-carousel__loading-ring div:nth-child(3) {\r\n  animation-delay: -0.15s;\r\n}\r\n@keyframes ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.thumbnail-carousel__loading-circle {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.thumbnail-carousel__loading-circle div {\r\n  position: absolute;\r\n  width: 6px;\r\n  height: 6px;\r\n  background: #fff9f5;\r\n  border-radius: 50%;\r\n  animation: circle 1.2s linear infinite;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(1) {\r\n  animation-delay: 0s;\r\n  top: 37px;\r\n  left: 66px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(2) {\r\n  animation-delay: -0.1s;\r\n  top: 22px;\r\n  left: 62px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(3) {\r\n  animation-delay: -0.2s;\r\n  top: 11px;\r\n  left: 52px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(4) {\r\n  animation-delay: -0.3s;\r\n  top: 7px;\r\n  left: 37px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(5) {\r\n  animation-delay: -0.4s;\r\n  top: 11px;\r\n  left: 22px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(6) {\r\n  animation-delay: -0.5s;\r\n  top: 22px;\r\n  left: 11px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(7) {\r\n  animation-delay: -0.6s;\r\n  top: 37px;\r\n  left: 7px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(8) {\r\n  animation-delay: -0.7s;\r\n  top: 52px;\r\n  left: 11px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(9) {\r\n  animation-delay: -0.8s;\r\n  top: 62px;\r\n  left: 22px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(10) {\r\n  animation-delay: -0.9s;\r\n  top: 66px;\r\n  left: 37px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(11) {\r\n  animation-delay: -1s;\r\n  top: 62px;\r\n  left: 52px;\r\n}\r\n.thumbnail-carousel__loading-circle div:nth-child(12) {\r\n  animation-delay: -1.1s;\r\n  top: 52px;\r\n  left: 62px;\r\n}\r\n@keyframes circle {\r\n  0%, 20%, 80%, 100% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(1.5);\r\n  }\r\n}\r\n.thumbnail-carousel__loading-grid {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.thumbnail-carousel__loading-grid div {\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background: #fff9f5;\r\n  animation: grid-animation 1.2s linear infinite;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(1) {\r\n  top: 8px;\r\n  left: 8px;\r\n  animation-delay: 0s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(2) {\r\n  top: 8px;\r\n  left: 32px;\r\n  animation-delay: -0.4s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(3) {\r\n  top: 8px;\r\n  left: 56px;\r\n  animation-delay: -0.8s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(4) {\r\n  top: 32px;\r\n  left: 8px;\r\n  animation-delay: -0.4s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(5) {\r\n  top: 32px;\r\n  left: 32px;\r\n  animation-delay: -0.8s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(6) {\r\n  top: 32px;\r\n  left: 56px;\r\n  animation-delay: -1.2s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(7) {\r\n  top: 56px;\r\n  left: 8px;\r\n  animation-delay: -0.8s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(8) {\r\n  top: 56px;\r\n  left: 32px;\r\n  animation-delay: -1.2s;\r\n}\r\n.thumbnail-carousel__loading-grid div:nth-child(9) {\r\n  top: 56px;\r\n  left: 56px;\r\n  animation-delay: -1.6s;\r\n}\r\n@keyframes grid-animation {\r\n  0%, 100% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n.thumbnail-carousel-button {\r\n  overflow: hidden;\r\n  height: 24px;\r\n  width: 24px;\r\n  border: none;\r\n  position: relative;\r\n  background-color: transparent;\r\n  display: flex;\r\n  opacity: 0.875 !important;\r\n}\r\n.thumbnail-carousel-button:hover {\r\n  opacity: 1 !important;\r\n  cursor: pointer !important;\r\n}\r\n.thumbnail-carousel-button * {\r\n  background-color: #fff9f5;\r\n  fill: #fff9f5;\r\n}\r\n.thumbnail-carousel-button--arrow-previous-one, .thumbnail-carousel-button--arrow-previous-two, .thumbnail-carousel-button--arrow-next-one, .thumbnail-carousel-button--arrow-next-two {\r\n  background-color: #1d0e0b;\r\n}\r\n.thumbnail-carousel-button--arrow-previous-one {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(45deg);\r\n}\r\n.thumbnail-carousel-button--arrow-previous-two {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(-45deg);\r\n}\r\n.thumbnail-carousel-button--arrow-next-one {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(45deg);\r\n}\r\n.thumbnail-carousel-button--arrow-next-two {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(-45deg);\r\n}\r\n.thumbnail-carousel-button--close-left, .thumbnail-carousel-button--close-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(var(--rotation));\r\n}\r\n.thumbnail-carousel-button--close-left-inverse, .thumbnail-carousel-button--close-right-inverse {\r\n  background-color: #1d0e0b;\r\n  margin-top: 0;\r\n}\r\n.thumbnail-carousel-button--close-left {\r\n  --rotation: -45deg;\r\n}\r\n.thumbnail-carousel-button--close-right {\r\n  --rotation: 45deg;\r\n}\r\n.thumbnail-carousel-button--next-left {\r\n  border-left: calc(24px / 2.5) solid #fff9f5;\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 2.25) solid transparent;\r\n  border-bottom: calc(24px / 2.25) solid transparent;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-66%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--next-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--inverse {\r\n  transform: translateX(4.8px);\r\n  margin-top: 0;\r\n}\r\n.thumbnail-carousel-button--fullscreen {\r\n  --size: 3px;\r\n  --length: calc(50% - (var(--size) * 1.33));\r\n  --edgeOffset: 2px;\r\n}\r\n.thumbnail-carousel-button--fullscreen-top {\r\n  width: var(--length);\r\n}\r\n.thumbnail-carousel-button--fullscreen-top-left-horizontal {\r\n  position: absolute;\r\n  top: var(--edgeOffset);\r\n  left: var(--edgeOffset);\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(0, 0) rotate(0);\r\n}\r\n.thumbnail-carousel-button--fullscreen-top-right-horizontal {\r\n  position: absolute;\r\n  top: var(--edgeOffset);\r\n  left: auto;\r\n  right: var(--edgeOffset);\r\n  bottom: auto;\r\n  transform: translate(0, 0) rotate(0);\r\n}\r\n.thumbnail-carousel-button--fullscreen-top-left-vertical {\r\n  position: absolute;\r\n  top: var(--edgeOffset);\r\n  left: var(--edgeOffset);\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(0, 0) rotate(0);\r\n  transform-origin: top left;\r\n  transform: rotate(90deg) translate(0%, -100%);\r\n}\r\n.thumbnail-carousel-button--fullscreen-top-right-vertical {\r\n  position: absolute;\r\n  top: var(--edgeOffset);\r\n  left: auto;\r\n  right: var(--edgeOffset);\r\n  bottom: auto;\r\n  transform: translate(0, 0) rotate(0);\r\n  transform-origin: top right;\r\n  transform: rotate(90deg) translate(100%, 0%);\r\n}\r\n.thumbnail-carousel-button--fullscreen-bottom {\r\n  width: var(--length);\r\n}\r\n.thumbnail-carousel-button--fullscreen-bottom-left-horizontal {\r\n  position: absolute;\r\n  top: \"auto\";\r\n  left: var(--edgeOffset);\r\n  right: auto;\r\n  bottom: var(--edgeOffset);\r\n  transform: translate(0, 0) rotate(0);\r\n}\r\n.thumbnail-carousel-button--fullscreen-bottom-right-horizontal {\r\n  position: absolute;\r\n  top: \"auto\";\r\n  left: \"auto\";\r\n  right: var(--edgeOffset);\r\n  bottom: var(--edgeOffset);\r\n  transform: translate(0, 0) rotate(0);\r\n}\r\n.thumbnail-carousel-button--fullscreen-bottom-left-vertical {\r\n  position: absolute;\r\n  top: \"auto\";\r\n  left: var(--edgeOffset);\r\n  right: auto;\r\n  bottom: var(--edgeOffset);\r\n  transform: translate(0, 0) rotate(0);\r\n  transform-origin: bottom left;\r\n  transform: rotate(-90deg) translate(0%, 100%);\r\n}\r\n.thumbnail-carousel-button--fullscreen-bottom-right-vertical {\r\n  position: absolute;\r\n  top: \"auto\";\r\n  left: \"auto\";\r\n  right: var(--edgeOffset);\r\n  bottom: var(--edgeOffset);\r\n  transform: translate(0, 0) rotate(0);\r\n  transform-origin: bottom right;\r\n  transform: rotate(-90deg) translate(100%, 0%);\r\n}\r\n.thumbnail-carousel-button--fullscreen:hover {\r\n  -webkit-animation: fullscreen 0.5s 1 ease normal none;\r\n  -moz-animation: fullscreen 0.5s 1 ease normal none;\r\n  -ms-animation: fullscreen 0.5s 1 ease normal none;\r\n  -o-animation: fullscreen 0.5s 1 ease normal none;\r\n  animation: fullscreen 0.5s 1 ease normal none;\r\n  transition: all 0.75s ease;\r\n  -webkit-transition: all 0.75s ease;\r\n  -moz-transition: all 0.75s ease;\r\n  -o-transition: all 0.75s ease;\r\n}\r\n.thumbnail-carousel-button--pause-left, .thumbnail-carousel-button--pause-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--pause-left {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(calc(-50% - 6px), -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--play-triangle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(33.3%, -50%) rotate(0);\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.thumbnail-carousel-button--previous-left {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--previous-right {\r\n  border-right: calc(24px / 2.5) solid #fff9f5;\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 2.25) solid transparent;\r\n  border-bottom: calc(24px / 2.25) solid transparent;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-25%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--restart-arrow {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n  right: 0;\r\n  top: 0;\r\n  transform: translate(0%, 15%);\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 2.5) solid transparent;\r\n  border-right: calc(24px / 2.5) solid #fff9f5;\r\n  border-bottom: none;\r\n}\r\n.thumbnail-carousel-button--restart-circle-inner, .thumbnail-carousel-button--restart-circle-outer {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--restart-circle-inner {\r\n  height: calc((24px * .85) - 12px);\r\n  width: calc((24px * .85) - 12px);\r\n  background-color: rgba(29, 14, 11, 0);\r\n}\r\n.thumbnail-carousel-button--restart-circle-outer {\r\n  height: calc(24px * .85);\r\n  width: calc(24px * .85);\r\n}\r\n.thumbnail-carousel-button--restart-triangle-cutout {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n  bottom: 0;\r\n  right: 0;\r\n  transform: translate(0, -50%);\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 1) solid transparent;\r\n  border-right: calc(24px / 1) solid rgba(29, 14, 11, 0);\r\n  border-bottom: calc(24px / 1) solid transparent;\r\n}\r\n.thumbnail-carousel-button--seek-back-left, .thumbnail-carousel-button--seek-back-right {\r\n  border-left: calc(24px / 2.5) solid #fff9f5;\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 2.25) solid transparent;\r\n  border-bottom: calc(24px / 2.25) solid transparent;\r\n}\r\n.thumbnail-carousel-button--seek-back-left {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-100%, -50%) rotate(180deg);\r\n}\r\n.thumbnail-carousel-button--seek-back-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(0%, -50%) rotate(180deg);\r\n}\r\n.thumbnail-carousel-button--seek-forward-left, .thumbnail-carousel-button--seek-forward-right {\r\n  border-left: calc(24px / 2.5) solid #fff9f5;\r\n  background-color: transparent;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: calc(24px / 2.25) solid transparent;\r\n  border-bottom: calc(24px / 2.25) solid transparent;\r\n}\r\n.thumbnail-carousel-button--seek-forward-left {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-87.5%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--seek-forward-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(12.5%, -50%) rotate(0);\r\n}\r\n.thumbnail-carousel-button--stop {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(0);\r\n  height: calc(24px * .85);\r\n  width: calc(calc(24px * .85) * .95);\r\n}\r\n.thumbnail-carousel-button--video-state-indicator {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 0px;\r\n  column-gap: 0px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 66px;\r\n  width: 66px;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  z-index: 1000;\r\n  transform-origin: center;\r\n}\r\n.thumbnail-carousel-button--video-state-indicator * {\r\n  cursor: auto !important;\r\n}\r\n.thumbnail-carousel-button--video-state-indicator-is-animating {\r\n  -webkit-animation: video-state-indicator 0.5s 1 linear alternate none;\r\n  -moz-animation: video-state-indicator 0.5s 1 linear alternate none;\r\n  -ms-animation: video-state-indicator 0.5s 1 linear alternate none;\r\n  -o-animation: video-state-indicator 0.5s 1 linear alternate none;\r\n  animation: video-state-indicator 0.5s 1 linear alternate none;\r\n}\r\n\r\n.thumbnail-carousel-button--scale-on-hover:hover {\r\n  transition: transform 0.5s ease;\r\n  transform: scale(1.15);\r\n}\r\n\r\n@keyframes video-state-indicator {\r\n  0% {\r\n    opacity: 0.5;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translate(-50%, -50%) scale(2);\r\n  }\r\n}\r\n@keyframes fullscreen {\r\n  0% {\r\n    scale: 1;\r\n  }\r\n  50% {\r\n    scale: 1.15;\r\n  }\r\n  100% {\r\n    scale: 1;\r\n  }\r\n}\r\n.thumbnail-carousel {\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: text; /* Safari 'none' or 'text' here 'all' has issues*/\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Old versions of Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.thumbnail-carousel__dots {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 0px;\r\n  column-gap: 0px;\r\n}\r\n.thumbnail-carousel__dots > div, .thumbnail-carousel__dots > svg {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 0px;\r\n  column-gap: 0px;\r\n  --opacity: 0.5;\r\n  height: 24px;\r\n  width: 16px;\r\n  background-color: transparent;\r\n}\r\n.thumbnail-carousel__dots > div > div, .thumbnail-carousel__dots > svg > div {\r\n  background-color: rgba(29, 14, 11, var(--opacity));\r\n  border-radius: 100%;\r\n}\r\n.thumbnail-carousel__dots > div use, .thumbnail-carousel__dots > svg use {\r\n  fill: #1d0e0b;\r\n  opacity: var(--opacity);\r\n}\r\n.thumbnail-carousel__dots > div:not(.thumbnail-carousel__dots-current):hover, .thumbnail-carousel__dots > svg:not(.thumbnail-carousel__dots-current):hover {\r\n  cursor: pointer;\r\n}\r\n.thumbnail-carousel__dots > div:not(.thumbnail-carousel__dots-current):hover *, .thumbnail-carousel__dots > svg:not(.thumbnail-carousel__dots-current):hover * {\r\n  --opacity: 0.8;\r\n  opacity: 0.8 !important;\r\n}\r\n.thumbnail-carousel__item {\r\n  margin: 4px 0 0 0;\r\n  position: relative;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  transition: border-radius 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;\r\n}\r\n.thumbnail-carousel__item-container {\r\n  user-select: none;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n@media only screen and (hover: none) {\r\n  .thumbnail-carousel__item-container--no-toolbar .thumbnail-carousel__item-viewer-toolbar, .thumbnail-carousel__item-container--no-toolbar .thumbnail-carousel__video-screenshot-viewer {\r\n    pointer-events: all !important;\r\n    opacity: 1 !important;\r\n  }\r\n}\r\n.thumbnail-carousel__item-container--no-toolbar .thumbnail-carousel__item-viewer-shortcut-indicator {\r\n  pointer-events: none !important;\r\n}\r\n.thumbnail-carousel__item-container img {\r\n  z-index: 1;\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n.thumbnail-carousel__item-thumbnail {\r\n  object-fit: cover;\r\n  object-position: top;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.thumbnail-carousel__item > div {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: auto;\r\n  transition: bottom 0.5s ease;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n.thumbnail-carousel__item:hover {\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 4px 0.4rem 0rem rgba(0, 0, 0, 0.5);\r\n}\r\n.thumbnail-carousel__item:hover > div {\r\n  bottom: 0 !important;\r\n}\r\n.thumbnail-carousel__item img:hover {\r\n  cursor: pointer;\r\n}\r\n.thumbnail-carousel__items {\r\n  display: flex;\r\n  width: 10000000vw;\r\n  transition: transform 0.5s ease;\r\n  backface-visibility: hidden;\r\n}\r\n.thumbnail-carousel__items.grabbing {\r\n  cursor: grabbing !important;\r\n}\r\n.thumbnail-carousel__items.grabbing img {\r\n  cursor: grabbing !important;\r\n}\r\n.thumbnail-carousel__item-viewer {\r\n  display: none;\r\n  background-color: #1d0e0b;\r\n  transition: opacity 0.5s ease;\r\n}\r\n.thumbnail-carousel__item-viewer-button {\r\n  overflow: hidden;\r\n  height: 24px;\r\n  width: 24px;\r\n  border: none;\r\n  position: relative;\r\n  background-color: transparent;\r\n  display: flex;\r\n  opacity: 0.875 !important;\r\n  fill: #fff9f5;\r\n  stroke: #1d0e0b;\r\n  stroke-opacity: 0.15;\r\n  stroke-width: 2px;\r\n  display: flex;\r\n}\r\n.thumbnail-carousel__item-viewer-button:hover {\r\n  opacity: 1 !important;\r\n  cursor: pointer !important;\r\n}\r\n.thumbnail-carousel__item-viewer-button * {\r\n  background-color: #fff9f5;\r\n  fill: #fff9f5;\r\n}\r\n.thumbnail-carousel__item-viewer-button-inverse {\r\n  fill: #1d0e0b;\r\n  stroke: #fff9f5;\r\n}\r\n.thumbnail-carousel__item-viewer-button-inverse * {\r\n  fill: #1d0e0b;\r\n  stroke: #fff9f5;\r\n}\r\n.thumbnail-carousel__item-viewer-shortcut-indicator {\r\n  position: relative;\r\n}\r\n.thumbnail-carousel__item-viewer-shortcut-indicator > div:nth-child(1) {\r\n  z-index: 10000;\r\n  padding: 4px 8px;\r\n  position: absolute;\r\n  left: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar {\r\n  z-index: 1000000;\r\n  transition: transform 0.5s ease, opacity 0.5s ease;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 20px;\r\n  background: #1d0e0b;\r\n  /*this color is displayed if browser can't read the below properties*/\r\n  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, black 100%);\r\n  background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, black 100%);\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, black 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#8a96e6\", endColorstr=\"#8a96e6\", GradientType=1);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: auto;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  column-gap: 0.75vw;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-container > * {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  column-gap: 0.75vw;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview {\r\n  position: absolute;\r\n  bottom: auto;\r\n  left: auto;\r\n  right: 0;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  font-size: 14px;\r\n  color: #fff9f5;\r\n  overflow: hidden;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview-image-container {\r\n  height: calc(100% - 0px);\r\n  position: relative;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview-image-container img {\r\n  position: relative;\r\n  z-index: 1000000;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: left;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview-image-container .thumbnail-carousel__loading-container {\r\n  row-gap: 0;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview-image-description {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-preview-image-description > p {\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n@media only screen and (hover: none) {\r\n  .thumbnail-carousel__item-viewer-toolbar-preview {\r\n    display: none;\r\n  }\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-progress {\r\n  appearance: none;\r\n  border: none;\r\n  z-index: 100;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-progress:not(.grabbing):hover {\r\n  cursor: pointer;\r\n}\r\n.thumbnail-carousel__item-viewer-toolbar-text {\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n.thumbnail-carousel__navigation {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.thumbnail-carousel__video {\r\n  width: 100vw;\r\n  object-fit: contain;\r\n  max-height: 100vh;\r\n}\r\n.thumbnail-carousel__video-screenshot-viewer > div > div {\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 1;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.thumbnail-carousel__modal-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.thumbnail-carousel__modal p {\r\n  padding-right: 20px;\r\n}\r\n.thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button {\r\n  position: absolute;\r\n  bottom: auto;\r\n  left: auto;\r\n  right: var(--thumbnail-carousel-modal-custom-button-right);\r\n  top: var(--thumbnail-carousel-modal-custom-button-top);\r\n}\r\n.thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-left, .thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translate(-50%, -50%) rotate(var(--rotation));\r\n}\r\n.thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-left-inverse, .thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-right-inverse {\r\n  background-color: #1d0e0b;\r\n  margin-top: 0;\r\n}\r\n.thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-left {\r\n  --rotation: -45deg;\r\n}\r\n.thumbnail-carousel__modal-custom .thumbnail-carousel__item-viewer-button--close-right {\r\n  --rotation: 45deg;\r\n}\r\n.thumbnail-carousel__modal::-webkit-scrollbar-track {\r\n  background-color: var(--thumbnail-carousel-modal-scrollbar-background-color);\r\n}\r\n.thumbnail-carousel__modal::-webkit-scrollbar-thumb {\r\n  background-color: var(--thumbnail-carousel-modal-scrollbar-foreground-color);\r\n}\r\n.thumbnail-carousel__modal-minimized {\r\n  opacity: var(--thumbnail-carousel-modal-opacity-minimized) !important;\r\n}\r\n.thumbnail-carousel__modal-minimized:hover {\r\n  opacity: 1 !important;\r\n  cursor: pointer !important;\r\n}\r\n.thumbnail-carousel--d-none {\r\n  display: none;\r\n}\r\nbody.grabbing {\r\n  cursor: grabbing !important;\r\n}\r\n";
styleInject(css_248z);

var CarouselProvider = function (props) {
    var _a;
    var carouselContainerRef = props.carouselContainerRef, children = props.children, hiddenInputRef = props.hiddenInputRef, itemsInput = props.items, optionsInput = props.options;
    var _b = useState(itemsInput[0]), currentItem = _b[0], setCurrentItem = _b[1];
    var _c = useState(CURRENT_ITEM_INDEX_INITIAL), currentItemIndex = _c[0], setCurrentItemIndex = _c[1];
    var _d = useState(CURRENT_PAGE_INITIAL), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = useState(CURRENT_VIDEO_CURRENT_TIME_DEFAULT), currentVideoCurrentTime = _e[0], setCurrentVideoCurrentTime = _e[1];
    var _f = useState(false), isFullscreenMode = _f[0], setIsFullscreenMode = _f[1];
    var _g = useState(MODAL_IS_MINIMIZED_INITIAL), isModalMinimized = _g[0], setIsModalMinimized = _g[1];
    var _h = useState(itemsInput), items = _h[0], setItems = _h[1];
    var _j = useState(ITEM_CONTAINER_HEIGHT_INITIAL), itemContainerHeight = _j[0], setItemContainerHeight = _j[1];
    var _k = useState(0), numberOfPages = _k[0], setNumberOfPages = _k[1];
    var _l = useState(optionsInput || {}), options = _l[0], setOptions = _l[1];
    var itemViewerRef = useRef(null);
    var currentItemToUse = useMemo(function () { return Object.keys(currentItem || {}).length > 0 ? currentItem : items[0]; }, [currentItem, items]);
    useEffect(function () {
        setCurrentItem(items === null || items === void 0 ? void 0 : items[currentItemIndex]);
    }, [items, currentItemIndex, setCurrentItem]);
    useEffect(function () {
        if (isFullscreenMode) {
            enterFullScreen(itemViewerRef.current);
        }
        else {
            exitFullScreen(itemViewerRef.current);
        }
    }, [isFullscreenMode]);
    return (React$1.createElement(CarouselContext.Provider, { value: {
            carouselContainerRef: carouselContainerRef,
            currentItem: currentItemToUse,
            currentItemIndex: currentItemIndex,
            currentPage: currentPage,
            currentVideoCurrentTime: currentVideoCurrentTime,
            elementStylings: (_a = options.styling) === null || _a === void 0 ? void 0 : _a.elements,
            hiddenInputRef: hiddenInputRef,
            isFullscreenMode: isFullscreenMode,
            isModalMinimized: isModalMinimized,
            itemViewerRef: itemViewerRef,
            itemContainerHeight: itemContainerHeight,
            items: items,
            numberOfPages: numberOfPages,
            options: options,
            setCurrentItemIndex: setCurrentItemIndex,
            setCurrentPage: setCurrentPage,
            setCurrentVideoCurrentTime: setCurrentVideoCurrentTime,
            setIsFullscreenMode: setIsFullscreenMode,
            setIsModalMinimized: setIsModalMinimized,
            setItemContainerHeight: setItemContainerHeight,
            setItems: setItems,
            setNumberOfPages: setNumberOfPages,
            setOptions: setOptions,
        } },
        children,
        React$1.createElement(CarouselItemViewer, { ref: itemViewerRef })));
};
var CarouselContext = React$1.createContext({});
function useCarouselContext() {
    return useContext(CarouselContext);
}

var CarouselContainer = function (props) {
    var container = props.container, children = props.children;
    var _a = container || {}, _b = _a.tag, Tag = _b === void 0 ? 'h4' : _b, text = _a.text, style = _a.style, textStyle = _a.textStyle;
    return (React$1.createElement("div", { style: style, className: CLASSNAME__CAROUSEL_CONTAINER },
        !!text ? (React$1.createElement(Tag, { style: { padding: "".concat(CAROUSEL_ITEM_SPACING_DEFAULT).concat(CAROUSEL_SPACING_UNIT, " 0"), textStyle: textStyle } }, text)) : null,
        children));
};

var Carousel = function (props) {
    //#region Init
    var items = props.items, options = props.options;
    var carouselContainerRef = useRef();
    var hiddenInputRef = useRef();
    var stylingLogic = useBusinessLogic({ options: options }).stylingLogic; //need to pass in options here since it is outside of context
    var _a = useState(false), setShouldRerender = _a[1];
    useOnResize(function () {
        var _a, _b;
        setShouldRerender(function (current) { return !current; });
        (_b = (_a = document.body) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.removeProperty('cursor');
    });
    //#endregion
    //#region JSX
    return (React.createElement(CarouselProvider, { items: items, carouselContainerRef: carouselContainerRef, hiddenInputRef: hiddenInputRef, options: options || {} },
        React.createElement("input", { ref: hiddenInputRef, style: stylingLogic.carouselHiddenInputStyle }),
        React.createElement(CarouselContainer, { container: options === null || options === void 0 ? void 0 : options.container },
            React.createElement("div", { ref: carouselContainerRef, className: getClassname({ elementName: "" }), style: __assign({}, stylingLogic.carouselStyle) },
                React.createElement(CarouselContent, __assign({}, props, { carouselContainerRef: carouselContainerRef }))))));
    //#endregion
};

export { Carousel };
//# sourceMappingURL=index.js.map
