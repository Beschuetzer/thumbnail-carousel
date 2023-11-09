import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop } from "./decorators";
import { customButtons } from "./custom-buttons";
import { carouselShortcuts } from "./carousel-shortcuts";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Item Viewer Options",
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
  },
  name: "Default Modal Displayed on Load",
};

export const Story2: Story = {
  args: {
    items: items,
    options: {
      styling: {
        elements: customButtons,
      },
    },
  },
  name: "Default Modal Displayed on Load with Custom Toolbar Buttons",
};

export const Story3: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        autoHideToolbarDuration: 0,
      },
    },
  },
  name: "Toolbar doesn't hide on inactivity (Click item to view)",
};

export const Story4: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        autoHideToolbarDuration: 500,
      },
    },
  },
  name: "Toolbar hides after 500ms of inactivity (Click item to view)",
};

export const Story5: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        seekAmount: 2000,
      },
    },
  },
  name: "Seek amount 2 sec (Click item to view)",
};

export const Story6: Story = {
  args: {
    items: items,
    options: {
      shortcuts: carouselShortcuts,
    },
  },
  name: "All custom keyboard shortcuts",
};
