import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 8px 12px;
  background-color: transparent;
  border: 3px solid grey;
  border-radius: 12px;
  cursor: pointer;
  display: block;

  transition: background-color var(--primary-transition),
    border-color var(--primary-transition), color var(--primary-transition);

  &:hover,
  &:focus {
    background-color: var(--btn-bg-hover);
    color: var(--btn-color-hover);
    border-color: var(--btn-border-color-hover);
  }
`;
