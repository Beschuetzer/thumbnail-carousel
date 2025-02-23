import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Padding and Margin",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: container,
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
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        container: {
          margin: {
            top: 14,
            right: 14,
            bottom: 14,
            left: 14,
          }
        }
      }
    },
  },
  name: "styling.container.margin 14",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        container: {
          padding: {
            top: 14,
            right: 14,
            left: 14,
          }
        }
      }
    },
  },
  name: "styling.container.padding 14",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        itemViewer: {
          padding: {
            right: 14,
            left: 14,
          }
        }
      }
    },
  },
  name: "styling.itemViewer.padding 14",
};