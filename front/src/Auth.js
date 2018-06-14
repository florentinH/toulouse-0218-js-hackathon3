import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

// Fausse authentification
const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

// affichage sur première tentative d'accès. Etes-vous authentifiés ou pas
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
          Welcome!{' '}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}
        >
            Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
)

// Authorisation accès page privée
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

// Redirection
const redirectLogin = () => {
  state = {
    redirectToReferrer: false
  }

  let login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  const { from } = this.props.location.state || { from: { pathname: '/' } }
  const { redirectToReferrer } = this.state

  if (redirectToReferrer) {
    return <Redirect to={from} />
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={this.login}>Log in</button>
    </div>
  )
}

export default PrivateRoute
