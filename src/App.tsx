import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppBar from './components/ui/app-bar/AppBar';
import Home from './scenes/Home/index';
import Projects from './scenes/Projects/index';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />

        <Switch>
            <Route path="/Projects">
              <Projects />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
