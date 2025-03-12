import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { containerBasic } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Modal",
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
    items: items.slice(0, 2),
    options: {
        layout: {
            itemDisplayLocation: "above",
        },
    }
  },
  decorators: containerBasic,
  name: "Default video modal behavior",
};

export const Story2: Story = {
    args: {
      items: items.slice(0, 2),
      options: {
          layout: {
              itemDisplayLocation: "above",
          },
          modal: {
            isModalMinimizedInitially: false,
          }
      }
    },
    decorators: containerBasic,
    name: "Modal starts open for all items",
  };
  