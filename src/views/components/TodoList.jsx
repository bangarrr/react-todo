import React from 'react';
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  border-right: 1px solid ${props => props.theme.color.lightGray};
`;

export default class TodoList extends React.Component {
  render() {
    return (
      <ListWrapper>
        {this.props.todoList.map((todo, index) => {
          return <TodoItem key={index}
                           value={todo.title}
                           active={index == this.props.currentIndex}
                           deleteClick={this.deleteItem}
                           index={index}
                           onClick={() => this.props.onClick(index)}
          />
        })}
      </ListWrapper>
    );
  }
}
