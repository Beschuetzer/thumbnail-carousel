import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Container",
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
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      container: {
        text: "Some title",
      },
    },
  },
  name: "Text Only",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      container: {
        text: "Some title as h1",
        tag: "h1",
      },
    },
  },
  name: "Use Custom Tag",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      container: {
        text: "Some title as h6 with Custom Red Color",
        tag: "h6",
        style: {
          color: "red",
        },
      },
    },
  },
  name: "Use Custom tag with Custom Container Style",
};

export const Story4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      container: {
        text: "Some title as h4 with Custom Red Color",
        tag: "h4",
        style: {
          padding: '0 14px 14px 14px',
          backgroundColor: "rgb(29,14,11)",
          width: 'auto',
        },
        textStyle: {
          color: "red",
        },
      },
    },
  },
  name: "Use Custom tag with Custom Container and Text Style",
};

export const Story5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      container: {
        text: "The border-radius of this instance should be 0",
        tag: "h4",
        style: {
          borderRadius: 0,
        },
      },
    },
  },
  name: "Can Pass Custom Border Radius",
};
