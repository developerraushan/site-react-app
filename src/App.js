import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BugList from './components/BugList';

const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path = "/" component = {BugList}></Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
