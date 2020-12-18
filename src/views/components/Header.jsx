import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  padding: 15px;
  margin-bottom: 60px;
  border-bottom: 1px solid;
  height: 30px;
  width: 100%;
  border-color: ${props => props.theme.color.lightGray};
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weght: normal;
  
  color: ${props => props.theme.color.main};
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <HeaderTitle>ToDoApp</HeaderTitle>
      </StyledHeader>
    )
  }
}
