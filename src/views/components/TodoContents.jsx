import React from 'react';
import styled from "styled-components";
import { TodoConsumer } from "views/pages/Todo/Context";
import { TextField, InputBase } from "@material-ui/core";

const StyledDiv = styled.div`
  margin-left: 200px;
  padding: 15px 60px 15px 30px;
`;

const Title = styled(TextField)`
  input {
    font-size: 24px;
    padding: 8px 0;
  }
`;

const Content = styled(InputBase)`
  margin-top: 20px;
`;


export default class TodoContents extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {val => (
          <StyledDiv>
            <Title
              value={val.currentTodo ? val.currentTodo.title : ''}
              onChange={(e) => val.changeTitle(e.target.value)}
              fullWidth
            />
            <Content
              value={val.currentTodo ? val.currentTodo.contents : ''}
              onChange={(e) => val.changeContent(e.target.value)}
              fullWidth
              multiline
              rows={30}
            />
          </StyledDiv>
        )}
      </TodoConsumer>
    );
  }
}
