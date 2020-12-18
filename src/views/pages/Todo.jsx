import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import TodoContents from "../components/TodoContents";
import AddButton from '../components/AddButton';
import TodoDialog from '../components/TodoDialog';

const StyledDiv = styled.div`
`;

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        title: 'First Todo!',
        contents: 'This is your first task.'
      }],
      dialogOpen: false
    };
    this.state.currentTodo = this.state.todos[0];
  }

  deleteItem = (i) => {
    const todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
        todos: todos
    })
  };

  addTodo = (title, content) => {
    const todos = this.state.todos.slice();
    todos.push({
      title: title,
      contents: content
    });
    this.setState({
      todos: todos
    });
  };

  itemClicked = (i) => {
    this.setState((state) => ({
      currentTodo: state.todos[i]
    }));
  };

  render() {
    return (
      <StyledDiv>
        <TodoList todoList={this.state.todos} onClick={this.itemClicked}/>
        <TodoContents todo={this.state.currentTodo} />
        <AddButton
          onClick={() => {this.setState({dialogOpen: !this.state.dialogOpen})}}
        />
        <TodoDialog
          dialogOpen={this.state.dialogOpen}
          addTodo={this.addTodo}
          deleteDialog={() => {this.setState({dialogOpen: false})}}
        />
      </StyledDiv>
    );
  }
}
