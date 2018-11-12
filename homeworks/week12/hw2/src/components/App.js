import React from 'react'
import {hot} from 'react-hot-loader'
import Container from './Container'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Container />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)