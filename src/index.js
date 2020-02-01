import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import theme from './theme'
import App from './App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,400i,600,600i&display=swap');
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    // background-color: ${theme.primary};
    color: ${theme.text};
  }
`;

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <App />
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
