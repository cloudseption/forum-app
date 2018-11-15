import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Topic from './components/Topic/Topic';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/topic/:topicID" component={Topic} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
