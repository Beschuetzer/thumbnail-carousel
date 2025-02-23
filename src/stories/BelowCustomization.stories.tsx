import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container } from "./decorators";
import { COLORS } from "./assets/colors";
import { customButtons } from "./custom-buttons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Below Customization",
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

export const BelowCustomization1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
    },
  },
  name: "Default",
};

export const BelowCustomization2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        fontFamily: {
          itemViewer: "monospace",
        },
      },
    },
  },
  name: "Thumbnail 100px and Monospace Font Family for ItemViewer",
};

export const BelowCustomization3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        container: {
          padding: {
            top: 50,
            bottom: 50,
            right: 100,
            left: 100,
          },
        },
      },
    },
  },
  name: "Custom Container Padding All Directions",
};

export const BelowCustomization4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        itemViewer: {
          padding: {
            right: 100,
            left: 100,
          },
        },
      },
    },
  },
  name: "Custom ItemViewer Padding",
};

export const BelowCustomization5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        navigation: {
          padding: {
            right: 100,
            left: 100,
          },
        },
      },
    },
  },
  name: "Custom Navigation Padding",
};

export const BelowCustomization6: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        container: {
          padding: {
            right: 100,
            left: 100,
          },
        },
        toolbar: {
          progressBar: {
            shouldSpanContainerWidth: true,
          },
        },
      },
    },
  },
  name: "Progressbar Spans Width",
};

export const BelowCustomization7: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        container: {
          padding: {
            left: 5,
            right: 50,
            top: 5,
            bottom: 50,
          },
        },
      },
    },
  },
  name: "Disparate Container Padding",
};

export const BelowCustomization8: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        navigation: {
          backgroundColor: COLORS.primary4,
          elements: {
            color: COLORS.primary1,
          },
        },
        itemViewer: {
          backgroundColor: COLORS.primary4,
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary1,
            textOrForegroundColor: COLORS.primary2,
          },
          backgroundColor: COLORS.primary1,
          padding: {
            left: 20,
            right: 20,
          },
          elements: {
            color: COLORS.primary4,
          },
          textColor: COLORS.primary4,
        },
      },
    },
  },
  name: "Display Below Flush and Custom Colors",
};

export const BelowCustomization9: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        toolbar: {
          progressBar: {
            showCurrentPositionOnChange: true,
          },
        },
      },
    },
  },
  name: "Progress Bar Shows Previous Location on Change",
};

export const BelowCustomization10: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        elements: {
          all: {
            fillColor: COLORS.primary1,
          },
        },
      },
    },
  },
  name: "Changing All Element Colors",
};

export const BelowCustomization11: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        toolbar: {
          textColor: COLORS.primary1,
        },
        elements: {
          fullscreenButton: {
            ...customButtons.fullScreenButton,
            fillColor: COLORS.primary1,
          },
          closeButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.closeButton.svgHref,
          },
          arrowLeft: {
            ...customButtons.arrowLeft,
            fillColor: COLORS.primary1,
          },
          arrowRight: {
            ...customButtons.arrowRight,
            fillColor: COLORS.primary1,
          },
          dots: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.dots.svgHref,
          },
          nextButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.nextButton.svgHref,
          },
          pauseButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.pauseButton.svgHref,
          },
          playButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.playButton.svgHref,
          },
          previousButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.previousButton.svgHref,
          },
          seekBackButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.seekBackButton.svgHref,
          },
          seekForwardButton: {
            fillColor: COLORS.primary1,
            svgHref: customButtons.seekForwardButton.svgHref,
          },
        },
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    },
  },
  name: "Custom Icons with Same Background Color",
};

export const BelowCustomization12: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        elements: {
          closeButton: {
            fillColor: COLORS.primary1,
          },
          arrowLeft: {
            fillColor: COLORS.primary1,
          },
          arrowRight: {
            fillColor: COLORS.primary1,
          },
          dots: {
            fillColor: COLORS.primary1,
          },
          nextButton: {
            fillColor: COLORS.primary1,
          },
          pauseButton: {
            fillColor: COLORS.primary1,
          },
          playButton: {
            fillColor: COLORS.primary1,
          },
          previousButton: {
            fillColor: COLORS.primary1,
          },
          seekBackButton: {
            fillColor: COLORS.primary1,
          },
          seekForwardButton: {
            fillColor: COLORS.primary1,
          },
          fullscreenButton: {
            fillColor: COLORS.primary1,
          },
        },
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary4,
            textOrForegroundColor: COLORS.primary1,
          },
        },
      },
    },
  },
  name: "Custom Progressbar Color",
};

export const BelowCustomization13: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        elements: {
          all: {
            fillColor: COLORS.primary1,
          },
          arrowLeft: {
            fillColor: COLORS.primary2,
          },
          arrowRight: {
            fillColor: COLORS.primary2,
          },
          dots: {
            fillColor: COLORS.primary2,
          },
        },
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary4,
            textOrForegroundColor: COLORS.primary2,
          },
        },
      },
    },
  },
  name: "Custom Colors using All Option and Item Specific Overrides",
};

export const BelowCustomization14: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      styling: {
        elements: {
          all: {
            fillColor: COLORS.primary1,
          },
          arrowLeft: {
            fillColor: COLORS.primary2,
          },
          arrowRight: {
            fillColor: COLORS.primary2,
          },
          dots: {
            fillColor: COLORS.primary2,
          },
        },
        itemViewer: {
          loadingSpinner: {
            type: "circle",
            options: {
              textColor: COLORS.primary1,
              spinnerColor: COLORS.primary2,
              radius: 100,
              width: 15,
            },
          },
        },
        fontFamily: {
          itemViewer: "monospace",
        },
        container: {
          backgroundColor: COLORS.primary4,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary4,
            textOrForegroundColor: COLORS.primary2,
          },
          textColor: COLORS.primary2,
        },
        modal: {
          fontSize: 16,
          padding: {
            top: 30,
            bottom: 30,
            left: 60,
            right: 60,
          },
          closeButton: {
            fill: COLORS.primary1,
          },
          backgroundColor: `linear-gradient(270deg, #fff, #ccc)`,
          textColor: COLORS.primary1,
          widthInPercent: 90,
        },
      },
    },
  },
  name: "Custom Modal Style and Loading Spinner",
};

export const BelowCustomization15: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 100,
      },
      navigation: {
        autoChangePage: false,
      },
    },
  },
  name: "No Tracking Current Item",
};
