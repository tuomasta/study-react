import React, { PropTypes } from 'react';
import Header from './shared/header';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
}

export default App;