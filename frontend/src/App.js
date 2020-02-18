import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { HashRouter } from "react-router-dom";
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import { SnackbarProvider } from 'notistack';
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
        <HashRouter hashType="slash">
            <Routes />
          </HashRouter>
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}
