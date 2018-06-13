import React, { Component } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePageContributeur from './HomePageContributeur'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/contributor" component={HomePageContributeur} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
