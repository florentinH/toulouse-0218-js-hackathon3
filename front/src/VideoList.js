import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import VideoCard from './VideoCard'
import videos from './videos'

const VideoList = (props) => (
  <Grid container spacing={48}>
    {
      videos.map((video, k) =>
        <Grid item
          xs={12} sm={4}
          key={k}
        >
          <VideoCard 
            video={video} 
          />
        </Grid>
      )
    }
  </Grid>
)

VideoList.propTypes = {
  Video: PropTypes.array
}

export default VideoList
