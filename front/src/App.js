
import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { PostList } from './Posts'
import Videoslist from './Videoslist'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

class App extends Component {
  render() {
    return (
      <div>
        <Admin title=" Pourquoi n'y a t-il plus de Mamouth ? " dataProvider={dataProvider}>
          <Resource name="posts" list={PostList} />
        </Admin>
        <Videoslist />
      </div>
    )
  }
}

export default App
