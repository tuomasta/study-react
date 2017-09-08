import React, { PropTypes } from 'react';

function JoinChannel({ onChange, onJoin }) {
    return (
        <form onSubmit={onJoin}>
            <input
                placeholder="type a channel to join"
                id="channel"
                required
                type="text"
                onChange={onChange}
                className="form-control" />
        </form>
    );
}

JoinChannel.propTypes = {
    onChange: PropTypes.func.isRequired,
    onJoin: PropTypes.func.isRequired
}

export default JoinChannel;