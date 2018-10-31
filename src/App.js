import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar.js'
import Messages from './components/Messages.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allSelected: true,
      messages: [1,2,3,4]
    }
  }

  componentDidMount() {
    fetch('http://localhost:8082/api/messages')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          messages: myJson
        })
      });
  }

  render() {
    return (
      <div className="App container">
        <Toolbar allSelected={this.state.allSelected}></Toolbar>
        <Messages messages={this.state.messages}></Messages>
      </div>
    );
  }
}

export default App;
