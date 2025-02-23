import type { Meta, StoryObj } from "@storybook/react";
import clipHighRes from "./assets/clips/high-res.mp4";
import clipLowRes from "./assets/clips/low-res.mp4";
import clipNavigationThumbnail from "./assets/clips/replay-viewer/thumbnails/navigation-thumbnail.png";
import { Carousel } from "../components/Carousel";
import { items } from "./assets/items";
import { COLORS } from "./assets/colors";
import { container } from "./decorators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Thumbnail-Carousel/Video Section Validation",
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
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", "10:00"],
            ["Selecting the Regular Expression to Use for the Site", "3:00"],
            ["Selecting the Save Location", "4:00"],
            [
              "Downloading the All Files Recursively since Last Download Date",
              "10:00",
            ],
            ["Verifying the Downloaded Files", "12:00"],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "String - Ignores First Section Value",
};

export const Story2: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", "10:00"],
            ["Selecting the Regular Expression to Use for the Site", "3:00"],
            ["Selecting the Save Location", ""],
            [
              "Downloading the All Files Recursively since Last Download Date",
              "10:00",
            ],
            ["Verifying the Downloaded Files", "12:00"],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "String - Invalid Middle Section",
};

export const Story3: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", "10:00"],
            ["Selecting the Regular Expression to Use for the Site", "3:00"],
            ["Selecting the Save Location", "4:00"],
            [
              "Downloading the All Files Recursively since Last Download Date",
              "10:00",
            ],
            ["Verifying the Downloaded Files", ""],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "String - Invalid Last Section",
};

export const Story3_2: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", "10:00"],
            ["Selecting the Regular Expression to Use for the Site", "3:00"],
            ["Selecting the Save Location", "4:00"],
            [
              "Downloading the All Files Recursively since Last Download Date",
              "20:00",
            ],
            ["Verifying the Downloaded Files", ""],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "String - Invalid Start Time",
};

export const Story4_2: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", 1000],
            ["Selecting the Regular Expression to Use for the Site", 1000],
            ["Selecting the Save Location", 1000],
            [
              "Downloading the All Files Recursively since Last Download Date",
              -1,
            ],
            ["Verifying the Downloaded Files", 1000],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "Number - Throws with Negative Value",
};

export const Story4: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", 1000],
            ["Selecting the Regular Expression to Use for the Site", 1000],
            ["Selecting the Save Location", 1000],
            [
              "Downloading the All Files Recursively since Last Download Date",
              1000,
            ],
            ["Verifying the Downloaded Files", -1000],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "Number - Ignores Last Section Value",
};

export const Story5: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", 1000],
            ["Selecting the Regular Expression to Use for the Site", 1000],
            ["Selecting the Save Location", 1000],
            [
              "Downloading the All Files Recursively since Last Download Date",
              1432323244,
            ],
            ["Verifying the Downloaded Files"],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "Number - Sum of Values is Larger than Video Length",
};

export const Story6: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", 1000],
            ["Selecting the Regular Expression to Use for the Site", 1000],
            ["Selecting the Save Location", 1000],
            ["Downloading the All Files Recursively since Last Download Date"],
            ["Verifying the Downloaded Files"],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "Number - Invalid Middle Value",
};

export const Story7: Story = {
  args: {
    items: [
      {
        srcMain: {
          hiRes: clipHighRes,
          loRes: clipLowRes,
        },
        srcThumbnail: clipNavigationThumbnail,
        description: "Incorrect Sections Declaration",
        modal: {
          sections: [
            {
              title: "What happens when a section value is missing",
              text: "An alert will pop when this video is loaded since the 3rd section is missing a time value",
            },
          ],
        },
        video: {
          sections: [
            ["Ensuring Options are Correct", ""],
            ["Selecting the Regular Expression to Use for the Site", 1000],
            ["Selecting the Save Location", 1000],
            [
              "Downloading the All Files Recursively since Last Download Date",
              1000,
            ],
            ["Verifying the Downloaded Files", 1000],
          ],
        },
      },
    ],
    options: {
      styling: {
        toolbar: {
          progressBar: {},
        },
      },
      layout: {
        itemDisplayLocation: "above",
        isToolbarPositionedInVideo: [[false], [true, 751]],
      },
    },
  },
  name: "Number - Invalid First value",
};
