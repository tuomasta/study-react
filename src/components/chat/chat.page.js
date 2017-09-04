import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ChatPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h2>
                {this.props.channelName}
            </h2>
        );
    }
}

ChatPage.propTypes = {
    channelName: PropTypes.string
}

function mapStateToProps(state) {
    return {
        channelName: state.channel ?
            `@${state.channel.channelName}` :
            'Join to a channel'
    };
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);