import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

function Footer() {
  const value = 0
  return (
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  )
}

export default Footer
