import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.checkbox = this.checkbox.bind(this);
		this.state = { visible: false }
	}

  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={ this.checkbox }/> Mostrar información importante</label>
        { this.state.value ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> : null }
      </div>
    );
  }

  checkbox(e) {
  	this.setState({
  		value: e.target.checked
  	});
  }
}

export default App;
