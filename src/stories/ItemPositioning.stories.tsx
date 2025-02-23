import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Item Positiong",
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

export const ItemPositioning1: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "left",
      },
      thumbnail: {
        size: 175,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Left in Container with Default Spacing",
};

export const ItemPositioning2: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "left",
      },
      thumbnail: {
        size: 175,
        spacing: [[10]],
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Left in Container with Custom Item Spacing",
};

export const ItemPositioning3: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "left",
      },
      navigation: {
        isLastPageFlush: false,
      },
      thumbnail: {
        size: 175,
        spacing: 10,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Left in Container with Custom Item Spacing and Last Page not Flush",
};

export const ItemPositioning4: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "center",
      },
      thumbnail: {
        size: 175,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Center in Container with Default Spacing",
};

export const ItemPositioning5: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "center",
      },
      thumbnail: {
        size: 175,
        spacing: [[10]],
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Center in Container with Custom Item Spacing",
};

export const ItemPositioning6: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "center",
      },
      navigation: {
        isLastPageFlush: false,
      },
      thumbnail: {
        size: 175,
        spacing: 10,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Center in Container with Custom Item Spacing and Last Page not Flush",
};

export const ItemPositioning7: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "right",
      },
      thumbnail: {
        size: 175,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Right in Container with Default Spacing",
};

export const ItemPositioning8: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "right",
      },
      thumbnail: {
        size: 175,
        spacing: [[10]],
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Right in Container with Custom Item Spacing",
};

export const ItemPositioning9: Story = {
  args: {
    items: items.slice(0, items.length - 1),
    options: {
      layout: {
        thumbnailPositioning: "right",
      },
      navigation: {
        isLastPageFlush: false,
      },
      thumbnail: {
        size: 175,
        spacing: 10,
        descriptionOverlay: {
          isDisabled: false,
        },
      },
    },
  },
  name: "Thumbnails Positioned Right in Container with Custom Item Spacing and Last Page not Flush",
};

export const ItemPositioning10: Story = {
  args: {
    items: items.slice(0, 5),
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      thumbnail: {
        size: 150,
      },
    },
  },
  name: "Thumbnails Positioned Left in Container One Page",
};

export const ItemPositioning11: Story = {
  args: {
    items: items.slice(0, 5),
    options: {
      layout: {
        thumbnailPositioning: "center",
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 150,
      },
    },
  },
  name: "Thumbnails Positioned Center in Container One Page",
};

export const ItemPositioning12: Story = {
  args: {
    items: items.slice(0, 5),
    options: {
      layout: {
        thumbnailPositioning: "right",
        itemDisplayLocation: "above",
      },
      thumbnail: {
        size: 150,
      },
    },
  },
  name: "Thumbnails Positioned Right in Container One Page",
};
