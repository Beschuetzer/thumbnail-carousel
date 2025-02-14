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
