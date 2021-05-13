import actionTypes from '../../contants/actionTypes/loanCalculator';
import dataFetch from '../../../services/dataFetch';
import { Dispatch } from 'redux';

export const getLoanCalculatorSettings = () => async (dispatch: Dispatch) => {
  const { LOAN_CALCULATOR_SETTINGS_FETCH, LOAN_CALCULATOR_SETTINGS_SUCCESS, LOAN_CALCULATOR_SETTINGS_ERROR } = actionTypes;
  dispatch({ type: LOAN_CALCULATOR_SETTINGS_FETCH });
  try {
    const output = await dataFetch.getLoanCalculatorSettings();
    dispatch({ type: LOAN_CALCULATOR_SETTINGS_SUCCESS, payload: output?.data });
  } catch (e) {
    dispatch({ type: LOAN_CALCULATOR_SETTINGS_ERROR });
  }
};


export const getLoanCalculatorResults = (amount: number, term: number) => async (dispatch: Dispatch) => {
  const { LOAN_CALCULATOR_DATA_FETCH, LOAN_CALCULATOR_DATA_SUCCESS, LOAN_CALCULATOR_DATA_ERROR } = actionTypes;
  dispatch({ type: LOAN_CALCULATOR_DATA_FETCH });
  try {
    const output = await dataFetch.getLoanCalculation(amount, term);
    dispatch({ type: LOAN_CALCULATOR_DATA_SUCCESS, payload: output?.data });
  } catch (e) {
    dispatch({ type: LOAN_CALCULATOR_DATA_ERROR });
  }
};
