import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

function rand () {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle () {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  modal: {
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: 50
  }
})

class SimpleModal extends React.Component {
  render () {
    const { classes } = this.props
    const props = this.props

    return (
      <div>
        <Button onClick={props.handleOpen}>Open Modal</Button>
        <Modal
          className={classes.modal}
          open={this.props.open}
          onClose={props.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FormControl className={classes.container} noValidate autoComplete="off">
              <h3>Login</h3>
              <TextField
                id="name"
                label="Pseudo"
                className={classes.textField}
                placeholder=" "
                // onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                // onChange={this.handleChange('password')}
                margin="normal"
              />
              <Button color="primary" className={classes.button}>Login
                {/* <Link to = "/calendar"></Link> */}
              </Button>
            </FormControl>
          </div>
        </Modal>
      </div>
    )
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.boolean
}

// We need an intermediary variable for handling the recursive nesting.
const LoginModal = withStyles(styles)(SimpleModal)

export default LoginModal
