import React, { ChangeEvent } from 'react';
import SliderMUI from '@material-ui/core/Slider';

type ISlider = {
    onChange: (value: number) => void;
    step: number;
    min: number;
    max: number;
    value: number;
}

const Slider = ({ onChange, step, min, max, value }: ISlider) => {
  const valueChangeHandler = (event: ChangeEvent<{}>, value: number | number[]) => {
    const val = Array.isArray(value) ? value[0] : value;
    onChange(val);
  };

  return <SliderMUI
    value={value}
    valueLabelDisplay="auto"
    step={step}
    marks
    min={min}
    max={max}
    onChange={valueChangeHandler}
  />;
};

export default Slider;
