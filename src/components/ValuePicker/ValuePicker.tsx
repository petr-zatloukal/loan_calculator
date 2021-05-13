import React, { useMemo } from 'react';
import Select from '../Select/Select';
import Slider from '../Slider/Slider';
import utils from '../LoanCalculator/utils';

type IValuePicker = {
    label: string;
    id: string;
    step: number;
    min: number;
    max: number;
    value?: number;
    onValueChange: (value: number) => void;
}

const ValuePicker = ({ label, id, step, min, max, value, onValueChange }: IValuePicker) => {
  const items = useMemo(() => {
    return utils.listValuesByParams(min, max, step);
  }, [step, min, max]);

  return <>
    <Select label={label} id={id} value={value || items[0]} items={items} onValueChange={onValueChange} />
    <Slider value={value || items[0]} min={min} max={max} step={step} onChange={onValueChange} />
  </>;
};

export default ValuePicker;
