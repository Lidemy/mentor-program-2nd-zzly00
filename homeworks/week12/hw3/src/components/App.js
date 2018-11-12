import React from 'react'
import {hot} from 'react-hot-loader'
import Navbar from './Navbar'
import Container from './Container'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'tw'
    }
  }

  changeTab(e) {
    e.preventDefault()
    this.setState({
      tab: e.target.name
    })
  }

  render() {
    return (
      <div>
        <Navbar tab={this.state.tab} changeTab={this.changeTab.bind(this)} />
        <Container tab={this.state.tab} />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)