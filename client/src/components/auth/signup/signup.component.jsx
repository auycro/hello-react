import React from 'react'
import './signup.styles.scss';
import Container from '@material-ui/core/Container';

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
    this.setState({
      displayName:'',
      email:'',
      password:'',
      confirmPassword:'',
    });
  }

  render() { 
    return (
      <Container className="signup" fixed>
        <form onSubmit={this.handleSubmit}>
          <label>Display Name:&nbsp;</label>
          <input name="displayName" type="text" required={true} value={this.state.displayName} onChange={this.handleChange} /> <br/>
          <label>Email:&nbsp;</label>
          <input name="email" type="email" required={true} value={this.state.email} onChange={this.handleChange} /> <br/>
          <label>Password:&nbsp;</label>
          <input name="password" type="password" required={true} value={this.state.password} onChange={this.handleChange}/> <br/>
          <label>Confirm Password:&nbsp;</label>
          <input name="confirmPassword" type="password" required={true} value={this.state.confirmPassword} onChange={this.handleChange}/> <br/>
          <input type="submit" value="Sign Up"/>
        </form>
      </Container>
    );
  }
}
 
export default SignUp;