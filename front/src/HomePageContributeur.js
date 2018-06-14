import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
// import UploadVideo from './UploadVideo'

const styles = {
  paperTheme: {
    width: 250
  }
}
class HomePageContributeur extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ecologie: false,
      social: false,
      economie: false,
      sport: false,
      technologie: false,
      sante: false,
      art: false
    }
  }
  handleChange (theme) {
    return event =>
      this.setState({ [theme]: event.target.checked })
  }
  render () {
    const themes = (Object.keys(this.state))
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
            <Paper className={classes.paperTheme}>
              <Grid item xs={12} md={5}>
                <Grid>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Thèmes:</FormLabel>
                    <FormGroup>
                      {
                        themes.map((theme, k) => (
                          <FormControlLabel
                            key = {k}
                            control={
                              <Checkbox
                                checked={this.state[theme]}
                                onChange={this.handleChange(theme)}
                                value={theme} />
                            }
                            label={theme} />
                        ))
                      }
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
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
