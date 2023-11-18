# thumbnail-carousel

A React carousel with a wide range of [options](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs).

## Use Case

If you want to display multiple images/videos inside of a single carousel, this package will do that for you. It's not recommended to use this package if the videos are large in size, since this package uses the `<video>` tag to display items.

## Getting starting
Any image [supported](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats) by the `<img>` tag will work,
and any video type [supported](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) by the `<video>` tag will work.

```
//import files to use from project (`/public` or `/src`)
import img1 from "./imgs/img1.jpg"; 
import img1Thumbnail from "./imgs/thumbnails/img1.jpg";
import clipHighRes from "./clips/1-high.mp4";
import clipLowRes from "./clips/1-low.mp4";
...

//import carousel
import { Carousel, CarouselItemProps } from 'react-thumbnail-carousel'

//items are of type `CarouselItemProps`
const items = [
    {      
      description: 'Simple Video Example', //displays in the thumbnail overlay (when applicable) and in item description
      srcMain: clipWithNoOptimizations
      srcThumbnail: clipThumbnail, //necessary for videos, otherwise no image is shown in the thumbnail
    },
    {
      description: 'Example of optimized video item when `itemDisplayLocation` is set to `above`/`below`',
      srcMain: {
        hiRes: clipHighRes, //this clip is used in fullscreen mode (1080p or higher res is generally best here)
        loRes: clipLowRes //this clip is used everywhere else (480p is generally the best here)
      },
      srcThumbnail: clipThumbnail,
    },
    {
      description: 'Example of optimized Image item (i.e. has thumbnail)',
      srcMain: img1,
      srcThumbnail: img1Thumbnail,
    },
    {
      description: 'My Image with no Thumbnail (full image is used as thumbnail)',
      srcMain: img2,
      itemStyles: {
        objectFit: "cover", //image covers the available space (default is contain)
        objectPosition: "top", //image is positioned 
      },
    },
     {
      description: 'My Image with Custom Fit and Position',
      srcMain: img3,
      srcThumbnail: img3Thumbnail,
      itemStyles: {
        objectFit: "cover", //image covers the available space (default is contain)
        objectPosition: "top", //image is positioned 
      },
    },
    ...
  ] as CarouselItemProps[]

//instantiate Carousel with default options
<Carousel items={items} />

//instantiate Carousel with current item displayed above 
<Carousel items={items} options={{
  layout: {
    itemDisplayLocation: 'above' //'below' is an option too
  }
}}/>
...
```

## Features

  ### Basic Carousel

  ![default](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/dfb166a6-9768-465d-b782-d01aac48fe28)

  ### Current Item Displayed Above

  ![above](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/c1e1a7ec-37c0-4227-a503-27498727e7fc)

  ### Current Item Displayed Below

  ![below](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/2a6ff3d7-1db5-466b-8121-1527640c5a44)

  ### Fullscreen Mode

  ![fullscreen](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/232c74ec-832c-44c1-b797-d30644b0520b)

  ### Dynamic Customization
  Option fields that take the `CarouselElementValue<T>` type can be specified in a few different ways: 
    - A simple value: ``
    - Based on viewport width:
    - Based on viewing mode (fullscreen or nonFullscreen):
    - Based on a combination of the above:

## Default Behavior

- takes up the width of the container in which it resides
- fits as many thumbnails into a page as it can
- spaces the thumbnails with a [left-alignment](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-3) (can be changed by setting `options.thumbnail.spacingStrategy` to `max` ([example](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-4))).
- for videos, when the toolbar is embedded in the video, the overlay hides after 2s of no mouse activity or when the cursor leaves the video (similar to how Youtube videos work).
- by default the largest aspect aspect ratio is used for the item viewer (calculated on load based on the aspect ratios of the items in the carousel). See [aspect ratio options](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-aspect-ratio-options--docs) for more details.

  

## Storybook

The [story book](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs) is the best way to learn about customization options.
