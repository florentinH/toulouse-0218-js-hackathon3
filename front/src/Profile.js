import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Work from '@material-ui/icons/Work'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  center: {
    textAlign: 'center'
  },
  row: {
    display: 'flex'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
})

function Profile (props) {
  const { classes } = props

  return (
    <Grid container justify = "center">
      <div>
        <div className={classes.row}>
          <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" className={classes.avatar} />
          <Avatar
            alt="Adelle Charles"
            image="linkedin.png"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </div>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Nom" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Prenom" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Work />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Employé" />
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  )
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
