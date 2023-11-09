import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Navigation Options",
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
    items: items,
    options: {
      navigation: {
        disableWrapping: true,
      },
    },
  },
  name: "No Wrapping",
};

export const Story2: Story = {
  args: {
    items: items,
  },
  name: "Current Page follows last viewed item in item viewer (full-screen)",
};

export const Story3: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        autoChangePage: false,
      },
    },
  },
  name: "Current Page does not follow last viewed item in item viewer (full-screen)",
};

export const Story4: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        maxClickThreshold: 0,
      },
    },
  },
  name: "0 Max Click Threshold",
};

export const Story5: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        disableWrapping: true,
        maxClickThreshold: 0,
      },
    },
  },
  name: "0 Max Click Threshold No Wrapping",
};

export const Story6: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        disableSwiping: true,
      },
    },
  },
  name: "Swiping a Thumbnail Disabled",
};

export const Story7: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        isLastPageFlush: false,
      },
    },
  },
  name: "Last Page is not Flush",
};
