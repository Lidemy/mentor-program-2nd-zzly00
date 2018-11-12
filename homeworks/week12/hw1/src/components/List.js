import React from 'react'
import ListInput from './ListInput'
import ListItem from './ListItem'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      value: ''
    }
    this.id = 0
  }

  changeInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  addTodo(e) {
    const {value, todos} = this.state
    if (value && (e.key == 'Enter' || e.target.className == 'list__input__btnAdd')) {
      this.setState({
        todos: [
          {
            value: value,
            id: this.id++,
            status: false
          },
          ...todos
        ],
        value: ''
      })
    }
  }

  removeTodo(todo) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== todo.id)
    })
  }

  finishTodo(todo) {
    const {todos} = this.state
    const index = todos.findIndex(item => item.id === todo.id)
    todos[index].status = !todos[index].status
    this.setState({
      todos: todos
    })  
  }

  render() {
    return (
      <div className="list">
        <ListInput value={this.state.value} changeInput={this.changeInput.bind(this)} addTodo={this.addTodo.bind(this)} />
        <div className="list__item">
          {this.state.todos.map(todo => <ListItem key={todo.id} todo={todo} removeTodo={this.removeTodo.bind(this)} finishTodo={this.finishTodo.bind(this)} />)}
        </div>
      </div>
    )
  }
}