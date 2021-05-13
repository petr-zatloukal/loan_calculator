import { combineReducers } from 'redux';
import loanCalculator, { ILoanCalculatorState } from './loanCalculator';

export type IState = {
    loanCalculator: ILoanCalculatorState
};

export default combineReducers({ loanCalculator });
