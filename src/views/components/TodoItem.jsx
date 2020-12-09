import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  align-items: center;
  border: 1px solid #ccc;
  border-top: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 12px 24px;
  
  ${props => (props.first ? "border-top: 1px solid #ccc;" : "")}
`;

const CloseIcon = props => (
  // https://github.com/google/material-design-icons/blob/master/LICENSE
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    onClick={props.onClick}
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

export default class TodoItem extends React.Component {
  render() {
    return (
      <Item first={this.props.isFirst}>
        {this.props.value}
        <CloseIcon onClick={() => this.props.deleteClick(this.props.index)}/>
      </Item>
    )
  }
}
