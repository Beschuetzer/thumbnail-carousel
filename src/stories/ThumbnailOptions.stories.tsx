import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop, maringAllAround } from "./decorators";
import { customButtons } from "./custom-buttons";
import { COLORS } from "./assets/colors";
import { carouselShortcuts } from "./carousel-shortcuts";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Thumbnail Options",
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

export const ThumbnailOptions1: Story = {
  args: {
    items: items,
  },
  name: "Default",
};

export const ThumbnailOptions2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
    },
  },
  name: "Description Modal Always Shown",
};

export const ThumbnailOptions3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        descriptionOverlay: {
          isDisabled: true,
        },
      },
    },
  },
  name: "Description Modal Disabled",
};

export const ThumbnailOptions4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        spacing: [[0]],
      },
    },
  },
  name: "0 Item Spacing",
};

export const ThumbnailOptions5: Story = {
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
  name: "Fixed Item Spacing and Custom Item Size",
};

export const ThumbnailOptions6: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        size: 200,
        spacing: 5,
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Fixed Item Spacing and Custom Item Size with Non-default Item Display Location",
  decorators: maringAllAround,
};

export const ThumbnailOptions7: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        descriptionOverlay: {
          background: {
            solid: {
              color: COLORS.primary1,
              opacity: 0.8,
            },
          },
          fontSize: 8,
          hideDescriptionOverlayUnlessHovered: false,
          maxLineCount: 1,
          textColor: COLORS.primary4,
        },
        size: 100,
      },
    },
  },
  name: "Given Thumbnail Size with Custom Solid Modal",
  decorators: maringAllAround,
};

export const ThumbnailOptions8: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        descriptionOverlay: {
          background: {
            gradient: {
              angle: 270,
              start: {
                color: COLORS.primary4,
                opacity: 0.25,
              },
              end: {
                color: COLORS.primary1,
                opacity: 0.75,
              },
            },
          },
          fontSize: 8,
          hideDescriptionOverlayUnlessHovered: false,
          maxLineCount: 1,
          textColor: COLORS.primary4,
        },
        size: 100,
      },
    },
  },
  name: "Given Thumbnail Size with Custom Gradient Modal",
  decorators: maringAllAround,
};

export const ThumbnailOptions9: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      thumbnail: {
        descriptionOverlay: {
          background: {
            gradient: {
              angle: 270,
              start: {
                color: COLORS.primary4,
                opacity: 0.25,
              },
              end: {
                color: COLORS.primary1,
                opacity: 0.75,
              },
            },
            solid: {
              color: COLORS.primary1,
              opacity: 0.25,
            },
          },
          fontSize: 8,
          hideDescriptionOverlayUnlessHovered: false,
          maxLineCount: 1,
          textColor: COLORS.primary4,
        },
        size: 100,
      },
    },
  },
  name: "Given Thumbnail Size with Custom Gradient Modal and Fallback",
  decorators: maringAllAround,
};

export const ThumbnailOptions10: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        currentItemBorder: `2px dotted ${COLORS.primary3}`,
      },
    },
  },
  name: "Custom Current Item Border - Input Format One",
  decorators: maringAllAround,
};

export const ThumbnailOptions11: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        currentItemBorder: `  1mm  ridge  rgba(255,  255,  255,   .75) `,
      },
    },
  },
  name: "Custom Current Item Border - Input Format Two",
  decorators: maringAllAround,
};

export const ThumbnailOptions12: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        currentItemBorder: "thick double #9b9b9b",
      },
    },
  },
  name: "Custom Current Item Border - Input Format Three",
  decorators: maringAllAround,
};