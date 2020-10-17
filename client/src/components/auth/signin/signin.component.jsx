import React from 'react';
import './signin.styles.scss';
import {signInWithGoogle} from '../../../utils/firebase.util';
import {Button, Box} from '@material-ui/core';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email:'',
      password:''
    });
  }

  render() { 
    return (
      <Box className="Sign-In" borderColor="primary.main" border={1}>
        Sign In
        <form onSubmit={this.handleSubmit}>
          <label>Email:&nbsp;</label>
          <input name="email" type="email" required={true} value={this.state.email} onChange={this.handleChange} /> <br/>
          <label>Password:&nbsp;</label>
          <input name="password" type="password" required={true} value={this.state.password} onChange={this.handleChange}/> <br/>
          {/* <input type="submit" value="Submit"/> */}
          <Button
            variant="contained" 
            color="primary" 
            style={{textTransform: 'none'}} 
            type="submit" >
            Sign In
          </Button> &nbsp;
          <Button
            variant="contained" 
            color="primary" 
            style={{textTransform: 'none'}} 
            onClick={signInWithGoogle} >
            Sign In with Google
          </Button>
        </form>
      </Box>
    );
  }
}
 
export default SignIn;