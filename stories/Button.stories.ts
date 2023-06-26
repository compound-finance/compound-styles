import './Button';

export default {
  title: 'WebButton',
};

const Template = (args: any) => `<web-button label="${args.label}" size="${args.size}"></web-button>`;

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: '12px',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Button',
  size: '16px',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: '20px',
};