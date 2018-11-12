import React from 'react'
import TwNews from './TwNews'
import JpNews from './JpNews'
import KrNews from './KrNews'

export default class Container extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop: 20}}>
        {(this.props.tab === 'tw') && <TwNews tab={this.props.tab} />}
        {(this.props.tab === 'jp') && <JpNews tab={this.props.tab} />}
        {(this.props.tab === 'kr') && <KrNews tab={this.props.tab} />}
      </div>
    )
  }
}