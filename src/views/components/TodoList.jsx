import React from 'react';
import {TodoConsumer} from "./TodoContext";
import styled from "styled-components";

const ListWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  border-right: 1px solid ${props => props.theme.color.lightGray};
`;

const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.lightGray};
  display: flex;
  list-style: none;
  padding: 12px 24px;
  cursor: pointer;
  border-left: ${props => props.active ? '5px solid ' + props.theme.color.main : 'none'};
`;

export default class TodoList extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {val => (
          <ListWrapper>
            {val.todos.map((todo, index) => {
              return (
                <ListItem key={index}
                          active={index === val.currentIndex}
                          onClick={() => val.itemClicked(index)}
                >
                  {todo.title}
                </ListItem>
              )
            })}
          </ListWrapper>
        )}
      </TodoConsumer>
    );
  }
}
