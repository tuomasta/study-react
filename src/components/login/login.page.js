import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as userActions from '../../actions/user.actions'

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: ''
    };

    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  loginUser(event) {
    this.props.actions.loginUser(this.state.username);
    browserHistory.push('/chat');

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Login</h1>
        <div className="row">
          <form className="col-md-6">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input required
                className="form-control"
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}></input>
            </div>
            <button
              className="btn btn-success"
              onClick={this.loginUser}>Login</button>
          </form>
        </div>
        <br />
        <Link to="about" class="btn btn-primary btn-lg" >Learn more</Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);