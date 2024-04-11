import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOperations/signIn';
import { ButtonStyles } from 'components/UI/ButtonStyles.styled';
import { FcGoogle } from 'react-icons/fc';

const LogInBtn = () => {
  const dispatch = useDispatch();

  const onLoginClick = async e => {
    dispatch(signIn());
  };
  return (
    <ButtonStyles onClick={onLoginClick} className="login-btn" type="button">
      <FcGoogle size={24} />
      Sign in with google
    </ButtonStyles>
  );
};

export default LogInBtn;
