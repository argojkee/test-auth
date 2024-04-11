import { useSelector } from 'react-redux';
import { getToken } from '../../redux/auth/authSelectors';
import Container from 'components/Container/Container';
import { HeaderStyles } from './HeaderStyles.styled';
import LogInBtn from 'components/LogInBtn/LogInBtn';
import UserMenu from 'components/UserMenu/UserMenu';
const Header = () => {
  const token = useSelector(getToken);

  return (
    <HeaderStyles>
      <Container>
        {!token && <LogInBtn />}
        {token && <UserMenu />}
      </Container>
    </HeaderStyles>
  );
};

export default Header;
