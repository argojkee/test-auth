import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authSlice';
import { ButtonStyles } from 'components/UI/ButtonStyles.styled';
import { toastSuccess } from 'toastNotification/toastNotification';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logOut());
    toastSuccess('Log out successful');
  };
  return (
    <ButtonStyles type="button" onClick={onLogoutClick}>
      Logout
    </ButtonStyles>
  );
};

export default LogOutBtn;
