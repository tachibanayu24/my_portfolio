import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {    
  return(
    <AppBar position="sticky" style={{backgroundColor: '#022B36E0'}}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ fontSize: 18, fontFamily: 'Monaco', fontWeight: 500}} noWrap>
          <span style={{color: '#1E90FF' }}>~/YutoTachibana</span> <span style={{ color: '#FF6347' }}>❯</span><span style={{ color: '#A9A9A9'}}>❯❯ Portfolio<span className="blink">_</span></span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;