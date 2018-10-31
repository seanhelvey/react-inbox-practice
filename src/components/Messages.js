import React, { Component } from 'react';
import '../App.css';

import Message from './Message.js'

let Messages = ({messages, messageRead}) => {
    return (
        messages.map(message => {
            return <Message message={message} messageRead={messageRead}></Message>
        })
    )
} 

export default Messages;