import styled from 'styled-components';

export const ContainerStyles = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;
