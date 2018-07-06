import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
				<Person/>
			</div>

			// równoważny zapis
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;
