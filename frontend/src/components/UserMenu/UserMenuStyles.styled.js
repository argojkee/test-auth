import styled from 'styled-components';

export const UserMenuStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: tomato;
    text-decoration: none;
    transition: color var(--primary-transition);
  }

  a:hover {
    color: green;
  }
`;
