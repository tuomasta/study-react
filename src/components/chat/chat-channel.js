import React, { PropTypes } from 'react';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';

class ChatChannel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.messagesEnd = null;
    }

    componentDidUpdate() {
        if (this.messagesEnd) this.messagesEnd.scrollIntoView();
    }

    renderMessages() {
        if (!this.props.channel.messages) return null;
        return (
            <div className="messages-area">
                {this.props.channel.messages.map(
                    (message, index) => <ChatMessage message={message} key={"message-" + index} />)}
                <div ref={e => this.messagesEnd = e}></div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h2 className="page-header">
                    @{this.props.channel.name}
                </h2>
                {this.renderMessages()}
                <ChatInput
                    onSend={this.props.onCreateMessage}
                    onChange={this.props.onMessageChange}
                    inputMessage={this.props.inputMessage}
                    registerFocusListener={this.props.registerFocusListener} />
            </div>);
    }
}

ChatChannel.propTypes = {
    channel: PropTypes.object.isRequired,
    onCreateMessage: PropTypes.func.isRequired,
    onMessageChange: PropTypes.func.isRequired,
    inputMessage: PropTypes.string.isRequired,
    registerFocusListener: PropTypes.func.isRequired
}


export default ChatChannel;