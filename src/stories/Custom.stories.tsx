import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop } from "./decorators";
import { COLORS } from "./assets/colors";
import { customButtons } from "./custom-buttons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Custom",
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

export const Story1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        size: 150,
      },
      styling: {
        navigation: {
          elements: {
            size: [
              [18, 550, "max-width"],
              [20, 655, "max-width"],
              [30, 900, "min-width"],
            ],
            color: COLORS.primary3,
          },
        },
        toolbar: {
          elements: {
            size: [
              [18, 550, "max-width"],
              [20, 655, "max-width"],
              [30, 900, "min-width"],
            ],
            color: COLORS.primary4,
          },
        },
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Button Sizes",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        size: 150,
      },
      styling: {
        navigation: {
          elements: {
            size: [
              [18, 550, "max-width"],
              [20, 655, "max-width"],
              [30, 900, "min-width"],
            ],
            color: COLORS.primary3,
          },
        },
        toolbar: {
          elements: {
            size: [
              [18, 550, "max-width"],
              [20, 655, "max-width"],
              [30, 900, "min-width"],
            ],
            color: COLORS.primary4,
          },
        },
        elements: {
          ...customButtons,
          fullscreenButton: {
            style: customButtons.fullScreenButton.style,
            svgHref: customButtons.fullScreenButton.svgHref,
          },
        },
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Button Sizes and Icons",
};
