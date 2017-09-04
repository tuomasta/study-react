import React, { PropTypes } from 'react';

function JoinChannel({ onChange, onJoin }) {
    return (
        <div className="form-group">
            <input
                placeholder="channel name"
                id="channel"
                required
                type="text"
                onChange={onChange}
                className="form-control" />
            <button
                onClick={onJoin}
                className="btn btn-default">Join</button>
        </div>
    );
}

JoinChannel.propTypes = {
    onChange: PropTypes.func.isRequired,
    onJoin: PropTypes.func.isRequired
}

export default JoinChannel;