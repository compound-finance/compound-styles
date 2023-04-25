import { createButton } from './Button';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ size, color, label, onClick }) => {
    // You can either use a function to create DOM elements or use a plain html string!
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



