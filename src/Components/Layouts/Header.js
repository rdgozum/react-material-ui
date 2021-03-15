import React from 'react';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import Create from '../Main/Dialogs/Create.js'

function Header({ muscles, onExerciseCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{flex: 1}}>
          Exercise Database
        </Typography>
        <Create
          muscles={ muscles }
          onCreate={ onExerciseCreate }
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
