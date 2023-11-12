import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { COLORS } from "./assets/colors";
import { marginTop } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Theme",
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
    options: {
      styling: {
        colorTheme: {
          colorOne: COLORS.primary1,
          colorTwo: COLORS.primary2,
          colorThree: COLORS.primary2,
          colorFour: COLORS.primary3,
          colorFive: COLORS.primary4,
        },
      },
    },
  },
  name: "Change All theme Values - Default Display Location",
};

export const Story2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        colorTheme: {
          colorOne: COLORS.primary4,
          colorTwo: COLORS.primary2,
          colorThree: COLORS.primary2,
          colorFour: COLORS.primary3,
          colorFive: COLORS.primary1,
        },
      },
    },
  },
  name: "Change All theme Values - Above Display Location",
};

export const Story3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        colorTheme: {
          colorOne: COLORS.primary4,
          colorTwo: COLORS.primary2,
          colorThree: COLORS.primary2,
          colorFour: COLORS.primary3,
          colorFive: COLORS.primary1,
        },
      },
    },
  },
  name: "Change All theme Values - Below Display Location",
};

export const Story4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        colorTheme: {
          colorOne: {
            nonFullscreen: COLORS.primary4,
          },
          colorTwo: {
            nonFullscreen: COLORS.primary3,
          },
          colorThree: {
            nonFullscreen: COLORS.primary3,
          },
          colorFour: {
            nonFullscreen: COLORS.primary2,
          },
          colorFive: {
            nonFullscreen: COLORS.primary1,
          },
        },
      },
    },
  },
  name: "Change All theme Values but Default when Fullscreen - Above Display Location",
};

export const Story5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      container: {
        style: {
          borderRadius: 0,
        },
      },
      thumbnail: {
        size: 200,
        descriptionOverlay: {
          hideDescriptionOverlayUnlessHovered: false,
          textColor: COLORS.primary4,
        },
      },
      styling: {
        colorTheme: {
          colorOne: COLORS.primary1,
          colorTwo: COLORS.primary2,
          colorThree: COLORS.primary3,
          colorFour: COLORS.primary3,
          colorFive: COLORS.primary4,
        },
        container: {
          backgroundColor: COLORS.primary1,
        },
        modal: {
          backgroundColor: COLORS.primary1,
          textColor: COLORS.primary3,
        },
        itemViewer: {
          loadingSpinner: {
            options: {
              color: 'white',
            }
          }
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary2,
            textOrForegroundColor:COLORS.primary3,
            screenshotViewer: {
              textOrForegroundColor: COLORS.primary4,
            },
          },
        },
      },
    },
  },
  name: "Can Handle Overrides",
};
