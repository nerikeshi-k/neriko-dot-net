import styled from 'styled-components';

const SectionHeading = styled.h3`
  font-weight: normal;
  margin: 12px 0;
  font-size: 15px;

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

export default SectionHeading;
