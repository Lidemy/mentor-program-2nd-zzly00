import React from 'react'

class InputText extends React.Component {
  render() {
    return (
      <input type="text" className="list__input__text" maxLength="50" placeholder="What needs to be done?" value={this.props.value} onChange={this.props.changeInput} onKeyPress={this.props.addTodo} />
    )
  }
}

export default InputText