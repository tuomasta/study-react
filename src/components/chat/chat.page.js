import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ChatChannel from './chat-channel.js'
import ChatEntry from './chat-entry.js'
import * as channelActions from '../../actions/channel.actions';

class ChatPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createMessage = this.createMessage.bind(this);
        this.onInputChanges = this.onInputChanges.bind(this);
        this.registerFocusListener = this.registerFocusListener.bind(this);
        this.state = {
            message: ''
        }

        this.onFocus = null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return;

        if (prevProps.channel.name !== this.props.channel.name) {
            this.props.channelActions.loadMessages(this.props.channel.name);
            this.setFocusToChat();
        }
    }

    registerFocusListener(listener) {
        this.onFocus = listener;
    }

    createMessage(event) {
        event.preventDefault();
        if (!this.state.message) return;

        this.props.channelActions.createMessage(this.props.channel.name, this.props.username, this.state.message);
        this.state.message = '';
        this.setFocusToChat();
    }

    setFocusToChat() {
        if (this.onFocus) this.onFocus();
    }

    onInputChanges(event) {
        this.setState({
            message: event.target.value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {
                        this.props.channel.name ?
                            <ChatChannel
                                channel={this.props.channel}
                                inputMessage={this.state.message}
                                onCreateMessage={this.createMessage}
                                onMessageChange={this.onInputChanges}
                                registerFocusListener={this.registerFocusListener} /> :
                            <ChatEntry />
                    }
                </div>
            </div>
        );
    }
}

ChatPage.propTypes = {
    username: PropTypes.string.isRequired,
    channel: PropTypes.object,
    channelActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
        channel: state.channel
    };
}

function mapDispatchToProps(dispatch) {
    return {
        channelActions: bindActionCreators(channelActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);