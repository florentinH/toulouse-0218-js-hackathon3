
import React, { Component } from 'react'
import Homepage from './Homepage'
import Contributor from './Contributor'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PersistentDrawer from './AppBar'


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
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
