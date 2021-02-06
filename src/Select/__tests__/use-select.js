import { act, renderHook } from '@testing-library/react-hooks';

import useSelect from '../use-select';

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

describe('useSelect', () => {
  it('should have open to false on mount', () => {
    const { result } = renderHook(() => useSelect(mockOptions));

    expect(result.current.open).toEqual(false);
  });

  it('should set open to true on first Toggle', () => {
    const { result } = renderHook(() => useSelect(mockOptions));

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.open).toEqual(true);
  });

  it('should set open to false on Toggle twice', () => {
    const { result } = renderHook(() => useSelect(mockOptions));

    act(() => {
      result.current.onToggle();
    });

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.open).toEqual(false);
  });

  it('should return "Veuillez sélectionner" on mount', () => {
    const { result } = renderHook(() => useSelect(mockOptions));

    expect(result.current.value).toEqual('Veuillez sélectionner');
  });

  it('should return "S" after value 10 selected', () => {
    const { result } = renderHook(() => useSelect(mockOptions));

    act(() => {
      result.current.handleSelect(10);
    });

    expect(result.current.value).toEqual('S');
  });
});
