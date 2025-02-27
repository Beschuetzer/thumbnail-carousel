import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container, maringAllAround } from "./decorators";
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
  decorators: container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Story1: Story = {
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

export const Story2: Story = {
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

export const Story3: Story = {
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

export const Story4: Story = {
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

export const Story5: Story = {
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

export const Story6: Story = {
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

export const Story7: Story = {
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

export const Story8: Story = {
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

export const Story9: Story = {
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

export const Story10: Story = {
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

export const Story11: Story = {
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

export const Story12: Story = {
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

export const Story13: Story = {
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

export const Story15: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        toolbar: {
          backgroundColor: [["red"], ["black", 800]],
        },
        container: {
          backgroundColor: [["red"], ["black", 800]],
        },
        itemViewer: {
          backgroundColor: [["red"], ["black", 800]],
        },
        navigation: {
          backgroundColor: [["red"], ["black", 800]],
        },
        modal: {
          backgroundColor: [["white"], ["black", 800]],
          textColor: [["black"], ["white", 800]],
        },
      },
    },
  },
  name: "All Background Colors Changes at 800px",
};

export const Story16: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        disableWrapping: [[false], [true, 800]],
      },
    },
  },
  name: "Wrapping Disabled < 800px",
};

export const Story17: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
      },
      navigation: {
        autoChangePage: [[true], [false, 800]],
      },
    },
  },
  name: "Auto Change Page Disabled < 800px",
};

export const Story18: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        maxClickThreshold: [[0], [100, 800]],
      },
      itemViewer: {
        maxClickThreshold: [[0], [100, 800]],
      },
    },
  },
  name: "The amount of horiztonal movement needed to register swipe event increases < 800px",
};

export const Story19: Story = {
  args: {
    items: items,
    options: {
      navigation: {
        disableSwiping: [[false], [true, 800]],
      },
      itemViewer: {
        disableSwiping: [[false], [true, 800]],
      },
    },
  },
  name: "Swiping Disabled < 800px",
};

export const Story20: Story = {
  args: {
    items: items,
    options: {
      layout: {
        thumbnailPositioning: [["center"], ["right", 800]],
      },
      thumbnail: {
        size: 200,
      },
    },
  },
  name: "Thumbnail Positioning Right < 800px Otherwise Center",
};

export const Story21: Story = {
  args: {
    items: items,
    options: {
      layout: {
        thumbnailPositioning: [["center"], ["right", 800]],
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 100,
      },
    },
  },
  name: "Display Above Thumbnail Positioning Right < 800px Otherwise Center",
};

export const Story22: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: [["above"], ["none", 800]],
      },
      thumbnail: {
        size: 200,
      },
    },
  },
  name: "Item Display Location None < 800px Otherwise Above",
};

export const Story24: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        modal: {
          width: [[50], [undefined, 800]],
          textColor: [["red"], ["blue", 800]],
          fontSize: [[14], [10, 800]],
          closeButton: {
            fill: [["red"], [undefined, 800]],
          },
        },
      },
    },
  },
  name: "Video Modal Styling Changes < 800px",
};

export const Story25: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        toolbar: {
          textColor: [["grey"], ["orange", 800]],
          progressBar: {
            shouldSpanContainerWidth: [[false], [true, 800]],
          },
          elements: {
            color: [["white"], ["red", 800]],
          },
        },
      },
    },
  },
  name: "Toolbar Items and Progress Bar Width Change < 800px",
};

export const Story26: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          maxLineCount: [[2], [1, 800]],
          textColor: COLORS.primary4,
        },
      },
    },
  },
  name: "Thumbnail Max Line Count Changes at 800px",
};

export const Story27: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          textColor: [
            ["red"],
            ["green"],
            ["yellow", 1100],
            ["blue", 1500, "min-width"],
            ["orange", 800, "max-width"],
            ["teal", 600, "max-width"],
            ["grey", 400, "max-width"],
            ["purple", 1200, "min-width"],
          ],
        },
      },
    },
  },
  name: "Thumbnail Text Color Changes Based on Viewport",
};

export const Story28: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        currentItemBorder: [
          ["3px solid red"],
          ["3px dashed green"],
          ["1px dotted  yellow", 1100],
          ["5px solid blue", 1500, "min-width"],
          ["2px dotted orange", 800, "max-width"],
          ["1px ridge teal", 600, "max-width"],
          ["3px solid grey", 400, "max-width"],
          ["thick double purple", 1200, "min-width"],
        ],
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Current Item's Border Changes Based on Viewport",
};

export const Story29: Story = {
  args: {
    items: items,
    options: {
      thumbnail: {
        spacingStrategy: [["max"], ["min", 1200]],
      },
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Item Spacing Strategy Changes at 1200px",
};

export const Story30: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: [["above"], ["below", 1200]],
        isToolbarPositionedInVideo: [[true], [false, 800]],
      },
    },
  },
  name: "Toolbar Embedded in Video > 800px",
};
