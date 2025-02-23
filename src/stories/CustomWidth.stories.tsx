import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import {
  halfWidthOneCarousel,
  halfWidthTwoCarousels,
  container,
} from "./decorators";
import { COLORS } from "./assets/colors";
import { customButtons } from "./custom-buttons";
import { carouselShortcuts } from "./carousel-shortcuts";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Custom Width",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Story1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
  },
  decorators: halfWidthOneCarousel,
  name: "Half width - All Defaults",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
  },
  decorators: halfWidthTwoCarousels,
  name: "Side by Side - All Defaults",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      styling: {
        fontFamily: {
          itemViewer: "monospace",
          navigation: "serif",
        },
        elements: customButtons,
      },
      shortcuts: carouselShortcuts,
      itemViewer: {
        autoHideToolbarDuration: 2000,
        seekAmount: 10000,
      },
      thumbnail: {
        size: 200,
        spacing: [[2.5]],
        descriptionOverlay: {
          background: {
            solid: {
              color: COLORS.primary2,
            },
          },
          textColor: COLORS.primary4,
          fontSize: 14,
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
    },
  },
  decorators: halfWidthOneCarousel,
  name: "Half width - All Custom Settings",
};

export const Story4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      styling: {
        fontFamily: {
          itemViewer: "monospace",
          navigation: "serif",
        },
        elements: customButtons,
      },
      shortcuts: carouselShortcuts,
      itemViewer: {
        autoHideToolbarDuration: 2000,
        seekAmount: 10000,
      },
      thumbnail: {
        size: 200,
        spacing: [[2.5]],
        descriptionOverlay: {
          background: {
            solid: {
              color: COLORS.primary2,
            },
          },
          textColor: COLORS.primary4,
          fontSize: 14,
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
    },
  },
  decorators: halfWidthTwoCarousels,
  name: "Side by Side - All Custom Settings",
};
