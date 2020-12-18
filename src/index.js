import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import reportWebVitals from './reportWebVitals';
import Header from './views/components/Header';
import Todo from './views/pages/Todo';

const GlobalStyle = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #5c5c5c;
  }

  main {
    display: block;
  }
  
  #root {
    height: 100%;
  }
`;

const theme = {
  color: {
    main: '#009688',
    lightGray: '#dedede'
  }
};

const AppWrapper = styled.div`
  height: calc(100% - 60px);
  position: relative;
  width: 100%;
  padding-top: 60px;
`;



const App = (props) => (
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Header/>
      <AppWrapper >
        <Todo/>
      </AppWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
