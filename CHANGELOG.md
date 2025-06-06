# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- These are the allowed headers
 ## [Semver - date]
### Added
### Fixed
### Changed
### Removed
 -->

## [1.6.4] - 2025-04-24

### Changed

- removed the overflow hidden style on the container for now

## [1.6.3] - 2025-04-24

### Fixed

- how overflow is applied to the container (only x-axis is hidden)

## [1.6.2] - 2025-04-24

### Fixed

- issue where the `CarouselVideoProgressBarScreenshotViewer` would sometimes render in the incorrect position initially
- issue where the video overlay would sometimes not cover the entire video
- issue where the seek dot would overflow the progress bar

## [1.6.1] - 2025-04-23

### Changed

- default value for ` options.styling.itemViewerPreview.image.position` to `top`

### Added

- More storybook tests

## [1.6.0] - 2025-04-18

### Added

- `react-intersection-observer` usage to only load content when in the viewport
- auto-play and stop depending on whether the content is in the viewport

## [1.5.1] - 2025-03-12

### Added

- `options.modal.isModalMinimizedInitially` with the default being `true`

## [1.5.0] - 2025-03-11

### Fix

- issue where full items are being loaded when thumbnails are provided. These changes will affect the calculated aspect ratio for items whose thumbnail ratio doesn't match the main item.  Also, any videos without a thumbnail will effectively be ignored for the auto aspect ratio calculation (when `options?.itemViewer?.useRecommendedAspectRatio` is `true`).  The upside is that fewer full-size assets will be transferred.

### Changed

- default for `options?.itemViewer.aspectRatio` to `.5` which is (2:1).
- default for `options?.itemViewer?.useRecommendedAspectRatio` to `false`.

## [1.4.1] - 2025-02-28

### Added

- proper peer dependencies

## [1.4.0] - 2025-02-28

### Changed

- default padding for toolbar to be 0 when not in fullscreen to better align with the rest of the carousel.
- adjust all things related to the item viewer to align with the rest of the carsouel now that the toolbar padding is 0.
- change how the text works for CarouselVideoProgressBarScreenshotViewer (can be multiple lines now instead of always 1 line)

## [1.3.1] - 2025-02-27

### Changed

- `CAROUSEL_MODAL_WIDTH_DEFAULT` to `min(70ch, 100%)` from `70ch`.

## [1.3.0] - 2025-02-27

### Fixed

- issue where having only high aspect ratio items causes the carousel to grow past the `window.innerHeight`.

### Changed

- `options.styling.modal.widthInPercent` to `options.styling.modal.width` and to accept `CSSProperties["maxWidth"]` values instead of just `number`.
- the default font size for modal paragraphs to be `14px`.
- the default value for whether the modal maintains the previous state across items to `false`.

## [1.2.5] - 2025-02-26

### Fixed

- item viewer preview now overflowing
- item viewer preview text contrast issue

## [1.2.4] - 2025-02-24

### Changed

- how the thumbnail opacity effect is applied

## [1.2.3] - 2025-02-24

### Added

- change of opacity for selected thumbnails

## [1.2.2] - 2025-02-24

### Changed

- change default padding-bottom for navigation bar to be `CAROUSEL_ITEMS_MARGIN_HORIZONTAL_NON_ITEM_VIEWER_DEFAULT` when the display location is `below` otherwise 0

## [1.2.1] - 2025-02-24

### Changed

- change default padding-bottom for navigation bar to 0

## [1.2.0] - 2025-02-23

### Changed

- change default margin and padding to 0 for container
- adjust spacing to match new layout choice
- change the navigation arrows to be positioned centered instead of space-between

## [1.1.1] - 2025-02-14

### Changed

- default opacity for `CAROUSEL_ITEM_THUMBNAIL_BACKGROUND_OPACITY_DEFAULT`
- fix issue with thumbnail backgrounds not working and use `translate3d` instead of `bottom` as the means of animation

## [1.1.0] - 2025-02-14

### Changed

- `translateX(...)` and `translateY(...)` to `translate3d(...)`
- hover stylings for thumbnails
- halve animation time
- remove the -4px margin-top for the container, which initially mean to allow room for item hovering. This is considering a breaking change.

## [1.0.13] - 2025-02-14

### Fixed

- a typo

## [1.0.12] - 2025-02-14

### Changed

- `translate(...)` to `translate3d(...)`

## [1.0.11] - 2025-02-12

### Fixed

- styling issue where the container wouldn't adhere to the parent's width by adding a default style of `width: '100%'` to the container

## [1.0.10] - 2023-11-18

### Fixed

- issue where `CarouselItemViewerContainer` would re-calculate optimal height for current item when changing viewing modes.
- bug causing the text for long section names to not be rendered in the correct position in some cases
- bug where some invalid video section specifications weren't throwing errors
- issue where default styles for the overflow scroll bars were not applying

### Added

- more sections and gifs to the readme
- items to test video section validation

## [1.0.9] - 2023-11-12

### Fixed

- issue where loading spinner color was not being affected by changed to `options.styling.theme`. It now fallsback to `options.styling.theme.colorFive`.

## [1.0.8] - 2023-11-11

### Fixed

- issue where box-sizing wasn't applying to the item-viewer when in fullscreen mode
- change `left` and `max-width` stylings for CarouselModal when in fullscreen mode

## [1.0.7] - 2023-11-11

### Changed

- removed minify from rollup config

### Fixed

- screenshot viewer text not being changed when `options.styling.toolbar.progressBar.screenshotViewer.textOrForegroundColor` is changed.

## [1.0.6] - 2023-11-11

### Fixed

- issue where setting border-radius style in `options.container.style` didn't apply correctly

### Changed

- apply `box-sizing: border-box` to all items
- left and maxWidth styles for CarouselModal to work with `box-sizing: border-box` change.
- when autoplay is `false` for a video item, seeking via progress bar no longer plays the video.
- the progress bar now tracks whether the video was playing before a seek occurs and plays the video onMouseUp accordingly

### Removed

- `getBorderStringSize` and everything related to it, since only needed if `box-sizing` is not `border-box`.

## [1.0.5] - 2023-11-10

### Fixed

- First CarouselItem not being the correct size when itemDisplayLocation is not none

## [1.0.4] - 2023-11-10

### Fixed

- Reverted screenshot viewer left change

### Added

- Gifs to readme

## [1.0.3 - 1.0.1] - 2023-11-9

### Changed

- Work on readme

## [1.0.0] - 2023-11-9

### Fixed

- A few minor bugs related to styling inconsistencies

### Changed

- Added basic examples to readme

### Added

-The rest of the test cases into Storybook

## [0.0.1] - 2023-11-7

### Changed

- Initial Beta release
