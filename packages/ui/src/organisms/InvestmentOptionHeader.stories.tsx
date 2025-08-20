import type { Meta, StoryObj } from '@storybook/react';
import { InvestmentOptionHeader } from './InvestmentOptionHeader';

const meta: Meta<typeof InvestmentOptionHeader> = {
  title: 'Organisms/InvestmentOptionHeader',
  component: InvestmentOptionHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onSwitchClick: { action: 'switch clicked' },
    onViewAllClick: { action: 'view all clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    meta: {
      name: 'Balanced Growth',
      category: 'Growth',
      horizonYears: 7,
      srmLevel: 4,
      objectiveText: 'A balanced approach to growth with moderate risk',
      updatedAt: new Date('2024-01-15'),
    },
  },
};

export const Conservative: Story = {
  args: {
    meta: {
      name: 'Conservative',
      category: 'Conservative',
      horizonYears: 3,
      srmLevel: 2,
      objectiveText: 'Lower risk investment with stable returns',
      updatedAt: new Date('2024-01-10'),
    },
  },
};

export const Aggressive: Story = {
  args: {
    meta: {
      name: 'High Growth',
      category: 'Growth',
      horizonYears: 10,
      srmLevel: 6,
      objectiveText: 'Higher risk investment targeting maximum growth',
      updatedAt: new Date('2024-01-20'),
    },
  },
};

export const WithoutObjective: Story = {
  args: {
    meta: {
      name: 'Index Fund',
      category: 'Index',
      horizonYears: 5,
      srmLevel: 3,
      updatedAt: new Date('2024-01-12'),
    },
  },
};
