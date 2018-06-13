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
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

function Videoslist (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://static.boredpanda.com/blog/wp-content/uploads/2017/04/edible-water-bubble-skipping-rocks-lab-1-58ee297ad3917__700.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Les Water Bubbles
          </Typography>
          <Typography component="p">
            Nouvelle façon de boire de l'eau ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://www.boredpanda.com/edible-water-bubble-skipping-rocks-lab/" >
            Lire l'article ...
          </Button>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    </div>
  )
}

Videoslist.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Videoslist)
