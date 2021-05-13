import { get } from '../utils/api';
import { CONSTRAINTS, OFFER2 } from '../constants/endpoints';

const getLoanCalculatorSettings = async () => {
  return get(CONSTRAINTS);
};

const getLoanCalculation = async (amount: number, term: number) => {
  return get(`${OFFER2}?amount=${amount}&term=${term}`);
};

export default {
  getLoanCalculatorSettings,
  getLoanCalculation,
};
