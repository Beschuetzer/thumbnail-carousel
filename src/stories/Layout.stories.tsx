import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { COLORS } from "./assets/colors";
import { marginTop } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Layout",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: marginTop,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 *This is the default layout
 **/
export const Story1: Story = {
  args: {
    items: items.slice(0, 3),
  },
  name: "One Page of Items",
};

/**
 *When there are too many items for the given thumbnail size:
 **/
export const Story3: Story = {
  args: {
    items: items,
  },
  name: "Multiple Pages - All Defaults",
};

/**
 *It is possible to add an item viewer above the carousel.
 **/
export const Story4: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 125,
      },
    },
  },
  name: "Current Item Displayed Above Carousel",
};

/**
 *It is possible to add an item viewer below the carousel.
 **/
export const Story5: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 125,
      },
    },
  },
  name: "Current Item Displayed Below Carousel",
};

/**
 *It is possible to move the toolbar below the video.
 **/
export const Story6: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: false,
      },
      thumbnail: {
        size: 100,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Video Toolbar not Embedded Inside Video",
};

export const Story7: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        itemViewerPreview: {
          isVisibleInNonFullscreenMode: true,
        },
        toolbar: {
          progressBar: {
            screenshotViewer: {
              thumbnailWidth: 200,
            },
          },
        },
      },
    },
  },
  name: "Smaller Screenshot Viewer",
};

export const Story8: Story = {
  args: {
    items: items.slice(0, 3),
    options: {
      thumbnail: {
        spacingStrategy: "max",
      },
    },
  },
  name: "One Page - Spacing Strategy Max",
};

export const Story9: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: [["none"], ["above", 1000, "min-width"]],
      },
      container: {
        style: {
          margin: `40px 1.4rem`,
        },
      },
    },
  },
  name: "Multiple Pages - Custom Margin",
};

export const Story10: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: [["none"], ["above", 1000, "min-width"]],
      },
      container: {
        style: {
          padding: `40px 1.4rem`,
        },
      },
    },
  },
  name: "Multiple Pages - Custom Padding",
};

export const Story11: Story = {
  args: {
    items: items,
    options: {
      styling: {
        modal: {
          backgroundColor: COLORS.primary4,
          textColor: COLORS.primary1,
          closeButton: {
            fill: COLORS.primary1,
            size: [
              [18, 550, "max-width"],
              [20, 655, "max-width"],
              [24, 900, "min-width"],
            ],
          },
        },
        itemViewer: {
          backgroundColor: COLORS.primary4,
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary4,
            textOrForegroundColor: COLORS.primary1,
          },
          textColor: COLORS.primary2,
        },
        elements: {
          all: {
            fillColor: COLORS.primary2,
          },
        },
      },
    },
  },
  name: "Multiple Pages - Custom Item Viewer Colors",
};
