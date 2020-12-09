import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import Todo from './views/pages/Todo';

const AppWrapper = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 100%;
  margin: 20px auto;
  max-width: 500px;
  padding: 20px 40px;
  position: relative;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weght: normal;
  color: #009688;
  margin-bottom: 32px;
`;

const GlobalStyle = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    display: block;
  }
`;

const App = (props) => (
    <React.StrictMode>
      <AppWrapper>
        <GlobalStyle />
        <header>
          <HeaderTitle>ToDoApp</HeaderTitle>
        </header>
        <Todo />
      </AppWrapper>
    </React.StrictMode>
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
