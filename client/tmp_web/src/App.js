import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import Header from './components/header/header.component';
import ValidationAuth from './components/auth/auth.component';
import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/mainpage/mainpage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import APIPage from './pages/apipage/apipage.component';
import {auth, createUserProfileDocument} from './utils/firebase.util';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      //console.log(userAuth.displayName);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          //console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
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
            <ValidationAuth>
              <Route exact path='/main' component={MainPage}/>
              <Route exact path='/api' component={APIPage}/>
            </ValidationAuth>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
