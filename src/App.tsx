import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppBar from './components/ui/app-bar/AppBar';
import Home from './scenes/Home/index';
import Experience from './scenes/Experience/index';
import Projects from './scenes/Projects/index';
import Skills from './scenes/Skills/index';

function App() {
  const prefersDarkMode = true;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#ff4d5a',
          },
        },
        overrides: {
          MuiCssBaseline: {
            '@global': {
              '*': {
                'scroll-bar-width': 'thin',
              },
              '*::-webkit-scrollbar': {
                width: '5px',
              },
              '*::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '*::-webkit-scrollbar-thumb': {
                background: 'white',
              },
              '*::-webkit-scrollbar-thumb:hover': {
                background: 'white',
              },
            },
          }
        }
      }),
    [prefersDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar />

          <Switch>
              <Route path="/experience">
                <Experience />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/skills">
                <Skills />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
