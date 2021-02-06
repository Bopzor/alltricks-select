import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OptionDisplay from '../OptionDisplay';

describe('OptionDisplay', () => {
  it('should display S as size', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 2,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('S')).toBeVisible();
  });

  it('should display "Vite plus que 2 en stock !" as content if stock if < 10', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 2,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('Vite plus que 2 en stock !')).toBeVisible();
  });

  it('should display "C\'est le dernier, dépêchez vous !" as content if stock === 1', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 1,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('C\'est le dernier, dépêchez vous !')).toBeVisible();
  });

  it('should display "Epuisé" as content if stock === 0', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 0,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('Epuisé')).toBeVisible();
  });

  it('should display "En sotck" as content if stock >= 10', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 10,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('En stock')).toBeVisible();
  });

  it('should display "18.00 €" as price', () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 10,
      price: '18.00 €'
    };

    render(<OptionDisplay {...option} onSelect={jest.fn} />);

    expect(screen.getByText('18.00 €')).toBeVisible();
  });

  it('should display call "onSelect" with 10 on user click', async () => {
    const option = {
      size: 'S',
      value: 10,
      stock: 10,
      price: '18.00 €'
    };

    const mockOnSelect = jest.fn();

    render(<OptionDisplay {...option} onSelect={mockOnSelect} />);

    await userEvent.click(screen.getByText('S'));

    expect(mockOnSelect).toHaveBeenCalledWith(10);
  });
});
