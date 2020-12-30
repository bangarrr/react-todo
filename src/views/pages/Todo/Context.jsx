import React from 'react';

const TodoContext = React.createContext();
const TodoConsumer = TodoContext.Consumer;

class TodoProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        title: 'First Todo!',
        contents: 'This is your first task.'
      }],
      dialogOpen: false,
      deleteItem: this.deleteItem,
      addTodo: this.addTodo,
      itemClicked: this.itemClicked,
      changeTitle: this.changeTitle,
      changeContent: this.changeContent
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
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export {TodoConsumer, TodoProvider};
