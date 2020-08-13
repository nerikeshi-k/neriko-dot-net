import { Router } from '@reach/router';
import Loading from 'components/Loading';
import React from 'react';
import { Root, Routes } from 'react-static';
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
      <Footer>
        <FooterLinkWrapper>
          <a href="https://github.com/nerikeshi-k/portfolio">ソース</a>
        </FooterLinkWrapper>
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
  padding: 12px;
  border-top: 1px dotted #aaa;
  max-width: 600px;
`;

const FooterLinkWrapper = styled.div`
  display: inline-block;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export default App;
