import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '../Select';

const mockOptions = [
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

describe('Select', () => {
  it('should display "Veuillez sélectionner" when no value is selected', () => {
    render(<Select options={[]} />);

    expect(screen.getByText('Veuillez sélectionner')).toBeVisible();
  });

  it('should open options selection on user click', async () => {
    render(<Select options={[]} />);

    await userEvent.click(screen.getByText('Veuillez sélectionner'));

    expect(screen.getByText('Article non disponible')).toBeVisible();
  });

  it('should display "Article non disponible" after user click if no options', async () => {
    render(<Select options={[]} />);

    await userEvent.click(screen.getByText('Veuillez sélectionner'));

    expect(screen.getByText('Article non disponible')).toBeVisible();
  });

  it('should display "Taille :" after user click if there are options', async () => {
    render(<Select options={mockOptions} />);

    await userEvent.click(screen.getByText('Veuillez sélectionner'));

    expect(screen.getByText('Taille :')).toBeVisible();
  });

  it('should display available options after user click if any', async () => {
    render(<Select options={mockOptions} />);

    await userEvent.click(screen.getByText('Veuillez sélectionner'));

    expect(screen.getByText('S', { selector: 'span' })).toBeVisible();
    expect(screen.getByText('M', { selector: 'span' })).toBeVisible();
    expect(screen.getByText('L', { selector: 'span' })).toBeVisible();
    expect(screen.getByText('XL', { selector: 'span' })).toBeVisible();
  });

  it('should display "S" after user select "S" value', async () => {
    render(<Select options={mockOptions} />);

    await userEvent.click(screen.getByText('Veuillez sélectionner'));
    await userEvent.click(screen.getByText('S', { selector: 'span' }));

    expect(screen.getByText('S', { selector: 'span' })).toBeVisible();
  });
});
