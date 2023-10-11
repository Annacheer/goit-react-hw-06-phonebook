import React, { useState } from 'react';
import { InputStyle, Label } from './Filter.styled';

const Filter = ({ onFilterChange }) => {
  const [localFilter, setLocalFilter] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setLocalFilter(value);
    onFilterChange(value);
  };

  return (
    <Label>
      Find contacts by name
      <InputStyle
        type="text"
        value={localFilter}
        onChange={handleInputChange}
      />
    </Label>
  );
};

export default Filter;
