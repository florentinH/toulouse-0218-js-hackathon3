
import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { PostList } from './Posts'
import Videoslist from './Videoslist'
import LoginModal from './loginModal'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

class Homepage extends Component {
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
        <Admin title=" Pourquoi n'y a t-il plus de Mamouth ? " dataProvider={dataProvider} LoginModal={LoginModal}>
          <Resource name="posts" list={PostList} />
        </Admin>
        <LoginModal
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          handleClick={this.props.handleClick}
        />
        <Videoslist />
      </div>
    )
  }
}

export default Homepage
