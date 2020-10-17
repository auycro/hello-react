import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../utils/firebase.util'
//import Tab from '@material-ui/core/Tab';

const Header = ({currentUser}) => {
  
  var loginButton, mainButton;
  console.log(currentUser);
  if (currentUser != null) {
    mainButton = <Link className="option" to='/main'>Home</Link>;
    loginButton = <Link className="option" to='/' onClick={()=>{auth.signOut()}}>Log Out</Link>;
  } else {
    mainButton = <Link className="option" to='/'>Home</Link>;
    loginButton = <Link className="option" to='/signin'>Log In</Link>;
  }

  return (
    <div className="header">
      <h1>Test React App</h1>
      <div className="options" style={{textAlign:'right'}}>
        {mainButton}&nbsp;
        {loginButton}&nbsp;
      </div>
    </div>
  );
}
 
export default Header;