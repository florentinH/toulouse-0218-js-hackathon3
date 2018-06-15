import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Random from './Random'
import videos from './videos'

let number = (max) => {
  return (Math.ceil(Math.random() * max))
}

const VideoRandom = (props) => {
  let oneVideo = videos.find(video => video.id === number(5))
  if (oneVideo === undefined) {
    oneVideo = videos[1]
  }
  return (
    <Grid container spacing={6}>
      <Random
        video={oneVideo}
      />
    </Grid>
  )
}

VideoRandom.propTypes = {
  Video: PropTypes.array
}

export default VideoRandom
