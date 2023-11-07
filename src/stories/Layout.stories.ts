import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '../components/Carousel'
import { items } from './items';

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
export const OneItem: Story = {
  args: {
    items: items.slice(0, 1)
  }
};

export const TwoItems: Story = {
  args: {
    items: items.slice(0, 2)
  }
};

export const ThreeItems: Story = {
  args: {
    items: items.slice(0, 3)
  }
};

export const ThreeItemsSpacingStrategyMax: Story = {
  args: {
    items: items.slice(0, 3),
		options: {
			thumbnail: {
				spacingStrategy: 'max',
			}
		}
  }
};


