import React from 'react';
import TodoItem from '../components/TodoItem';
import AddButton from '../components/AddButton';
import TodoDialog from '../components/TodoDialog';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        title: 'First Todo!'
      }],
      dialogOpen: false
    };
  }

  deleteItem = (i) => {
    const todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
        todos: todos
    })
  };

  addTodo = (title) => {
    const todos = this.state.todos.slice();
    todos.push({
      title: title
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    const todoItems = this.state.todos.map((todo, index) => {
      return <TodoItem key={index} value={todo.title} isFirst={index === 0} deleteClick={this.deleteItem}
                       index={index}/>
    });
    return (
      <div>
        {todoItems}
        <AddButton
          onClick={() => {this.setState({dialogOpen: !this.state.dialogOpen})}}
        />
        <TodoDialog
          dialogOpen={this.state.dialogOpen}
          addTodo={this.addTodo}
          deleteDialog={() => {this.setState({dialogOpen: false})}}
        />
      </div>
    );
  }
}
