import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
