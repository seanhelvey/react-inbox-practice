import React, { Component } from 'react';
import '../App.css';

let Message = ({message, messageRead}) => {
    return (
        <div className={message.read ? "row message read" : "row message unread"} onClick={() => messageRead(message.id)}>
        <div class="col-xs-1">
            <div class="row">
            <div class="col-xs-2">
                <input type="checkbox" />
            </div>
            <div class="col-xs-2">
                <i class="star fa fa-star-o"></i>
            </div>
            </div>
        </div>
        <div class="col-xs-11">
            <a href="#">
                {message.body}
            </a>
        </div>
        </div>
    )
} 

export default Message;