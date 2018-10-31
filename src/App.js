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

  messageRead = (id) => {
    console.log("messageRead called", id)
    const updatedMessages = this.state.messages.map(message => {
      if (id === message.id) {
        message.read = !message.read;
      }
      return message;
    })
    this.setState({
      messages: updatedMessages
    })

  }

  render() {
    return (
      <div className="App container">
        <Toolbar allSelected={this.state.allSelected}></Toolbar>
        <Messages messages={this.state.messages} messageRead={this.messageRead}></Messages>
      </div>
    );
  }
}

export default App;
