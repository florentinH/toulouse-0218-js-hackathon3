import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import YouTube from '@u-wave/react-youtube'

const styles = {
  card: {
    position: 'relative',
    maxWidth: 345,
    backgroundColor: '#F2EEEE',
    marginTop: 25,
    height: 380
  },
  media: {
    width: '100%'
  },
  resume: {
    position: 'absolute',
    bottom: 40
  },
  read: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#DC143C',
    color: '#FFFFFF'
  },
  links: {
    textDecoration: 'none'
  }
}

function VideoCard (props) {
  const { classes, video } = props
  const videoId = video.videoLink.split('=').pop()
  return (
    <div>
      <Card className={classes.card}>
        <YouTube
          className={classes.media}
          video={ videoId }
        />
        {/* <ReactPlayer className={classes.media} url={ video.videoLink } playing /> */}
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            { video.title }
          </Typography>
        </CardContent>
        <CardContent className={classes.resume}>
          <Typography component="p">
            { video.resume }
          </Typography>
        </CardContent>
        <CardActions>
          <a href={ video.articleLink } target="_blank" className={classes.links}>
            <Button
              size="small"
              color="primary"
              className={classes.read}
            >
            Lire l'article ...
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  )
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  video: PropTypes.object
}

export default withStyles(styles)(VideoCard)
