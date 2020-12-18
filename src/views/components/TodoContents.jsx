import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  width: calc(100% - 310px);
  margin-left: 250px;
  padding: 15px 30px;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid ${props => props.theme.color.lightGray};
`;

const TodoContent = styled.div`
  margin-top: 15px;
  font-size: 16px;
`;

export default class TodoContents extends React.Component {
  render() {
    const todo = this.props.todo;

    return (
      <StyledDiv>
        <TodoTitle>{todo ? todo.title : ''}</TodoTitle>
        <TodoContent>{todo ? todo.contents : ''}</TodoContent>
      </StyledDiv>
    );
  }
}
