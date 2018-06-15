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
import Button from '@material-ui/core/Button'
import UploadVideo from './UploadVideo'

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
  onChangeFile = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }
  constructor (props) {
    super(props)
    this.state = {
      tags: {
      ecologie: false,
      social: false,
      economie: false,
      sport: false,
      technologie: false,
      sante: false,
      art: false
      }
    }
  }
  handleChange (theme) {
    const {tags} = this.state
    return event =>
      this.setState({ tags:{...tags, [theme]: event.target.checked }})
  }
  render () {
    const themes = (Object.keys(this.state.tags))
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
                <input type='file' onChange={this.onChangeFile} />
                <UploadVideo file={this.state.file} />
                
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
