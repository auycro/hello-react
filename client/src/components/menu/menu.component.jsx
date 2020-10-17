import React from 'react';
import './menu.styles.scss';
import List from '@material-ui/core/List';
import MenuItem from '../menu-item/menu-item.component';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'API',
          id: 1,
          linkUrl: 'api',
        },
        {
          title: 'WebSocket',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'WebRTC',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'gRPC',
          id: 4,
          linkUrl: '',
        },
      ]
    }
  }
  render() { 
    return (
      <div className='menu'>
        <List>
        {this.state.items.map( ({id, ...props}) => (
          <MenuItem key={id} {...props} />
        ))}
        </List>
      </div>
    );
  }
}

export default Menu;