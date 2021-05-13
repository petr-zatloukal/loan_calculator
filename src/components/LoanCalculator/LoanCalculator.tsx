import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLoanCalculatorSettings } from '../../store/actions/loanCalculator';
import { ERROR, FETCHING, SUCCESS } from '../../constants/states';
import { getSettingsData, getSettingsStatus } from '../../store/reducers/loanCalculator';
import ValuePicker from '../ValuePicker/ValuePicker';
import Results from '../Results/Results';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Box = styled.div`
  width: 500px;
  border: 1px solid #aaaaaa;
  padding: 50px;
  background-image: linear-gradient(to bottom right, #aaaaaa , #ffffff);
`;

const BoxHeader = styled.div`
  
`;

type INumberState = number | undefined;

const LoanCalculator = () => {
  const settingsStatus = useSelector(getSettingsStatus);
  const settingsData = useSelector(getSettingsData);

  const [amountIntervalValue, setAmountIntervalValue] = useState<INumberState>();
  const [termIntervalValue, setTermIntervalValue] = useState<INumberState>();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoanCalculatorSettings());
  }, []);

  useEffect(() => {
    if (settingsStatus === SUCCESS ) {
      setAmountIntervalValue(settingsData?.amountInterval?.defaultValue || undefined);
      setTermIntervalValue(settingsData?.termInterval?.defaultValue || undefined);
    }
  }, [settingsStatus]);

  const valueChangeHandler = useCallback((setHandler) => (value: number) => {
    setHandler(value);
  }, []);

  return <Wrapper>
    <Box>
      <BoxHeader><h2>Loan Calculator</h2></BoxHeader>

      {settingsStatus === SUCCESS &&<>
        {settingsData?.amountInterval &&
        <ValuePicker
          label="Amount"
          id="amount"
          value={amountIntervalValue}
          min={settingsData.amountInterval.min}
          max={settingsData.amountInterval.max}
          step={settingsData.amountInterval.step}
          onValueChange={valueChangeHandler(setAmountIntervalValue)}
        />
        }
        {settingsData?.termInterval &&
        <ValuePicker
          label="Term"
          id="term"
          value={termIntervalValue}
          min={settingsData.termInterval.min}
          max={settingsData.termInterval.max}
          step={settingsData.termInterval.step}
          onValueChange={valueChangeHandler(setTermIntervalValue)}
        />
        }
        {amountIntervalValue && termIntervalValue && <Results amountInterval={amountIntervalValue} termInterval={termIntervalValue} />}
      </>}
      {settingsStatus === FETCHING && <CircularProgress />}
      {settingsStatus === ERROR && <>Data Error</>}
    </Box>
  </Wrapper>;
};

export default LoanCalculator;
