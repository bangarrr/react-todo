import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import TodoContents from "../components/TodoContents";
import AddButton from '../components/AddButton';
import TodoDialog from '../components/TodoDialog';

const StyledDiv = styled.div`
  height: calc(100% - 70px);
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
    this.state.currentIndex = 0;
  }

  deleteItem = (i) => {
    const todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
        todos: todos
    })
  };

  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push({
      title: 'Additional Todo',
      contents: 'Todo Contents'
    });
    this.setState({
      todos: todos
    });
  };

  itemClicked = (i) => {
    this.setState((state) => ({
      currentTodo: state.todos[i],
      currentIndex: i
    }));
  };

  changeTitle = (title) => {
    const todo = this.state.todos[this.state.currentIndex];
    todo.title = title;
    this.setState({
      todo: todo,
      currentTodo: todo
    });
  };

  changeContent = (content) => {
    const todo = this.state.todos[this.state.currentIndex];
    todo.contents = content;
    this.setState({
      todo: todo,
      currentTodo: todo
    });
  };

  render() {
    return (
      <StyledDiv>
        <TodoList todoList={this.state.todos} onClick={this.itemClicked} currentIndex={this.state.currentIndex}/>
        <TodoContents todo={this.state.currentTodo} changeTitle={this.changeTitle} changeContent={this.changeContent}/>
        <AddButton
          onClick={this.addTodo}
        />
      </StyledDiv>
    );
  }
}
