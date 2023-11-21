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
    },
     {
      description: "Using itemStyles to Pass Style to Item's Underlying Tag (works with videos too)",
      srcMain: img3,
      srcThumbnail: img3Thumbnail,
      itemStyles: {
        objectFit: "cover", //image covers the available space (default is contain)
        objectPosition: "top", //image is positioned top (default is center)
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

### Dynamic Carousel Options

Option fields that take the `CarouselElementValue<T>` type can be specified in a few different ways:

#### A simple value:

```
options: {
  layout: {
    itemDisplayLocation: "above",
  },
}
// => current item is always displayed above the carousel
```

#### Based on viewport width (`CarouselElementValueTuple<T>`):

```
options: {
  layout: {
    itemDisplayLocation: [["above"], ["none", 900], ["below", 902, "min-width"]],
  },
}
// => "none" when viewport <= 900
// => "below" when viewport >= 902
// => "above" otherwise (901 in this case)
```

![dynamicViewportWidth](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/a40f1358-cd0a-4098-9b10-c8e99e7a00bb)

#### Based on Viewing Mode (fullscreen or nonFullscreen):

```
options: {
  styling: {
    colorTheme: {
      colorOne: {
        fullscreen: 'red',
        nonFullscreen: 'blue',
      }
    },
  }
},
// => "red" when fullscreen
// => "blue" when not fullscreen
```

![dynamicViewingMode](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/a03f81c2-f907-4c45-a7d6-c32706fa4d94)

#### Based on Viewing Mode and Viewport Width:

```
options: {
  styling: {
    colorTheme: {
      colorOne: {
        fullscreen: [['red'], ['green', 800]],
        nonFullscreen: [['blue'], ['purple', 800]],
      }
    },
  }
},
// => "green" when fullscreen and viewport <= 800
// => "red" when fullscreen otherwise
// => "purplse" when not fullscreen and viewport <= 800
// => "blue" when not fullscreen otherwise
```

![dynamicViewingModeAndViewPortWidth](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/a818741b-29f5-4f38-b1b4-61edd564c0df)

## Item Customization

### Video Items

#### Screenshot Viewer

Videos will have an embedded progress bar by default (change `options.layout.isToolbarPositionedInVideo` to `false` to move the toolbar below the video):

![screenshotViewer](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/db31a1a0-7672-463d-82bd-e6e185cee271)

#### Sections

  There are two ways to add sections to a video:

1. Using Strings (i.e. specifying the start time of each section)
    ```
    video: {
      sections: [
        ["Section with a very long description that would overflow"], //always start at 0 seconds so can omit or use empty string to keep ts happy
          "Another section with a very long description that would overflow",
          "10:00",  //starts at 10 seconds
        ],
        [
          "Yet Another section with a very long description that would overflow",
          "20:240", //starts at 20 seconds and 240 milliseconds
        ],
        [
          "Even Yet Another section with a very long description that would overflow",
          "1:03:100", //starts at 1 minute 3 seconds and 100 milliseconds
        ],
      ],
    }
    ```

2. Using Numbers (i.e. specifying the start time of each section)
    ```
    video: {
      sections: [
        ["Ensuring Options are Correct", 1000], //1000 milliseconds long
        ["Selecting the Regular Expression to Use for the Site", 1000], //1000 milliseconds long
        ["Selecting the Save Location", 2000], //2000 milliseconds long
        [
          "Downloading the All Files Recursively since Last Download Date",
          3000, //3000 milliseconds long
        ],
        ["Verifying the Downloaded Files"], //can omit last value (or enter any number to keep ts happy) since it will take up remaining space
      ],
    },
    ```

#### Aspect Ratio

By default the aspect ratio of the item viewer is determined by the item with the largest aspect ratio.  The item viewer is only displayed if `itemDisplayLocation` is not `none`, which is the default.  If the aspect ratio is set to `auto` then the first item's aspect ratio is used.
To change the aspect ratio: 

```
options: {
  layout: {
    itemDisplayLocation: "below", //required to show the item viewer since default is none
  },
  itemViewer: {
    aspectRatio: 0.33, //this would be 3:1
  },
},
```

![aspectRatio](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/bf85fd8b-0cc9-4924-91d8-4e53194e8c1d)

#### Optimzations

1. Using a low-res version of the video (480p or lower resolution) will result in better performance for videos.  The low-res version is used when not in fullscreen mode and `itemDisplayLocation` is not `none`.  Sites like this [one](https://www.freeconvert.com/video-compressor) can convert your videos for free.

    ```
    const items = [
        {
          srcMain: {
            hiRes: clipHighRes, //this clip is used in fullscreen mode (1080p or higher res is generally best here)
            loRes: clipLowRes //this clip is used everywhere else (480p is generally the best here)
          },
          ...
        },
        ...
      ] as CarouselItemProps[]
    ```

### All Items

#### Optional Description Modal

1. Using Built-in Modal Builder

    Each object is a section.  If the section is section is code, use `codeSection`:
    ```
    ...
    items={[
      {
        ...
        modal: {
          sections: [
            {
              title: "Specifying Custom Styles for an Item Based on Viewing Mode",
              text: "This item illustrates how to specify custom styles for an item based on whether the current viewing mode is fullscreen or not.  Here is the object used:",
            },
            {
              text: "Example: ",
            },
            {
              codeSection: {
                lines: [
                  `itemStyles: {`,
                  ` // these styles only apply when not in fullscreen mode`,
                  ` nonFullscreen: {`,
                  `  objectFit: 'cover',`,
                  `  objectPosition: 'top',`,
                  ` },`,
                  ` // these styles only apply when in fullscreen mode`,
                  ` fullscreen: {`,
                  `  objectFit: 'scale-down',`,
                  `  objectPosition: 'left',`,
                  ` }`,
                  `}`,
                ],
                startTabCount: 1,
                tabSpacing: 15,
              },
            },
          ],
        },
      },
      ...
    ]}
    ```

    ![descriptionModalBuilder](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/d17c6e2d-1898-41ba-a09d-f8b160ce98f5)


2. Using JSX
    ```
    ...
    items={[
      {
        ...
        modal: {
          closeButtonTop: 25,
          children: (
            <section>
              <h4
                style={{
                  marginTop: 8,
                  fontSize: 18,
                  padding: "0 30px 10px 0",
                }}
              >
                Using JSX to Create a Modal (Avoiding Conflicts with Button by
                Adding 30px Padding to the Right of Title Div)
              </h4>
              <div
                style={{
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                You can use the <strong>modal.children</strong> field to pass in
                your own JSX for the modal.
              </div>
            </section>
          ),
        },
      },
      ...
    ]}
    ```

    ![descriptionModal](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/62d8c9d5-3b78-4c79-8aa9-dc405dd047f7)

## Default Behavior

- takes up the width of the container in which it resides
- fits as many thumbnails into a page as it can based on the thumbnail size
- spaces the thumbnails with a [left-alignment](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-3) (can be changed by setting `options.thumbnail.spacingStrategy` to `max` ([example](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-4))).
- for videos, when the toolbar is embedded in the video, the overlay hides after 2 seconds of no mouse activity or when the cursor leaves the video (similar to how Youtube videos work).
- by default the aspect ratio of the item viewer is determined by the item with the largest aspect ratio.  This is only relevant if `itemDisplayLocation` is not `none`. See aspect ratio [examples](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-aspect-ratio-options--docs) for more details.

## Storybook

The [story book](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs) is the best way to learn about customization options.
