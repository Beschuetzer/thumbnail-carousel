import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container } from "./decorators";
import { customButtons } from "./custom-buttons";
import { carouselShortcuts } from "./carousel-shortcuts";
import extremeAspectRatio from "./assets/imgs/about/thumbnails/extreme-aspect-ratio.png";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Aspect Ratio Options",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Story1: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is default",
      },
      layout: {
        itemDisplayLocation: "below",
      },
    },
  },
  name: "Using Recommended Aspect Ratio (default)",
};

export const Story2: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is same as auto",
      },
      layout: {
        itemDisplayLocation: "above",
      },
      itemViewer: {
        useRecommendedAspectRatio: false,
      },
    },
  },
  name: "Setting useRecommendedAspectRatio to False is Same as Auto",
};

export const Story3: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is auto",
      },
      layout: {
        itemDisplayLocation: "below",
      },
      itemViewer: {
        aspectRatio: "auto",
      },
    },
  },
  name: "Setting Aspect Ratio to Auto",
};

export const Story4: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is 16:9 (widescreen)",
      },
      layout: {
        itemDisplayLocation: "below",
      },
      itemViewer: {
        aspectRatio: "widescreen",
      },
    },
  },
  name: "Setting Aspect Ratio to 16:9",
};

export const Story5: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is 4:3 (fullscreen)",
      },
      layout: {
        itemDisplayLocation: "below",
      },
      itemViewer: {
        aspectRatio: "fullscreen",
      },
    },
  },
  name: "Setting Aspect Ratio to 4:3",
};

export const Story6: Story = {
  args: {
    items: items,
    options: {
      container: {
        text: "Aspect Ratio is 3:1",
      },
      layout: {
        itemDisplayLocation: "below",
      },
      itemViewer: {
        aspectRatio: 0.33,
      },
    },
  },
  name: "Setting Aspect Ratio to 3:1",
};

export const Story7: Story = {
  args: {
    items: [
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
    ],
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
    },
  },
  name: "Can handle extreme aspect ratios below",
};

export const Story8: Story = {
  args: {
    items: [
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
      {
        srcMain: extremeAspectRatio,
        description: "This image has an extreme aspect ratio",
      },
    ],
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Can handle extreme aspect ratios above",
};
