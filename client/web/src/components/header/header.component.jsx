import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
  state = {  }
  render() { 
    return (
      <AppBar position="static" color="default" elevation={0} className="header">
        <Toolbar className="toolbar">
          <Grid justify="space-between" container spacing={24}>
            <Grid item>
              <div className="logo">
                Logo
              </div>
              <nav>
                <div className="left-tab">
                  <div className="whyme">
                    WhyMe?
                  </div>
                  <div className="whyme">
                    Owner
                  </div>
                </div>           
              </nav>
            </Grid>
            <Grid item>
              <Button href="#" color="primary" variant="" className="sign-in">
                Sign in
              </Button>
              <Button href="#" color="primary" variant="outlined" className="sign-up">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
 
export default Header;