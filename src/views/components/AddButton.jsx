import React from 'react';
import styled from 'styled-components';
import { TodoConsumer } from "views/pages/Todo/Context";
import { IconButton, Icon } from "@material-ui/core";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const AddIcon = styled(Icon)`
  font-size: 32px;
`;

export default class AddButton extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {val => (
          <StyledIconButton
            color="primary"
            onClick={() => val.addTodo()}
          >
            <AddIcon>add_circle</AddIcon>
          </StyledIconButton>
        )}
      </TodoConsumer>
    )
  }
}
