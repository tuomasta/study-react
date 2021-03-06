import React, { PropTypes } from 'react';

function ChatMessage({ message }) {
    return (
        <div className="message">
            <p><b><small>{message.sender}:</small></b></p>
            <p>{message.text}</p>
        </div>
    );
}

ChatMessage.propTypes = {
    message: PropTypes.object.isRequired
}

export default ChatMessage;