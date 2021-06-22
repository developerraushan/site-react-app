import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BugList from './components/BugList';
import AddBug from './components/AddBug';
import Header from './components/Header';

const App = () => {
  return (
    <div>
    <Router>
    <Header />
      <Switch>
        <Route path = "/" exact component = {BugList}></Route>
        <Route path = "/add" component = {AddBug}></Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
