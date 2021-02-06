import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * @param {Object[]} options - available options for selection.
 */
const useSelect = (options) => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const selectRef = useRef();
  const hiddenSelectRef = useRef();

  const onToggle = () => setOpen((o) => !o);

  const displayValue = useMemo(() => {
    if (value === undefined) {
      return 'Veuillez sélectionner';
    }

    const selectedIdx = options.findIndex((o) => o.value === value);

    if (selectedIdx >= 0) {
      return options[selectedIdx].size;
    }
  }, [value, options]);

  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
    setOpen(false);
  };

  const onClickAway = useCallback((event) => {
    if (!selectRef.current) {
      return;
    }

    if (!selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, [selectRef]);

  useEffect(() => {
    document.addEventListener('mousedown', onClickAway);

    return () => document.removeEventListener('mousedown', onClickAway);
  }, [onClickAway]);

  useEffect(() => {
    // Consider device as mobile
    if (document.documentElement.offsetWidth <= 600) {
      setIsMobile(true);
    }
  }, []);

  return {
    value: displayValue,

    open,

    selectRef,
    hiddenSelectRef,

    onToggle,
    handleSelect,

    isMobile,
  };
};

export default useSelect;
