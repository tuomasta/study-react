import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as userActions from '../../actions/user.actions'
import * as channelActions from '../../actions/channel.actions'
import JoinChannel from './join-channel'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.logout = this.logout.bind(this);
        this.joinChannel = this.joinChannel.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            channel: ''
        }
    }

    logout() {
        this.props.userActions.logoutUser();
        browserHistory.push('/');
    }

    joinChannel(event) {
        this.props.channelActions.joinChannel(this.state.channel);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    renderUserInfo() {
        if (this.props.isUserLoggedIn) {
            return (
                <div>
                    <form className="navbar-form navbar-left">
                        <JoinChannel
                            onChange={this.handleChange}
                            onJoin={this.joinChannel} />
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-user"></span>
                                &nbsp;{this.props.username}
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={this.logout}>
                                <span className="glyphicon glyphicon-log-out"></span>
                                &nbsp;Logout
                        </a>
                        </li>
                    </ul>
                </div>);
        }

        return null;
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand"
                            href="#"
                            activeClassName="active">Chat Master 2000</a>
                    </div>
                    {this.renderUserInfo()}
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    userActions: PropTypes.object.isRequired,
    channelActions: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
}

function mapStateToProps(state) {
    let username = '';
    if (state.user) username = state.user.username;
    return {
        isUserLoggedIn: !!state.user,
        username: username
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        channelActions: bindActionCreators(channelActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);