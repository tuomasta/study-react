import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as userActions from '../../actions/user.actions'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.actions.logoutUser();
        browserHistory.push('/');
    }

    renderLogoutButton() {
        if (this.props.isLogoutVisible) {
            return (
                <div className="navbar-header navbar-right">
                    <button type="button"
                        className="btn btn-default navbar-btn"
                        onClick={this.logout}>Logout</button>
                </div>);
        }

        return null;
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-brand"
                            activeClassName="active">Chat Master 2000</p>
                    </div>
                    {this.renderLogoutButton()}
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired,
    isLogoutVisible: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isLogoutVisible: !!state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);