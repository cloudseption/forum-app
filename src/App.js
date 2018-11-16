import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Topic from './components/Topic/Topic';
import Thread from './components/Thread/Thread'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/topic/:topicID" component={Topic} />
          <Route exact path="/topic/:topicID/thread/:threadID" component={Thread} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
