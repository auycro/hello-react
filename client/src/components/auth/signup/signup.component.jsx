import React from 'react'
import './signup.styles.scss';
import {Button, Box} from '@material-ui/core';
import {auth, createUserProfileDocument} from '../../../utils/firebase.util';
import {withRouter} from 'react-router-dom';

class SignUp extends React.Component {
  state = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    //validate password
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }    

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
      });
      this.props.history.push("/main");
    }catch(error){
      //console.log(error.message);
      alert(error.message);
    }
  }

  render() { 
    return (
      <Box className="signup" borderColor="primary.main" border={1}>
        Sign Up
        <form onSubmit={this.handleSubmit}>
          <label>Display Name:&nbsp;</label>
          <input name="displayName" type="text" required={true} value={this.state.displayName} onChange={this.handleChange} /> <br/>
          <label>Email:&nbsp;</label>
          <input name="email" type="email" required={true} value={this.state.email} onChange={this.handleChange} /> <br/>
          <label>Password:&nbsp;</label>
          <input name="password" type="password" required={true} value={this.state.password} onChange={this.handleChange}/> <br/>
          <label>Confirm Password:&nbsp;</label>
          <input name="confirmPassword" type="password" required={true} value={this.state.confirmPassword} onChange={this.handleChange}/> <br/>
          <Button
            variant="contained" 
            color="primary" 
            style={{textTransform: 'none'}} 
            type="submit" >
            Sign In
          </Button>
        </form>
      </Box>
    );
  }
}
 
export default withRouter(SignUp);