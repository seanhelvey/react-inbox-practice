import React, { Component } from 'react';
import '../App.css';

import Message from './Message.js'

let Messages = ({messages}) => {
    return (
        messages.map(message => {
            return <Message message={message}></Message>
        })
    )
} 

export default Messages;