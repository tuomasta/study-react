import React, { PropTypes } from 'react';

function ChatInput({ onSend, onChange, inputMessage, registerFocusListener }) {
    let input;
    registerFocusListener(() => input.focus());
    return (
        <form className="message-input row" onsubmit={onSend}>
            <div className="form-group col-xs-10">
                <input
                    ref={e => input = e}
                    onChange={onChange}
                    className="form-control"
                    id="newMessage"
                    value={inputMessage}></input>
            </div>
            <button className="btn btn-primary col-xs-2" onClick={onSend}>Send</button>
        </form>
    );
}

ChatInput.propTypes = {
    onSend: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    inputMessage: PropTypes.string.isRequired,
    registerFocusListener: PropTypes.func.isRequired
}

export default ChatInput;