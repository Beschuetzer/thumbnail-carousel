import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop, maringAllAround } from "./decorators";
import { customButtons } from "./custom-buttons";
import { COLORS } from "./assets/colors";
import { carouselShortcuts } from "./carousel-shortcuts";
import { CarouselOptions } from "../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Dynamic Layout",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: marginTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThumbnailOptions1: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
    },
  },
  name: "No Item Viewer - Dynamic Thumbnail Spacing and Automatic Size",
};

export const ThumbnailOptions2: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
      },
    },
  },
  name: "No Item Viewer - Dynamic Thumbnail Sizing and Automatic Spacing",
};

export const ThumbnailOptions3: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
    },
  },
  name: "No Item Viewer - Dynamic Thumbnail Sizing and Spacing",
};

export const ThumbnailOptions4: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Spacing",
};

export const ThumbnailOptions5: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Size",
};

export const ThumbnailOptions6: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Size and Spacing",
};

export const ThumbnailOptions7: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
        thumbnailPositioning: "left",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Size and Spacing with Positioning Left",
};

export const ThumbnailOptions8: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
        thumbnailPositioning: "center",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Size and Spacing with Positioning Center",
};

export const ThumbnailOptions9: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        size: [
          [200],
          [180],
          [110, 1100],
          [150, 1500, "min-width"],
          [180, 800, "max-width"],
          [160, 600, "max-width"],
          [140, 400, "max-width"],
          [220, 1200, "min-width"],
        ],
        spacing: [
          [9],
          [5],
          [11, 1100],
          [15, 1500, "min-width"],
          [8, 800, "max-width"],
          [6, 600, "max-width"],
          [4, 400, "max-width"],
          [12, 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
        thumbnailPositioning: "right",
      },
    },
  },
  name: "Item Viewer Above - Dynamic Thumbnail Size and Spacing with Positioning Right",
};

