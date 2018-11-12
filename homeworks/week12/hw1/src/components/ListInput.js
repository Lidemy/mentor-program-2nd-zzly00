import React from 'react'
import InputText from './InputText'
import BtnAdd from './BtnAdd'

export default class ListInput extends React.Component {
  render() {
    const {value, changeInput, addTodo} = this.props
    return (
      <div className="list__input">
        <InputText value={value} changeInput={changeInput} addTodo={addTodo} />
        <BtnAdd value={value} addTodo={addTodo} />
      </div>
    )
  }
}