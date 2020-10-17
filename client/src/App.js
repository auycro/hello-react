import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/mainpage/mainpage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import APIPage from './pages/apipage/apipage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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

export default App;
