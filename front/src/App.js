import React, { Component } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePageContributeur from './HomePageContributeur'
import Layout from './Layout'
import Profile from './Profile'


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
        
        <Router>
          <div>
            <Switch>
              <Layout exact path="/" component={Homepage} handleClick={this.handleClick} logged={this.state.logged} />
              <Layout exact path="/contributor" component={HomePageContributeur} />
              <Layout exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
