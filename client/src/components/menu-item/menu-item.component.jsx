import React from 'react';
import './menu-item.styles.scss';
import { Button } from '@material-ui/core';

const MenuItem = ({title, id}) => {
  return (
    <div className='menu-item' >
      <Button variant="contained" color="primary" href={`#${title}`}>
        {title}
      </Button>
    </div>
  );
}
 
export default MenuItem;