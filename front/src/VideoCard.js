import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: "#DCDCDC",
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  read: {
    backgroundColor: "#DC143C",
    color: "#FFFFFF"
  }
}

function VideoCard (props) {
  const { classes, video } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          videos={ video.videoLink }
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            { video.title }
          </Typography>
          <Typography component="p">
            { video.resume }
          </Typography>
        </CardContent>
        <CardActions>
          <a href={ video.articleLink } target="_blank">
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoCard)
