import React from 'react';
import {
  Link
} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div class="jumbotron" >
        <h1>This is the home page of my study project</h1>
        <p>I really should figure out a topic for this.</p>
        <Link to="about" class="btn btn-primary btn-lg" >Learn more</Link>
      </div>
    );
  }
}

export default HomePage;