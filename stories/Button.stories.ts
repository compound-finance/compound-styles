import { createButton } from './Button';

enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'x-large',
}

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
      options: ['small', 'large', 'x-large'],
    },
    color: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const XLarge = {
  args: {
    size: 'x-large',
    label: 'Button',
  },
};



