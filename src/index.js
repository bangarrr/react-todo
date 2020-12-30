import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from "@material-ui/core";
import {StylesProvider, ThemeProvider as MaterialThemeProvider} from "@material-ui/styles";
import {createGlobalStyle, ThemeProvider as StyledThemeProvider} from 'styled-components';
import theme from './Theme';
import Header from 'views/components/layout/Header';
import Todo from 'views/pages/Todo/Index';

const GlobalStyle = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  #root {
    height: 100%;
  }
  
  main {
    padding-top: 64px;
  }
`;

const App = (props) => (
  <React.StrictMode>
    <StylesProvider injectFirst>
      <CssBaseline/>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle/>
          <Header/>
          <main>
            <Todo/>
          </main>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);
ReactDOM.render(<App/>, document.getElementById('root'));
