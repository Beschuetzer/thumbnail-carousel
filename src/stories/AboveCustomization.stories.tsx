import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { decorators } from "./decorators";
import { COLORS } from "./assets/colors";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Above Customization",
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "full-screen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: decorators,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AboveCustomization1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
    },
  },
  name: "Default",
};

export const AboveCustomization2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
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

export const AboveCustomization3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
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

export const AboveCustomization4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
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

export const AboveCustomization5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
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

export const AboveCustomization6: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        toolbar: {
          padding: {
            right: 100,
            left: 100,
          },
          progressBar: {
            shouldSpanContainerWidth: true,
          },
        },
      },
    },
  },
  name: "Progressbar Spans Width",
};

export const AboveCustomization7: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        container: {
          padding: {
            left: 5,
            right: 50,
          },
        },
      },
    },
  },
  name: "Different Left and Right Container Padding",
};

export const AboveCustomization8: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        itemDisplayLocation: "above",
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
  name: "Display Above Flush and Custom Colors",
};