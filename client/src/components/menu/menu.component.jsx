import React from 'react';
import './menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'JSON',
          id: 1,
        },
        {
          title: 'Websocket',
          id: 2,
        },
        {
          title: 'WebRTC',
          id: 3,
        },
      ]
    }
  }
  render() { 
    return (
      <div className='menu'>
        {this.state.items.map( (item) => (
          <MenuItem key={item.id} title={item.title} id={item.id}/>
        ))}
      </div>
    );
  }
}

export default Menu;