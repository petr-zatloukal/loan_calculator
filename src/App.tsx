import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Layout from './components/Layout/Layout';
import LoanCalculator from './components/LoanCalculator/LoanCalculator';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <LoanCalculator />
      </Layout>
    </Provider>
  );
};

export default App;
