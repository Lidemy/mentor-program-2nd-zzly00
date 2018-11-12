import React from 'react'

export default class ListItem extends React.Component {
  handleDelete() {
    const {todo, removeTodo} = this.props
    removeTodo(todo)
  }
  
  handleDone() {
    const {todo, finishTodo} = this.props
    finishTodo(todo)
  }

  render() {
    const {todo} = this.props
    return (
      <div className="item" data-seq={todo.id}>
        <button className={'done' + (todo.status ? ' done--pink' : '')} onClick={this.handleDone.bind(this)}></button>
        <div className={'content' + (todo.status ? ' content-done' : '')}>{todo.value}</div>
        <div className="delete" onClick={this.handleDelete.bind(this)}><i className="fas fa-times"></i></div>
      </div>
    )
  }
}