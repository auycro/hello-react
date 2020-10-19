import React from 'react';
//import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

const MenuItem = ({title, id, linkUrl}) => {
  return (
    <ListItem className='menu-item' >
      <Link to={`/${linkUrl}`}>
      <Button 
        variant="contained" 
        color="primary" 
        style={{textTransform: 'none'}} >
        {title}
      </Button>
      </Link>
    </ListItem>
  );
}
 
export default MenuItem;