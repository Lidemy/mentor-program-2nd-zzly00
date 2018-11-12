import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" name="tw" onClick={this.props.changeTab}>Asia News</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={"nac-item" + (this.props.tab === 'tw' ? " active" : "")} style={{cursor: 'pointer'}}>
              <a className="nav-link" name="tw" onClick={this.props.changeTab}>臺灣</a>
            </li>
            <li className={"nac-item" + (this.props.tab === 'jp' ? " active" : "")} style={{cursor: 'pointer'}}>
              <a className="nav-link" name="jp" onClick={this.props.changeTab}>日本</a>
            </li>
            <li className={"nac-item" + (this.props.tab === 'kr' ? " active" : "")} style={{cursor: 'pointer'}}>
              <a className="nav-link" name="kr" onClick={this.props.changeTab}>한국</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}