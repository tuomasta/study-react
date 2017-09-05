import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ChatMessage from './chat-message';
import * as channelActions from '../../actions/channel.actions';

class ChatPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
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

    render() {
        return (
            <div className="container">
                <h2>
                    {this.props.headerText}
                </h2>
                {this.renderMessages()}
            </div>
        );
    }
}

ChatPage.propTypes = {
    headerText: PropTypes.string,
    channel: PropTypes.object,
    channelActions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
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