import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container, paddingTop } from "./decorators";
import { CarouselItemProps, CarouselOptions } from "../types";
import extremeAspectRatio from "./assets/imgs/about/thumbnails/extreme-aspect-ratio.png";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Item Viewer Toolbar Preview",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: paddingTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const ITEMS_TO_USE: CarouselItemProps[] = [
  {
    srcMain: extremeAspectRatio,
    description: "This image has an extreme aspect ratio",
  },
  ...items,
];

export const Story1: Story = {
  args: {
    items: ITEMS_TO_USE,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Default",
};

export const Story2: Story = {
  args: {
    items: ITEMS_TO_USE,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        itemViewerPreview: {
          swapImageAndText: true,
        },
      },
    },
  },
  name: "Image on right side",
};

export const Story3: Story = {
  args: {
    items: ITEMS_TO_USE,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        itemViewerPreview: {
          image: {
            fit: "contain",
            position: "bottom",
          },
        },
      },
    },
  },
  name: "The itemViewer toolbar preview fit can be changed",
};

export const Story4: Story = {
  args: {
    items: ITEMS_TO_USE,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        itemViewerPreview: {
          image: {
            fit: "contain",
            position: "bottom",
          },
          swapImageAndText: true,
        },
      },
    },
  },
  name: "The itemViewer toolbar preview fit can be changed when image on right side",
};
