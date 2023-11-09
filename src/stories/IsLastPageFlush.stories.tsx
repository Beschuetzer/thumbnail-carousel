import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop } from "./decorators";
import { COLORS } from "./assets/colors";
import { customButtons } from "./custom-buttons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Last Page Flush",
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
  },
  name: "Last Page is Flush - Display Location None",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: { layout: { itemDisplayLocation: "below" } },
  },
  name: "Last Page is Flush - Display Location Above",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Last Page is Flush - Display Location Below",
};

export const Story4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      navigation: {
        isLastPageFlush: false,
      },
    },
  },
  name: "Last Page is not Flush - Display Location None",
};

export const Story5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      navigation: {
        isLastPageFlush: false,
      },
    },
  },
  name: "Last Page is not Flush - Display Location Above",
};

export const Story6: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      navigation: {
        isLastPageFlush: false,
      },
    },
  },
  name: "Last Page is not Flush - Display Location Below",
};
