import React from 'react'

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
      <div className="Sign-In">
        <form onSubmit={this.handleSubmit}>
          <label>Email:&nbsp;</label>
          <input name="email" type="email" required={true} value={this.state.email} onChange={this.handleChange} /> <br/>
          <label>Password:&nbsp;</label>
          <input name="password" type="password" required={true} value={this.state.password} onChange={this.handleChange}/> <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
 
export default SignIn;