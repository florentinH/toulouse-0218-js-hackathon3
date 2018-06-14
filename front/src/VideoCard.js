import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Video from './Video'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

function VideoCard (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          videos={ Video.videoLink }
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            { Video.title }
          </Typography>
          <Typography component="p">
            { Video.resume }
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={ Video.article } >
            Lire l'article ...
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoCard)
