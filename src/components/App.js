import TopNavBar from './TopNavBar';
import Main from './Main'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar></TopNavBar>
        <Main></Main>
      </div>
    )
  }
}
