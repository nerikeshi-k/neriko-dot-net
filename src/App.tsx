import { Router, Link } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';
import './app.css';
import styled from 'styled-components';
import Loading from 'components/Loading';

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
      <Footer>
        <Link to="/">neriko.net</Link>
      </Footer>
    </Root>
  );
}

const Main = styled.main`
  margin: auto;
  background-color: transparent;
  padding: 12px;
`;

const Footer = styled.footer`
  margin: 20px auto 20px;
  padding-top: 20px;
  border-top: 1px dotted #aaa;
  text-align: center;
  max-width: 600px;
`;

export default App;
