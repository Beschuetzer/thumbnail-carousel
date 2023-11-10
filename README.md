# thumbnail-carousel

React component library that provides a carousel with a wide range of [options](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs).

### Use Case

If you want to display multiple images/videos inside of a single carousel, this package will do that for you. It's not recommended to use this package if the videos are large in size or bandwidth is a concern, since this package uses `<video>` and `<img>` tags to display items.

### Getting starting

```
//import files to use
import img1 from "./imgs/about/img1.jpg";
import img1Thumbnail from "./imgs/about/thumbnails/img1.jpg";
import img2 from "./imgs/about/img2.jpg";
import clipHighRes from "./clips/1-high.mp4";
import clipLowRes from "./clips/1-low.mp4";
import clipThumbnail from "./clips/thumbnail/1.png";

//import carousel
import { Carousel, CarouselItemProps } from 'react-thumbnail-carousel'

//setup items
const items = [
    {
      //this displays in the thumbnail and in full screen
      description: 'My Short Clip',
      srcMain: {
        //this clip is used in fullscreen mode
        hiRes: clipHighRes,
        //this clip is used anywhere else
        loRes: clipLowRes
      },
      //this is required for videos and provides a thumbnail of the item
      srcThumbnail: clipThumbnail,
      video: {
        autoPlay: false,
        muted: true
      },
    },
    {
      description: 'My Image with a Thumbnail',
      srcMain: img1,
      srcThumbnail: img1Thumbnail,
    },
    {
      description: 'My Image with no Thumbnail',
      srcMain: img2,
    },
  ] as CarouselItemProps[]

//instantiate Carousel with default options
<Carousel items={items} />
```

### Default Behavior

- takes up the width of the container in which it resides
- fits as many thumbnails into a page as it can
- spaces the thumbnails with a [left-alignment](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-3) (can be changed by setting `options.thumbnail.spacingStrategy` to `max` ([example](https://beschuetzer.github.io/thumbnail-carousel/?path=/story/thumbnail-carousel-layout--layout-4))).
- for videos, when the toolbar is embedded in the video, the overlay hides after 2s of no mouse activity or when the cursor leaves the video (similar to how Youtube videos work).
- by default the largest aspect aspect ratio is used for the item viewer (calculated on load based on the aspect ratios of the items in the carousel). See [aspect ratio options](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-aspect-ratio-options--docs) for more details.

### All Defaults

![default](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/dfb166a6-9768-465d-b782-d01aac48fe28)

### All Defaults with Item Viewer Above

![above](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/c1e1a7ec-37c0-4227-a503-27498727e7fc)

### All Defaults with Item Viewer Below

![below](https://github.com/Beschuetzer/thumbnail-carousel/assets/62818816/2a6ff3d7-1db5-466b-8121-1527640c5a44)

### Customization

The [story book](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs) is the best way to learn about customization options.
