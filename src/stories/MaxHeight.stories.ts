import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Max Height",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "full-screen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const MaxHeight1: Story = {
  args: {
    items: items,
    options: {
      layout: {
        maxHeight: 185,
      },
      thumbnail: {
        size: 155,
      },
    },
  },
  name: "Max Heigt causes Thumbnail Size to Decrease when ItemDisplayLocation is None",
};

export const MaxHeight2: Story = {
  args: {
    items: items,
    options: {
      layout: {
        maxHeight: 340,
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Max Heigt causes Thumbnail Size to Decrease when ItemDisplayLocation is Above",
};

export const MaxHeight3: Story = {
  args: {
    items: items,
    options: {
      layout: {
        maxHeight: 410,
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 75,
      },
    },
  },
  name: "Max Heigt causes Thumbnail Size to Decrease when ItemDisplayLocation is Below",
};
