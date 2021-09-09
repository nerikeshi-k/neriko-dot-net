import styled from 'styled-components';

const Description = styled.div<{ centering?: boolean }>`
  ${(props) => props.centering && 'text-align: center;'};
  margin: 24px auto;
`;

export const Paragraph = styled.p`
  margin: 0;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export default Description;
