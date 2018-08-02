import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import TaskView from './TaskView';

class App extends Component {
     constructor(props) {
      super(props)
      this.state = {
        taskName: '',
        taskDate: '',
        taskTime: '',
        taskDesc: ''
      }
     }

  render() {
    return (
    <main className="App">
      <Switch>
        <Route path='/newtask' render={() => (
          <TaskView />
          )} />
        <Route exact path='/' render={() => (
          <Container />

          )}/>
      </Switch>
    </main>
    );
  }
}

export default App;
