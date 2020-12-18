import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  height: calc(100% - 5px);
  width: calc(100% - 310px);
  margin-left: 250px;
  padding: 15px 30px;
`;

const TitleInput = styled.input.attrs({type: 'text'})`
  font-size: 24px;
  display: block;
  border-bottom: 1px solid ${props => props.theme.color.lightGray};
  border-top: none;
  border-right: none;
  border-left: none;
  width: 100%;
  outline: 0;
  padding: 5px;
`;

const Content = styled.textarea`
  margin-top: 15px;
  font-size: 16px;
  display: block;
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  outline: 0;
`;

export default class TodoContents extends React.Component {
  render() {
    const todo = this.props.todo;

    return (
      <StyledDiv>
        <TitleInput value={todo ? todo.title : ''} onChange={(e) => this.props.changeTitle(e.target.value)}/>
        <Content value={todo ? todo.contents : ''} onChange={(e) => this.props.changeContent(e.target.value)}></Content>
      </StyledDiv>
    );
  }
}
