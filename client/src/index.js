import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import djelloApp from './reducers';
import AppContainer from './containers/AppContainer';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     light: palette.primary[300],
  //     main: palette.primary[500],
  //     dark: palette.primary[700],
  //     contrastText: getContrastText(palette.primary[500]),
  //   },
  //   secondary: {
  //     light: palette.secondary.A200,
  //     main: palette.secondary.A400,
  //     dark: palette.secondary.A700,
  //     contrastText: getContrastText(palette.secondary.A400),
  //   },
  //   error: {
  //     light: palette.error[300],
  //     main: palette.errorr[500],
  //     dark: palette.error[700],
  //     contrastText: getContrastText(palette.error[500]),
  //   },
  // },
});

var store = createStore(djelloApp, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);
