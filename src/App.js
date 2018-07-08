import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

	state = {
		persons: [
			{name: 'Igor', age: 30},
			{name: 'Anna', age: 25},
			{name: 'Marcin', age: 33}
		],
		curPerson: 0
	};

	switchNameHandler = () => {
		let curPerson = this.state.curPerson;
		if (curPerson < this.state.persons.length -1) curPerson++;
		else curPerson = 0;
		this.setState({curPerson});
	};

	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
				<button onClick={this.switchNameHandler}>Zmień osobę</button>
				<Person
					name={this.state.persons[this.state.curPerson].name}
					age = {this.state.persons[this.state.curPerson].age}
					click = {this.switchNameHandler}>
					Moje hobby: sport
				</Person>
			</div>

			// równoważny zapis
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;