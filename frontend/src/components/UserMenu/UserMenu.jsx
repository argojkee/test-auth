import LogOutBtn from 'components/LogOutBtn/LogOutBtn';
import { UserMenuStyles } from './UserMenuStyles.styled';
import { getUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const user = useSelector(getUser);
  return (
    <UserMenuStyles>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      <LogOutBtn />
    </UserMenuStyles>
  );
};

export default UserMenu;
