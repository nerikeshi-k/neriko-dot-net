import React from 'react';
import styled from 'styled-components';

export default () => (
  <Wrapper>
    <Message>ページが見つかりませんでした</Message>
  </Wrapper>
);

const Wrapper = styled.div``;

const Message = styled.div`
  text-align: center;
`;
