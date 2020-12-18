import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.lightGray};
  display: flex;
  list-style: none;
  padding: 12px 24px;
  cursor: pointer;
`;

export default class TodoItem extends React.Component {
  render() {
    return (
      <Item first={this.props.isFirst} onClick={this.props.onClick}>
        {this.props.value}
      </Item>
    )
  }
}
