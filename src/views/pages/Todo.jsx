import React from 'react';
import {TodoProvider} from '../components/TodoContext';
import TodoList from '../components/TodoList';
import TodoContents from "../components/TodoContents";
import AddButton from '../components/AddButton';

export default class Todo extends React.Component {
  render() {
    return (
      <TodoProvider>
        <TodoList/>
        <TodoContents/>
        <AddButton/>
      </TodoProvider>
    );
  }
}
