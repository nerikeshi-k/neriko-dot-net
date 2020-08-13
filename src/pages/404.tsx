import Heading from 'components/Heading';
import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <Heading>neriko.net</Heading>
    <Message>ページが見つかりませんでした</Message>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Message = styled.div``;
