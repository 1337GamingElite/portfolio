import React, { Component } from 'react';
import TitleBar from './components/TitleBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './components/Theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <div>
          <TitleBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
