
import React, { Component } from 'react'
import VideoList from './VideoList'
import SimpleSlider from './SimpleSlider'

class Homepage extends Component {
  render () {
    return (
      <div>
        <SimpleSlider />
        <VideoList />
      </div>
    )
  }
}

export default Homepage
