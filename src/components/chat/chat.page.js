import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import * as channelActions from '../../actions/channel.actions';

class ChatPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createMessage = this.createMessage.bind(this);
        this.onInputChanges = this.onInputChanges.bind(this);

        this.state = {
            message: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.channel || prevProps.channel.name !== this.props.channel.name) {
            if (this.props.channel) this.props.channelActions.loadMessages(this.props.channel.name);
        }
    }

    renderMessages() {
        if (!this.props.channel || !this.props.channel.messages) return null;
        return (
            <div className="messages-area">
                {this.props.channel.messages.map(message => <ChatMessage message={message} />)}
            </div>
        );
    }

    onInputChanges(event) {
        this.setState({
            message: event.target.value
        });
    }

    createMessage(event) {
        event.preventDefault();
        if (!this.state.message) return;

        this.props.channelActions.createMessage(this.props.channel.name, this.props.username, this.state.message);
        this.state.message = '';
    }

    renderInput() {
        if (!this.props.channel) return null;
        return (
            <ChatInput
                onSend={this.createMessage}
                onChange={this.onInputChanges}
                message={this.state.message} />
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>
                        {this.props.headerText}
                    </h2>
                    {this.renderMessages()}
                    {this.renderInput()}
                </div>
            </div>
        );
    }
}

ChatPage.propTypes = {
    headerText: PropTypes.string,
    username: PropTypes.string.isRequired,
    channel: PropTypes.object,
    channelActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
        channel: state.channel,
        headerText: state.channel ?
            `@${state.channel.name}` :
            'Join to a channel'
    };
}

function mapDispatchToProps(dispatch) {
    return {
        channelActions: bindActionCreators(channelActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);