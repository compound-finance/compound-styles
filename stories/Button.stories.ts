import { createButton, ButtonSize } from './Button';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ size, color, label, onClick }) => {
    // alternatively, can use plain HTML string to return element
    // return `<div>${label}</div>`;
    return createButton({ size, color, label, onClick });
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large, ButtonSize.XLarge],
    },
    color: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

export const Small = {
  args: {
    size: ButtonSize.Small,
    label: 'Button',
  },
};

export const Medium = {
  args: {
    size: ButtonSize.Medium,
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: ButtonSize.Large,
    label: 'Button',
  },
};

export const XLarge = {
  args: {
    size: ButtonSize.XLarge,
    label: 'Button',
  },
};



