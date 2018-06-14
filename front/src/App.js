
import React, { Component } from 'react'
import Homepage from './Homepage'
import HomePageContributeur from './HomePageContributeur'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MiniDrawer from './AppBar'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logged: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({ logged: true })
  }
  render () {
    return (
      <div>
        <MiniDrawer />
        <Router>
          <div>
            <Switch>
              {/* A remplacer par Layout */}
              <Route exact path="/" render={matchProps => <Homepage {...matchProps} logged={this.state.logged} handleClick={this.handleClick} />} />
              <Route path="/contributor" render={HomePageContributeur} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
