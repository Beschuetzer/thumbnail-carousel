import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { marginTop, maringAllAround } from "./decorators";
import { customButtons } from "./custom-buttons";
import { COLORS } from "./assets/colors";
import { carouselShortcuts } from "./carousel-shortcuts";
import { CarouselOptions } from "../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Dynamic Settings",
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
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          isDisabled: [[false], [true, 800]],
        },
      },
    },
  },
  name: "Thumbnail Modal Disabled <= 800px",
};

export const ThumbnailOptions2: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          fontSize: [
            [14],
            [10, 800],
            [16, 1000, "min-width"],
            [18, 1200, "min-width"],
          ],
        },
      },
    },
  },
  name: "Thumbnail Modal Font Size Changes at 800px",
};

export const ThumbnailOptions3: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: [[false], [true, 800]],
        },
      },
    },
  },
  name: "Thumbnail Modal Always Shown > 800px",
};

export const ThumbnailOptions4: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          background: {
            solid: {
              color: [[COLORS.primary3], [COLORS.primary1, 800]],
              opacity: [[1], [0.5, 800]],
            },
          },
        },
      },
    },
  },
  name: "Thumbnail Modal Opacity and Color Change at 800px",
};

export const ThumbnailOptions5: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          background: {
            gradient: {
              angle: [[180], [90, 800]],
              start: {
                color: [[COLORS.primary4], [COLORS.primary2, 800]],
                opacity: [[0.3], [0.25, 800]],
              },
              end: {
                color: [[COLORS.primary1], [COLORS.primary4, 800]],
                opacity: [[0.75], [0.9, 800]],
              },
            },
          },
        },
      },
    },
  },
  name: "Thumbnail Modal Gradient Change at 800px",
};

export const ThumbnailOptions6: Story = {
  args: {
    items: items,
    options: {
      styling: {
        elements: {
          arrowLeft: {
            svgHref: [
              [customButtons.arrowLeft.svgHref],
              [customButtons.nextButton.svgHref, 800],
            ],
            fillColor: [["red"], ["green", 800]],
            style: customButtons.arrowLeft.style,
          },
          dots: {
            svgHref: [
              [customButtons.dots.svgHref],
              [customButtons.playButton.svgHref, 800],
            ],
            fillColor: [["red"], ["green", 800]],
          },
        },
      },
    },
  },
  name: "Dots and Left Arrow Change Svgs and Color at 800px",
};

export const ThumbnailOptions7: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        modal: {
          padding: {
            top: [[22], [7, 800]],
            right: [[30], [10, 800]],
            bottom: [[22], [7, 800]],
            left: [[30], [10, 800]],
          },
        },
      },
    },
  },
  name: "Video Modal Padding Changes at 800px",
};

export const ThumbnailOptions8: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
      styling: {
        fontFamily: {
          all: [["monospace"], ["sans-serif", 800]],
        },
      },
    },
  },
  name: "Font Changes Everywhere at 800px",
};

export const ThumbnailOptions9: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
      styling: {
        fontFamily: {
          itemViewer: [["monospace"], ["sans-serif", 800]],
        },
      },
    },
  },
  name: "Font Changes in ItemViewer at 800px",
};

export const ThumbnailOptions10: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
        },
      },
      styling: {
        fontFamily: {
          navigation: [["monospace"], ["sans-serif", 800]],
        },
      },
    },
  },
  name: "Font Changes in Thumbnails at 800px",
};

export const ThumbnailOptions11: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        seekAmount: [[4000], [8000, 800]],
      },
    },
  },
  name: "Seek Amount in ItemViewer Changes at 800px",
};

export const ThumbnailOptions12: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        autoHideToolbarDuration: [[1000], [5000, 800]],
      },
    },
  },
  name: "Item Viewer Auto Hide Duration Changes at 800px",
};

export const ThumbnailOptions13: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        toolbar: {
          elements: {
            color: [["white"], ["red", 800]],
          },
        },
      },
    },
  },
  name: "Toolbar Elements' Color Changes at 800px",
};