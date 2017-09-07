import React, { PropTypes } from 'react';

function ChatInput({ onSend, onChange, message }) {
    return (
        <form className="message-input row" onsubmit={onSend}>
            <div className="form-group col-md-11">
                <input
                    onChange={onChange}
                    className="form-control"
                    id="newMessage"
                    value={message}></input>
            </div>
            <button className="btn btn-primary col-md-1" onClick={onSend}>Send</button>
        </form>
    );
}

ChatInput.propTypes = {
    onSend: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}

export default ChatInput;