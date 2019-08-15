import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';

export default () => (
  <Wrapper>
    <Heading>pics</Heading>
    <LinkWrapper>
      <a href="https://twitter.com/nerikeshi_k">twitter</a>
    </LinkWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const LinkWrapper = styled.div`
  text-align: center;
`;
