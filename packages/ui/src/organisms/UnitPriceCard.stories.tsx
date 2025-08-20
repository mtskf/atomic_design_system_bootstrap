import type { Meta, StoryObj } from '@storybook/react';
import { UnitPriceCard } from './UnitPriceCard';

const meta: Meta<typeof UnitPriceCard> = {
  title: 'Organisms/UnitPriceCard',
  component: UnitPriceCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PositiveChange: Story = {
  args: {
    data: {
      price: 1.2345,
      change: 0.0123,
      changePct: 1.01,
      asOfDate: new Date('2024-01-15'),
      note: 'Unit price updated daily',
    },
  },
};

export const NegativeChange: Story = {
  args: {
    data: {
      price: 1.2222,
      change: -0.0123,
      changePct: -0.99,
      asOfDate: new Date('2024-01-15'),
      note: 'Unit price updated daily',
    },
  },
};

export const NoChange: Story = {
  args: {
    data: {
      price: 1.2345,
      change: 0,
      changePct: 0,
      asOfDate: new Date('2024-01-15'),
      note: 'Unit price updated daily',
    },
  },
};

export const WithoutNote: Story = {
  args: {
    data: {
      price: 1.2345,
      change: 0.0123,
      changePct: 1.01,
      asOfDate: new Date('2024-01-15'),
    },
  },
};

export const HighValue: Story = {
  args: {
    data: {
      price: 15.6789,
      change: 0.1234,
      changePct: 0.79,
      asOfDate: new Date('2024-01-15'),
      note: 'High growth fund',
    },
  },
};
