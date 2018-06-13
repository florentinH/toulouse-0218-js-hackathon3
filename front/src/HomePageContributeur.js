import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
// import UploadVideo from './UploadVideo'

const styles = {
  container: {
    color: 'grey'
  },
  paper: {
    backgroundColor: 'grey'
  }
}
class HomePageContributeur extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Typography component="h2">
            Upload du fichier
              </Typography>
              <Typography component="h3">
            Ajouter un titre
              </Typography>
              <TextField type='text' />
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid>
                <Typography component="h2">
                Thèmes:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

HomePageContributeur.propTypes = {
  classes: PropTypes.object
}
export default withStyles(styles)(HomePageContributeur)
