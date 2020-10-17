import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="option" to='/'>Home</Link>&nbsp;
      <Link className="option" to='/signin'>Sing In</Link>
    </div>
  );
}
 
export default Header;