import React from 'react';
import { TodoConsumer } from "views/pages/Todo/Context";
import styled from "styled-components";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

// 独自propsのwarning回避
//https://tech-1natsu.hatenablog.com/entry/2019/07/06/115606
const StyledListItem = styled(({active, ...props}) => (
  <ListItem {...props}>
    {props.children}
  </ListItem>
))`
  border-bottom: 1px solid ${props => props.theme.palette.border};
  cursor: pointer;
  width: 200px;
  border-left: ${props => props.active ? '5px solid ' + props.theme.palette.primary.main : 'none'};
`;

export default class TodoList extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {val => (
          <Drawer variant="permanent">
            <List disablePadding>
              {val.todos.map((todo, index) => {
                return (
                  <StyledListItem
                    key={index}
                    onClick={() => val.itemClicked(index)}
                    active={index === val.currentIndex}
                  >
                    <ListItemText primary={todo.title}/>
                  </StyledListItem>
                )
              })}
            </List>
          </Drawer>
        )}
      </TodoConsumer>
    );
  }
}

