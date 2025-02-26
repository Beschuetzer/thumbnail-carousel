import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container, paddingTop } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Item Viewer Preview",
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Story1: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        aspectRatio: 0.25,
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "The itemViewer preview can overflow when item display location is above",
};

export const Story2: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        aspectRatio: 0.25,
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "The itemViewer preview can overflow when item display location is below",
};

export const Story3: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        aspectRatio: 0.25,
      },
      layout: {
        itemDisplayLocation: "none",
      },
    },
  },
  name: "The itemViewer preview is hidden when item display location is none",
};
