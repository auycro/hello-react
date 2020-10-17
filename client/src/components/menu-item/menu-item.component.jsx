import React from 'react';
//import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import { Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

const MenuItem = ({title, id, linkUrl}) => {
  return (
    <ListItem className='menu-item' >
      <Button 
        variant="contained" 
        color="primary" 
        style={{textTransform: 'none'}} 
        href={`/${linkUrl}`} >
        {title}
      </Button>
    </ListItem>
  );
}
 
export default MenuItem;