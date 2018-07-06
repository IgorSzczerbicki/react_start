import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

	state = {
		persons: [
			{name: 'Igor', age: 30},
			{name: 'Anna', age: 25},
			{name: 'Marcin', age: 33}
		]
	};
	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
				<Person name={this.state.persons[0].name} age = {this.state.persons[0].age}>Moje hobby: sport</Person>
			</div>

			// równoważny zapis
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;
