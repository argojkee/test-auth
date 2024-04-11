import Container from 'components/Container/Container';
import { getUser, getIsLoading } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { MySection } from 'components/UI/SectionStyles.styled';
import { PiSpinnerGap } from 'react-icons/pi';

const HomePage = () => {
  const user = useSelector(getUser);
  const isLoading = useSelector(getIsLoading);
  return (
    <MySection>
      <Container>
        {isLoading ? (
          <PiSpinnerGap className="spinner" size={32} />
        ) : (
          <h1>
            I'm glad to see you,{' '}
            <span className="user-name">{user.fullName}</span>{' '}
          </h1>
        )}
      </Container>
    </MySection>
  );
};

export default HomePage;
