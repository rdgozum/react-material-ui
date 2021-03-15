import React, { Component, Fragment } from 'react'

import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { Add } from '@material-ui/icons';

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
        open: !this.state.open
    })
  }

  render() {
    const { open } = this.state

    return (
      <Fragment>
        <Button onClick={ this.handleToggle }>
          <Fab size="small" aria-label="add">
            <Add />
          </Fab>
        </Button>

        <Dialog open={ open } onClose={ this.handleToggle }>
          <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form>
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}
