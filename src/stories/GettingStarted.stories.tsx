import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { containerBasic } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Getting Started",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Story1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
  },
  decorators: containerBasic,
  name: "When you want just the carousel",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
      },
    },
  },
  decorators: containerBasic,
  name: "When you want the item viewer above",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
    },
  },
  decorators: containerBasic,
  name: "When you want the item viewer below",
};

export const Story4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      container: {
        text: "Example of a titled carousel with container that has padding and max width value",
        tag: "h4",
        style: {
          padding: "0 14px 14px 14px",
          backgroundColor: "rgb(29,14,11)",
          maxWidth: "700px",
        },
        textStyle: {
            color: "white",
        },
      },
    },
  },
  name: "When you want some padding and a title",
};
