import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

// Affichage Modal
function getModalStyle () {
  const top = 50
  const left = 50

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
  constructor (props) {
    super(props)
    this.state = {
      wantLogin: true
    }
    this.wantSignIn = this.wantSignIn.bind(this)
    this.wantLogIn = this.wantLogIn.bind(this)
  }

  wantSignIn () {
    this.setState({ wantLogin: false })
  }
  wantLogIn () {
    this.setState({ wantLogin: true })
  }
  render () {
    const { classes } = this.props
    const props = this.props
    const whatToDisplay = (bool, classes, props) => {
      if (bool === true) {
        return (<FormControl className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Pseudo"
            className={classes.textField}
            placeholder=" "
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
          />
          <Button color="primary" className={ classes.button } onClick={ props.handleClick }>Login</Button>
          <Button color="primary" className={ classes.button } onClick={ this.wantSignIn }>Je m'inscris</Button>
        </FormControl>
        )
      } else {
        return (<FormControl className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            placeholder=" "
            margin="normal"
          />
          <TextField
            id="pseudo"
            label="Pseudo"
            className={classes.textField}
            placeholder=" "
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
          />
          <Button color="primary" className={ classes.button } onClick={ props.handleClick }>SignIn</Button>
          <Button color="primary" className={ classes.button } onClick={ this.wantLogIn }>J'ai déjà un compte</Button>
        </FormControl>
        )
      }
    }

    return (
      <div>
        <Button onClick={props.handleOpen}>Open Modal</Button>
        <Modal
          className={classes.modal}
          open={this.props.open}
          onClose={props.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper} >
            {whatToDisplay(this.state.wantLogin, classes, props)}
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

const LoginModal = withStyles(styles)(SimpleModal)

export default LoginModal
