import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
 
export default App;
