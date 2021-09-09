import { Router } from '@reach/router';
import { Footer } from 'components/Footer';
import Loading from 'components/Loading';
import React from 'react';
import { Root, Routes } from 'react-static';
import 'sanitize.css';
import styled from 'styled-components';
import './app.css';

function App() {
  return (
    <Root>
      <Main>
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Main>
      <Footer />
    </Root>
  );
}

const Main = styled.main`
  margin: auto;
  background-color: transparent;
  padding: 0 12px;
`;

export default App;
