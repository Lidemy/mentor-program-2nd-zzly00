import React from 'react'
import { hot } from 'react-hot-loader'
import Title from './Title'
import List from './List'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <List />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)