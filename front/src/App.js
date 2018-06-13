
import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { PostList } from './Posts'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const App = () => 
  <Admin title=" Pourquoi n'y a t-il plus de Mamouth ? " dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
  </Admin>

export default App
