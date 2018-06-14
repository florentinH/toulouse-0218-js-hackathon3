
import React, { Component } from 'react'
import Homepage from './Homepage'
import Contributor from './Contributor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PersistentDrawer from './AppBar'
import Profile from './Profile'



class App extends Component {
  render () {
    return (
      <div>
        <PersistentDrawer />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/contributor" render={Contributor} />
              <Route path="/profile" render={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
