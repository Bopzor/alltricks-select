import React from 'react';

import Select from './Select';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Select',
  component: Select,
}

const Template = (args) => <Select {...args} />;

const options = [
  {
    size: 'S',
    value: 10,
    stock: 2,
    price: '18.00 €'
  },
  {
    size: 'M',
    value: 11,
    stock: 5,
    price: '18.00 €'
  },
  {
    size: 'L',
    value: 12,
    stock: 0,
    price: '18.00 €'
  },
  {
    size: 'XL',
    value: 13,
    stock: 2,
    price: '22.00 €'
  },
];

export const Default = Template.bind({});
Default.args = {
  options,
};

export const EmptyOption = Template.bind({});
EmptyOption.args = {
  options: [],
};
