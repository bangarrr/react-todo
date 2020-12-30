import React from 'react';
import {TodoProvider} from 'views/pages/Todo/Context';
import TodoList from 'views/components/TodoList';
import TodoContents from "views/components/TodoContents";
import AddButton from 'views/components/AddButton';

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
