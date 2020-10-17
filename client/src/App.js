import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.component';
import APIPage from './pages/apipage/apipage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/api' component={APIPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
