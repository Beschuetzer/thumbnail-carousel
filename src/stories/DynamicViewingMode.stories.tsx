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
  title: "Thumbnail-Carousel/Dynamic Settings Based on Viewing Mode",
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
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        itemViewer: {
          padding: {
            left: [[30], [1, 800]],
            right: [[60], [10, 800]],
          },
        },
        navigation: {
          padding: {
            left: [[60], [10, 800]],
            right: [[30], [1, 800]],
          },
        },
        modal: {
          padding: {
            top: 40,
            fullscreen: {
              bottom: [[30], [1, 800]],
              right: [[60], [10, 800]],
              top: 80,
            },
            nonFullscreen: {
              right: [[30], [1, 800]],
              left: [[60], [10, 800]],
            },
          },
        },
        container: {
          padding: {
            bottom: [[50], [10, 800]],
            top: [[50], [10, 800]],
            left: [[50], [10, 800]],
            right: [[50], [10, 800]],
          },
        },
        toolbar: {
          padding: {
            top: 40,
            fullscreen: {
              left: [[30], [1, 800]],
              right: [[60], [10, 800]],
            },
            nonFullscreen: {
              right: [[30], [1, 800]],
              left: [[60], [10, 800]],
            },
          },
        },
        itemViewerPreview: {
          text: {
            container: {
              padding: {
                top: 50,
                fullscreen: [
                  [
                    {
                      left: 10,
                      right: 10,
                      bottom: 25,
                    },
                  ],
                  [
                    {
                      top: 10,
                      bottom: 10,
                      left: 20,
                      right: 20,
                    },
                    800,
                  ],
                ],
                nonFullscreen: [
                  [
                    {
                      top: 10,
                      bottom: 10,
                      left: 20,
                      right: 20,
                    },
                  ],
                  [
                    {
                      top: 20,
                      bottom: 20,
                      left: 10,
                      right: 10,
                    },
                    800,
                  ],
                ],
              },
            },
          },
        },
      },
    },
  },
  name: "Padding Changes Everywhere",
};

export const Story2: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
      },
      styling: {
        toolbar: {
          elements: {
            color: {
              fullscreen: [["red"], ["blue", 800]],
              nonFullscreen: [["yellow"], ["green", 800]],
            },
          },
        },
      },
    },
  },
  name: "Toolbar Button Colors Change",
};

export const Story3: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        videoCurrentStateIndicator: {
          backgroundColor: {
            fullscreen: [[COLORS.primary1], [COLORS.primary2, 800]],
            nonFullscreen: [[COLORS.primary3], [COLORS.primary4, 800]],
          },
          textOrForegroundColor: {
            fullscreen: [["red"], ["green", 800]],
            nonFullscreen: [["yellow"], ["blue", 800]],
          },
          size: {
            fullscreen: [[32], [26, 800]],
            nonFullscreen: [[24], [20, 800]],
          },
          playIcon: {
            fillColor: [["purple"], ["black", 800]],
            svgHref: {
              fullscreen: [
                [customButtons.playButton.svgHref],
                [customButtons.seekForwardButton.svgHref, 800],
              ],
              nonFullscreen: [
                [customButtons.seekForwardButton.svgHref],
                [customButtons.playButton.svgHref, 800],
              ],
            },
          },
          pauseIcon: {
            svgHref: {
              fullscreen: [
                [customButtons.pauseButton.svgHref],
                [customButtons.seekBackButton.svgHref, 800],
              ],
              nonFullscreen: [
                [customButtons.seekBackButton.svgHref],
                [customButtons.pauseButton.svgHref, 800],
              ],
            },
            style: {
              transform: "translate(-10%, 0)",
            },
          },
        },
      },
    },
  },
  name: "Video Current State Indicator Changes",
};

