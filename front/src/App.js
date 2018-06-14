
import React, { Component } from 'react'
import Homepage from './Homepage'
import Contributor from './Contributor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import MiniDrawer from './AppBar'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <MiniDrawer />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contributor" component={Contributor} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
