import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Dashboard from './Dashboard';
import ViewJobDetails from './ViewJobDetails';
import ThemedToolbar from './ThemedToolbar';

import ThemeContext from '../contexts/ThemeContext';

import dark from '../themes/dark';
import light from '../themes/light';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      const updatedTheme = this.state.theme === 'dark' ? light : dark;
      this.setState(updatedTheme);
    };

    this.state = {
      ...light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    const stateTheme = { ...this.state };
    return (
      <div>
        <Helmet>
          <style>{`body { background-color: ${stateTheme.backgroundColor}; }`}</style>
        </Helmet>
         <ThemeContext.Provider value={stateTheme}>
            <ThemedToolbar />
              <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={Dashboard}></Route>
                  <Route exact path='/job' component={ViewJobDetails}></Route>
                </Switch>
              </BrowserRouter>
          </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