export const Story4: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "above",
      },
      styling: {
        modal: {
          padding: {
            top: 40,
            fullscreen: {
              bottom: [[30], [1, 800]],
              right: [[60], [10, 800]],
              top: 80,
            },
            nonFullscreen: {
              right: [[30], [1, 800]],
              left: [[60], [10, 800]],
            },
          },
        },
        container: {
          padding: {
            bottom: 100,
            top: 100,
            right: 100,
            left: 100,
          },
        },
        toolbar: {
          padding: {
            left: 100,
            fullscreen: {
              left: [[30], [1, 800]],
              right: [[60], [10, 800]],
            },
          },
        },
        itemViewerPreview: {
          isVisibleInNonFullscreenMode: [[true], [false, 600]],
          backgroundColor: {
            fullscreen: [["grey"], ["rgba(0,0,2323,.9)", 800]],
            nonFullscreen: [["#ff0"], ["rgb(0,25500,00)", 800]],
          },
          border: {
            nonFullscreen: [
              ["3px solid #abc123"],
              ["5px dotted purple", 900, "max-width"],
              ["1px ridge teal", 750, "max-width"],
              ["thick double green", 1000, "min-width"],
            ],
          },
          borderRadius: {
            fullscreen: [[0], [100, 800]],
          },
          width: {
            nonFullscreen: [[500, 800]],
          },
          height: {
            fullscreen: [[250], [150, 800]],
            nonFullscreen: [[200, 800]],
          },
          image: {
            fit: {
              fullscreen: [["contain", 800]],
              nonFullscreen: [["contain"], ["fill", 800]],
            },
            position: {
              fullscreen: [["left"], ["center", 800]],
              nonFullscreen: [["top"], ["right", 800]],
            },
          },
          opacity: [[0.9], [0.25, 800]],
          swapImageAndText: {
            fullscreen: [[true], [false, 800]],
            nonFullscreen: [[false], [true, 800]],
          },
          text: {
            body: {
              color: {
                fullscreen: [["green"], ["red", 800]],
                nonFullscreen: [["red"], ["green", 800]],
              },
              size: {
                fullscreen: [[16], [12, 800]],
                nonFullscreen: [[14], [10, 800]],
              },
              fontFamily: {
                fullscreen: [["monospace"], ["cursive", 800]],
                nonFullscreen: [["serif"], ["fantasy", 800]],
              },
            },
            header: {
              color: {
                fullscreen: [["red"], ["green", 800]],
                nonFullscreen: [["green"], ["red", 800]],
              },
              size: {
                fullscreen: [[18], [14, 800]],
                nonFullscreen: [[16], [12, 800]],
              },
              fontFamily: {
                fullscreen: [["monospace"], ["cursive", 800]],
                nonFullscreen: [["serif"], ["fantasy", 800]],
              },
            },
            container: {
              padding: {
                top: 50,
                fullscreen: [
                  [
                    {
                      left: 10,
                      right: 10,
                      bottom: 25,
                    },
                  ],
                  [
                    {
                      top: 10,
                      bottom: 10,
                      left: 20,
                      right: 20,
                    },
                    800,
                  ],
                ],
                nonFullscreen: [
                  [
                    {
                      top: 10,
                      bottom: 10,
                      left: 20,
                      right: 20,
                    },
                  ],
                  [
                    {
                      top: 20,
                      bottom: 20,
                      left: 10,
                      right: 10,
                    },
                    800,
                  ],
                ],
              },
              verticalAlignment: {
                fullscreen: [["center"], ["flex-end", 800]],
                nonFullscreen: [["flex-end"], ["center", 800]],
              },
            },
          },
        },
      },
    },
  },
  name: "Item Viewer Preview Changes",
};

export const Story5: Story = {
  args: {
    items: items,
    options: {
      layout: {
        itemDisplayLocation: "below",
        useDefaultVideoControls: [[false], [true, 800]],
        isToolbarPositionedInVideo: [[true], [false, 1200, "max-width"]],
      },
      styling: {
        modal: {
          backgroundColor: [["red"], ["blue", 1200]],
          textColor: [["blue"], ["red", 1200]],
        },
        itemViewerPreview: {
          isVisibleInNonFullscreenMode: true,
        },
        toolbar: {
          progressBar: {
            dot: {
              isAlwaysVisible: [[false], [true, 1400]],
              transitionDuration: [[0.25], [0.1, 850]],
            },
            sectionGap: 4,
          },
        },
      },
    },
  },
  name: "Video Controls Change Dynamically based on Viewing Mode",
};
