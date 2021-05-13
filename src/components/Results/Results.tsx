import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { getLoanCalculatorResults } from '../../store/actions/loanCalculator';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsData, getResultsStatus } from '../../store/reducers/loanCalculator';
import { ERROR, FETCHING, SUCCESS } from '../../constants/states';


const StyledResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  & {
    flex: 1
  }
  
  table {
    border-collapse: collapse;
  }
  
  table tr :first-child {
    text-align: left;
  }
  
  table tr td {
    text-align: right;
    border: 1px solid black;
    padding: 5px;
  }
`;

type IResults = {
    amountInterval: number;
    termInterval: number;
}
const Results = ({ amountInterval, termInterval }: IResults) => {
  const dispatch = useDispatch();
  const resultsStatus = useSelector(getResultsStatus);
  const resultsData = useSelector(getResultsData);
  useEffect(() => {
    const debounceTo = setTimeout(() => {
      (async function getResults() {
        dispatch(getLoanCalculatorResults(amountInterval, termInterval));
      })();
    }, 500);

    return () => clearTimeout(debounceTo);
  }, [amountInterval, termInterval]);

  return <StyledResults>
    {resultsStatus === SUCCESS && resultsData && <table>
      <tbody>
        <tr>
          <td>Total Principal</td>
          <td>{resultsData?.totalPrincipal}</td>
        </tr>
        <tr>
          <td>Term</td>
          <td>{resultsData?.term || ''}</td>
        </tr>
        <tr>
          <td>Total Cost of Credit</td>
          <td>{resultsData?.totalCostOfCredit || ''}</td>
        </tr>
        <tr>
          <td>Total Repayable Amount</td>
          <td>{resultsData?.totalRepayableAmount || ''}</td>
        </tr>
        <tr>
          <td>Montly Payment</td>
          <td>{resultsData?.monthlyPayment.toFixed(5) || 0}</td>
        </tr>
      </tbody>
    </table>}
    {resultsStatus === FETCHING && <CircularProgress color="secondary" />}
    {resultsStatus === ERROR && <>Data Error</>}
  </StyledResults>;
};

export default Results;
