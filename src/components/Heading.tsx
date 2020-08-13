import styled from 'styled-components';

const Heading = styled.h1`
  font-family: Rajdhani;
  font-weight: normal;
  margin: 24px 0;
  font-size: 20px;

  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export default Heading;
