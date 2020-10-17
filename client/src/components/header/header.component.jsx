import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
//import Tab from '@material-ui/core/Tab';

const Header = () => {
  return (
    <div className="header">
      <h1>Test React App</h1>
      <div className="options" style={{textAlign:'right'}}>
        <Link className="option" to='/'>Home</Link>&nbsp;
        <Link className="option" to='/signin'>Log In</Link>&nbsp;
      </div>
    </div>
  );
}
 
export default Header;