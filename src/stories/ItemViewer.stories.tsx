import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { container, paddingTop } from "./decorators";
import { customButtons } from "./custom-buttons";

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
  decorators: container,
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

export const Story7: Story = {
  args: {
    items: items,
    options: {
      styling: {
        fontFamily: {
          itemViewer: "monospace",
        },
      },
    },
  },
  name: "Custom Item Viewer Font",
};

export const Story8: Story = {
  args: {
    items: items,
    options: {
      styling: {
        fontFamily: {
          navigation: "monospace",
        },
      },
    },
  },
  name: "Custom Navigation Font",
};

export const Story9: Story = {
  args: {
    items: items,
    options: {
      styling: {
        fontFamily: {
          all: "monospace",
        },
      },
    },
  },
  name: "Custom Navigation and Item Viewer Fonts",
};

export const Story10: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        disableSwiping: true,
      },
    },
  },
  name: "Full-screen Swiping Disabled",
};

export const Story11: Story = {
  args: {
    items: items,
    options: {
      itemViewer: {
        maxClickThreshold: 0,
      },
    },
  },
  name: "Full-screen Max Click Threshold 0",
};

export const Story12: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        modal: {
          opacityWhenMinimized: 0.15,
        },
      },
    },
  },
  name: "Modal Minimized Opacity is .15",
};

export const Story13: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      modal: {
        minimizeOnClick: false,
      },
    },
  },
  name: "Modal only Minimized via Close Button",
};

export const Story14: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      modal: {
        maintainMinimizedStateAcrossItems: false,
      },
    },
  },
  name: "Modal Remains Open When Switching Items",
};


export const Story14_2: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      modal: {
        maintainMinimizedStateAcrossItems: {
          nonFullscreen: false,
        },
      },
    },
  },
  name: "Modal Remains Open When Switching Items (only non-fullscreen)",
};

export const Story15: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        modal: {
          width: {
            fullscreen: "50%",
            nonFullscreen: "100%",
          }
        },
      },
    },
  },
  name: "Modal can take custom width",
};
