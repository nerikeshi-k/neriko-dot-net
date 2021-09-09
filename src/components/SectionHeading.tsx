import styled from 'styled-components';

const SectionHeading = styled.h2`
  font-weight: normal;
  margin: 12px 0;
  font-size: 16px;

  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #333;
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export default SectionHeading;
