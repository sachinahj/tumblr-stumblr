import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import BootstrapFlex from './scss/bootstrap-flex.scss';
import Style from './scss/main.scss';

import Favorites from './components/Favorites'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div className="container">
        <Favorites />
    </div>
  </MuiThemeProvider>
);

export default App;
