import styled from 'styled-components';

const Description = styled.div<{ centering?: boolean }>`
  ${props => props.centering && 'text-align: center;'}
  line-height: 2;
  max-width: 480px;
  margin: 24px auto;
`;

export const Paragraph = styled.p`
  margin: 0;
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export default Description;
