# thumbnail-carousel

React component library that provides a carousel with a wide range of options.

### Use Case

If you want to display multiple images/videos inside of a single carousel, this package will do that for you.  It's not recommended to use this package if the videos are large in size or bandwidth is a concern, since this package uses `<video>` and `<img>` tags to display items.

### Getting starting

![
```
//import files to use
import img1 from "./imgs/about/img1.jpg";
import img1Thumbnail from "./imgs/about/thumbnails/img1.jpg";
import img2 from "./imgs/about/img2.jpg";
import clipHighRes from "./clips/1-high.mp4";
import clipLowRes from "./clips/1-low.mp4";
import clipThumbnail from "./clips/thumbnail/1.png";

//import carousel
import { Carousel } from 'react-thumbnail-carousel'

//setup items
<Carousel
  items={[
    {
      description: 'My Short Clip',
      srcMain: {
        hiRes: clipHighRes,
        loRes: clipLowRes
      },
      srcThumbnail: clipThumbnail,
      video: {
        autoPlay: false,
        muted: true
      }
    },
    {
      description: 'My Image with a Thumbnail',
      srcMain: img1,
      srcThumbnail: img1Thumbnail,
    },
    {
      description: 'My Image with no Thumbnail',
      srcMain: img2,
    }
  ]}
/>
```
]('readme/getting-started.png')

### Examples

The [story book](https://beschuetzer.github.io/thumbnail-carousel/?path=/docs/thumbnail-carousel-layout--docs) is the best way to learn about customization options.
