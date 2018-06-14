import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
// import UploadVideo from './UploadVideo'

const styles = {
  element: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  uploadContent: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  paperTheme: {
    width: 250,
    display: 'flex'
  },
  paperUpload: {
    backgroundColor: '#DFE8EA',
    width: 400
  },
  paperUploadelements: {
    display: 'flex',
    justifyContent: 'center'
  },
  checkBox: {
    marginLeft: 7
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
          <Grid container className={classes.element}>
            <Grid item xs={12} md={7} className={classes.uploadContent}>
              <Paper className={classes.paperUpload}>
                <Typography component="h2" className={classes.paperUploadelements}>
            Upload du fichier
                </Typography>
                <TextField type='text' label='Titre de la vidéo' className={classes.paperUploadelements} />
                <TextField type='text' label='Rechercher ma position' className={classes.paperUploadelements} /><br />
                <Button className={classes.paperUploadElements} style={{color: 'white',
                  backgroundColor: '#1313E6',
                  marginTop: 5
                }}>Upload</Button>
              </Paper>
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
                                className={classes.checkBox}
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
