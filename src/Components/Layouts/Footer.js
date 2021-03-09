import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

function Footer({ muscles, category }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  return (
    <Paper>
      <Tabs
        value={index}
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
