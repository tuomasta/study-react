import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ChatPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                User: {this.props.user.username}
            </div>
        );
    }
}

ChatPage.propTypes = {
    user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);