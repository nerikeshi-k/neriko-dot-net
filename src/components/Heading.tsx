import styled from 'styled-components';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: normal;
  margin: 24px 0;
  font-size: 30px;

  &::before {
    display: block;
    content: '';
    width: 12px;
    height: 12px;
    background-color: #333;
    margin-right: 8px;
  }
`;

export default Heading;
