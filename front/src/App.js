import React, { Component } from 'react'
import LoginModal from './loginModal'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen () {
    this.setState({ open: true })
  };

  handleClose () {
    this.setState({ open: false })
  };

  render () {
    return (
      <div>
        <LoginModal
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

export default App
