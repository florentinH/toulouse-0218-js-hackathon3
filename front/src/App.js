import React, { Component } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePageContributeur from './HomePageContributeur'
import Layout from './Layout'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Layout exact path="/" component={Homepage} />
              <Layout exact path="/contributor" component={HomePageContributeur} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
