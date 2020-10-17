import React from 'react';
import './signin-signup.styles.scss';
import SignIn from '../../components/auth/signin/signin.component';

const SignInSignUp = () => {
  return (  
    <div className="sigin-singup">
      <SignIn /> <br/>
      <div className="singup">
        sign up
      </div>
    </div>
  );
}

export default SignInSignUp;