import React from 'react'

class BtnAdd extends React.Component {
  render() {
    return(
      <button className="list__input__btnAdd" onClick={this.props.addTodo}>Add</button>
    )
  }
}

export default BtnAdd