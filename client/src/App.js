import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/mainpage/mainpage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import APIPage from './pages/apipage/apipage.component';
import {auth} from './utils/firebase.util';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( (user) => {
      this.setState({ currentUser: user });
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
            <Route exact path='/main' component={MainPage}/>
            <Route exact path='/api' component={APIPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
