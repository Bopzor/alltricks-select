import React from 'react';

import { action } from '@storybook/addon-actions';

import OptionDisplay from './OptionDisplay';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'OptionDisplay',
  component: OptionDisplay,
  argTypes: { onSelect: { action: 'selected' } },
}

const Template = (args) => <OptionDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'S',
  value: 10,
  stock: 2,
  price: '18.00 €',
  onSelect: action('onSelect'),
};
