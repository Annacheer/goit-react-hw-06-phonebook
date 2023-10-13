import React, { useState } from 'react';
import { InputStyle, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/store';

export const onFilterChange = value => {
  return {
    type: 'FILTER_CHANGE',
    payload: value,
  };
};

const Filter = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);
  const [localFilter, setLocalFilter] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setLocalFilter(value);
    dispatch(setFilter(value));
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
