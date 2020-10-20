import React from 'react';
import './signin-signup.styles.scss';
import SignIn from '../../components/auth/signin/signin.component';
import SignUp from '../../components/auth/signup/signup.component';
import Container from '@material-ui/core/Container';

const SignInSignUp = () => {
  return (  
    <Container className="sigin-singup" fixed>
      <SignIn /> <br/>
      <SignUp /> <br/>
    </Container>
  );
}

export default SignInSignUp;