import { AnyAction } from 'redux';
import actionTypes from '../contants/actionTypes/loanCalculator';
import { ERROR, FETCHING, SUCCESS } from '../../constants/states';
import { IState } from './index';

type IIntervalSettings = {
    min: number,
    max: number,
    step: number,
    defaultValue: number
}

type IResultsData = {
    totalPrincipal: number;
    term: number;
    totalCostOfCredit: number;
    totalRepayableAmount: number;
    monthlyPayment: number;
}

export type ILoanCalculatorState = {
    status: string | null;
    data: {
        amountInterval?: IIntervalSettings,
        termInterval?: IIntervalSettings
    };
    resultsStatus: string | null;
    resultsData: IResultsData | null;
};

const { LOAN_CALCULATOR_SETTINGS_FETCH,
  LOAN_CALCULATOR_SETTINGS_SUCCESS,
  LOAN_CALCULATOR_SETTINGS_ERROR,
  LOAN_CALCULATOR_DATA_FETCH,
  LOAN_CALCULATOR_DATA_SUCCESS,
  LOAN_CALCULATOR_DATA_ERROR } = actionTypes;

const loanCalculator = (state: ILoanCalculatorState = { status: null, data: {}, resultsStatus: null, resultsData: null }, action: AnyAction) => {
  switch (action.type) {
    case LOAN_CALCULATOR_SETTINGS_FETCH:
      return { ...state, status: FETCHING };
    case LOAN_CALCULATOR_SETTINGS_SUCCESS:
      return { ...state, status: SUCCESS, data: action?.payload };
    case LOAN_CALCULATOR_SETTINGS_ERROR:
      return { ...state, status: ERROR };
    case LOAN_CALCULATOR_DATA_FETCH:
      return { ...state, resultsStatus: FETCHING };
    case LOAN_CALCULATOR_DATA_SUCCESS:
      return { ...state, resultsStatus: SUCCESS, resultsData: action?.payload };
    case LOAN_CALCULATOR_DATA_ERROR:
      return { ...state, resultsStatus: ERROR };

    default:
      return state;
  }
};

export default loanCalculator;

export const getSettingsStatus = (state: IState): string | null => state?.loanCalculator.status;
export const getSettingsData = (state: IState): {amountInterval?: IIntervalSettings, termInterval?: IIntervalSettings} => state?.loanCalculator.data;

export const getResultsStatus = (state: IState): string | null => state?.loanCalculator.resultsStatus;
export const getResultsData = (state: IState): IResultsData | null => state?.loanCalculator.resultsData;
