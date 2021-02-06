import React from 'react';

import PropTypes from 'prop-types';

import OptionDisplay from '../OptionDisplay/OptionDisplay';
import useSelect from './use-select';

import '../styles.css';

const HiddenSelect = React.forwardRef(({ options }, ref) => (
  <select name="product-size" className="hidden-select" ref={ref}>
    <option></option>
    {options.map((option) => (
      <option key={option.size} value={option.value} data-stock={option.stock} data-price={option.price}>{option.size}</option>
    ))}
  </select>
));

const Select = ({ options }) => {
  const {
    value,
    open,

    selectRef,
    hiddenSelectRef,

    onToggle,
    handleSelect,
  } = useSelect(options);

  if (!options) {
    return null;
  }

  return (
    <div ref={selectRef} >
      <div onClick={onToggle} className="display-value">
        <span>{value}</span>
        <span className="caret">&#94;</span>
      </div>

      {open && (
        <div className="option-container">
          <div className="option-title">{options.length > 0 ? 'Taille :' : 'Article non disponible'}</div>
          {options.length > 0 && options.map((option, idx) => (
            <React.Fragment key={option.size} >
              <OptionDisplay {...option} onSelect={handleSelect} />
              {idx !== options.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </div>
      )}


      <HiddenSelect ref={hiddenSelectRef} options={options} />
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      size: PropTypes.oneOf(['S', 'M', 'L', 'XL']).isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
}

export default Select;
