import styled from 'styled-components';

const Description = styled.div`
  line-height: 2;
  max-width: 440px;
  margin: auto;
`;

export const Paragraph = styled.p`
  margin: 0;
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export default Description;
