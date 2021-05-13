import React, { ChangeEvent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import SelectMUI from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

type ISelect = {
    label: string;
    id: string;
    value: number;
    items: number[];
    onValueChange: (value: number) => void;
}

const Select = ({ label, id, value, items, onValueChange }: ISelect) => {
  const valueChangeHandler = (event: ChangeEvent<any>) => {
    onValueChange(event.target.value);
  };

  return <>
    <InputLabel id={id}>{label}</InputLabel>
    <SelectMUI
      labelId={id}
      value={value}
      onChange={valueChangeHandler}
    >
      {
        items.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)
      }
    </SelectMUI>
  </>;
};

export default Select;
