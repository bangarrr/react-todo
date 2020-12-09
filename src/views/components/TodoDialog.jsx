import React from 'react';
import styled from 'styled-components';

const Dialog = styled.div`
  background-color: #fff;
  bottom: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  left: 0;
  padding: 12px;
  position: absolute;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  right: 0;
  top: 0;
  width: 300px;
  height: 300px;
  z-index: 1000;
  margin: 20px auto;

  /* 
    Dialogコンポーネントに渡されたpropsのopenがtrueかfalseによってスタイルを切り替える。 
    openがtrueの場合は表示。falseの場合は非表示とする。  
  */
  ${props =>
  props.open
    ? `
    opacity: 1;
    pointer-events: auto;
    transform: scale(1, 1);
  `
    : `
    opacity: 0;
    pointer-events: none;
    transform: scale(0, 0);
  `}
`;

const DialogTitle = styled.h2`
  font-size: 18px;
  text-align: center;
`;

// styled-componentsでは sttrs()関数によって属性を追加できる。
const DialogTitleInput = styled.input.attrs({type: "text"})`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  margin: 0 auto 40px;
  padding: 8px;
  outline: none;
`;

const DialogBtn = styled.button`
  background-color: #009688;
  border: 0;
  border-radius: 6px;
  color: #fafafa;
  cursor: pointer;
  display: block;
  font-size: 18px;
  margin: 0 auto;
  outline: none;
  padding: 12px 0;
  transition-duration: 0.2s;
  width: 200px;

  &:hover {
    opacity: 0.8;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: -8px;
  right: -8px;
`;

const DialogCancelBtn = props => (
  // https://github.com/google/material-design-icons/blob/master/LICENSE
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    onClick={props.onClick}
  >
    <path
      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
  </Svg>
);

export default class TodoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  addTodo = () => {
    const todoTitle = this.state.title;
    if (todoTitle === '') return;
    this.props.addTodo(todoTitle);
  };

  render() {
    return (
      <Dialog open={this.props.dialogOpen}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogTitleInput value={this.state.title} onChange={this.handleChange}/>
        <DialogBtn onClick={this.addTodo}>Add</DialogBtn>
        <DialogCancelBtn onClick={this.props.deleteDialog}/>
      </Dialog>
    );
  }
}
