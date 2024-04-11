import { MySection } from 'components/UI/SectionStyles.styled';

import Container from 'components/Container/Container.jsx';

const WelcomePage = () => {
  return (
    <MySection>
      <Container>
        <h1>
          Welcome to our app. Please sign in to enter your personal account
        </h1>
      </Container>
    </MySection>
  );
};

export default WelcomePage;
