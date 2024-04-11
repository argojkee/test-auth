import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid black;
  border-top: none;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  .login-btn {
    margin-left: auto;
    display: flex;
    justify-content: center;
    column-gap: 10px;
    align-items: center;
    background: linear-gradient(45deg, #4285f4, #34a853, #fbbc05, #ea4335);
    color: white;
    border: none;
  }

  .login-btn:hover,
  .login-btn:focus {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;
