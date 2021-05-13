import React, { ReactChild } from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  height: 100vh;

  header {
    background-color: red;
  }
`;

const Layout = ({ children }: { children?: ReactChild }) => {
  return (
    <LayoutStyled>
      <header><h1>Loan Calculator Project</h1></header>
      <main>
        {children}
      </main>
    </LayoutStyled>
  );
};

export default Layout;
