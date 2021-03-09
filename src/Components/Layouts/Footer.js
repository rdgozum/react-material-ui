import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

function Footer({ muscles }) {
  const value = 0
  return (
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {
          muscles.map(group =>
            <Tab label={group} />
          )
        }
      </Tabs>
    </Paper>
  )
}

export default Footer
