import styled from 'styled-components';

const SectionHeading = styled.h3`
  font-family: Rajdhani;
  font-weight: normal;
  margin: 12px 0;
  font-size: 1.4rem;
  letter-spacing: 4px;
  text-align: center;

  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    vertical-align: middle;
    margin-right: 8px;
  }

  &::after {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    vertical-align: middle;
    margin-left: 8px;
  }
`;

export default SectionHeading;
