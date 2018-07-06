import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
				<Person name="Igor" age = "30">Moje hobby: sport</Person>
			</div>

			// równoważny zapis
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;
