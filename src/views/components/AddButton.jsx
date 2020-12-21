import React from 'react';
import styled from 'styled-components';
import {TodoConsumer} from "./TodoContext";

const Btn = styled.button`
  background-color: #009688;
  border: 0;
  border-radius: 50%;
  bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #fafafa;
  cursor: pointer;
  display: block;
  height: 50px;
  font-size: 18px;
  margin: 0 auto;
  outline: none;
  position: fixed;
  right: 20px;
  transition-duration: 0.2s;
  width: 50px;
  
  &:hover {
    opacity: 0.8;
  }
`;
export default class AddButton extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {val => (
          <Btn onClick={() => val.addTodo()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={"#fff"}
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </Btn>
        )}
      </TodoConsumer>
    )
  }
}
