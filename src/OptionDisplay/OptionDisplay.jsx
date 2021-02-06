import React from 'react';

import PropTypes from 'prop-types';

const OptionDisplay = ({ size, stock, price, value, onSelect }) => {
  const getStockInfo = (nbInStock) => {
    if (nbInStock === 0) {
      return 'Epuisé';
    }

    if (nbInStock === 1) {
      return 'C\'est le dernier, dépêchez vous !';
    }

    if (nbInStock < 10) {
      return `Vite plus que ${nbInStock} en stock !`;
    }

    return 'En stock';
  };

  const sotckInfo = getStockInfo(stock);

  return (
    <div value={value} onClick={() => onSelect(value)} className="option">
      <span className="option-size">{size}</span>
      <span className="option-stock">{sotckInfo}</span>
      <span className="option-price">{price}</span>
    </div>
  );
};

OptionDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL']).isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default OptionDisplay;
