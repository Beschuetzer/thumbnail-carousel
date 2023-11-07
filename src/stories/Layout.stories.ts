import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '../components/Carousel'
import { items } from './items';
import { COLORS } from './colors';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Thumbnail-Carousel/Layout',
  component: Carousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'full-screen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Layout1: Story = {
  args: {
    items: items.slice(0, 1)
  },
  name: "One Item",

};

export const Layout2: Story = {
  args: {
    items: items.slice(0, 2)
  },
  name: "Two Items",

};

export const Layout3: Story = {
  args: {
    items: items.slice(0, 3)
  },
  name: "Three Items",

};

export const Layout4: Story = {
  args: {
    items: items.slice(0, 3),
		options: {
			thumbnail: {
				spacingStrategy: 'max',
			}
		}
  },
  name: "Three Items - Spacing Strategy Max",

};

export const Layout5: Story = {
  args: {
    items: items
  },
  name: "Multiple Pages - All Defaults",
};

export const Layout6: Story = {
  args: {
    items: items,
    options: {
      styling: {
        container: {
          padding: {
            left: 40,
            right: 40,
          },
          margin: {
            bottom: 40,
            top: 40,
          },
        }
      }
    }
  },
  name:  "Multiple Pages - Custom Padding and Margin"
};

export const Layout7: Story = {
  args: {
    items: items,
    options: {
      styling: {
        modal: {
          backgroundColor: COLORS.primary4,
          textColor: COLORS.primary1,
          closeButton: {
            fill: COLORS.primary1,
            size: [[18, 550, "max-width"], [20, 655, "max-width"], [24, 900, "min-width"]],
          }
        },
        itemViewer: {
          backgroundColor: COLORS.primary4,
        },
        toolbar: {
          progressBar: {
            backgroundColor: COLORS.primary4,
            textOrForegroundColor: COLORS.primary1,
          },
          textColor: COLORS.primary2,
        },
        elements: {
          all: {
            fillColor: COLORS.primary2,
          }
        }
      }
    }
  },
  name: "Multiple Pages - Custom Item Viewer Colors",
};

export const Layout8: Story = {
  args: {
    items: items,
    options: {
			layout: {
				itemDisplayLocation: 'above',
			},
			styling: {
				fontFamily: {
					itemViewer: 'monospace',
				}
			}
		}
  },
  name: "Display Current Item Above with Custom itemHeight and Font Family",
};

export const Layout9: Story = {
  args: {
    items: items,
    options: {
			layout: {
				itemDisplayLocation: 'above',
			},
			thumbnail: {
				spacingStrategy: 'max',
			},
		}
  },
  name: "Display Current Item Above with Max Spacing Strategy",
};

export const Layout10: Story = {
  args: {
    items: items,
    options: {
			layout: {
				itemDisplayLocation: 'below',
			},
			thumbnail: {
				size: 100,
				descriptionOverlay: {
					isDisabled: false,
				}
			},
			styling: {
				container: {
					padding: {
						bottom: 0,
					}
				}
			}
		}
  },
  name: "Display Current Item Below with Custom Thumbnail Size, Height, and Font-size",
};

export const Layout11: Story = {
  args: {
    items: items,
    options: {
			layout: {
				itemDisplayLocation: 'above',
				isToolbarPositionedInVideo: false,
			},
			thumbnail: {
				size: 100,
				descriptionOverlay: {
					isDisabled: false,
				}
			},
		}
  },
  name: "Video Toolbar not Embedded Inside Video",
};

export const Layout12: Story = {
  args: {
    items: items,
    options: {
			layout: {
				itemDisplayLocation: 'below',

			},
			styling: {
				itemViewerPreview: {
					isVisibleInNonFullscreenMode: true,
				},
				toolbar: {
					progressBar: {
						screenshotViewer: {
							thumbnailWidth: 200,
						},
					},
				},
			}
		}
  },
  name: "Smaller Screenshot Viewer",
};