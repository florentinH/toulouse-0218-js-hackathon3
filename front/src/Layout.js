import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import MiniDrawer from './AppBar'

const Layout = ({component: Component, exact, path, ...rest}) => {
  return (
    <Route exact={exact} path={path} render={matchProps => (
      <div>
        <MiniDrawer component={Component} componentProps={{...rest}} />
      </div>)}
    />
  )
}
Layout.propTypes = {
  component: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string
}
export default Layout
