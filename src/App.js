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

	switchNameHandler = (newPos) => {
		let curPerson = this.state.curPerson;
		if (newPos !== null) curPerson = 0;
		else {
			if (curPerson < this.state.persons.length - 1) curPerson++;
			else curPerson = 0;
		}
		this.setState({curPerson});
	};

	nameChangeHandler = (event) => {
		let curPerson = parseInt(event.target.value);
		if (curPerson !== null && curPerson >= 0 && curPerson < this.state.persons.length)
		this.setState({curPerson});
		else this.setState({curPerson: 0})
	};

	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
				<button onClick={this.switchNameHandler.bind(this, 0)}>Zmień osobę</button>
				{/*<button onClick={() => this.switchNameHandler(0)}>Zmień osobę</button>*/}
				<Person
					name={this.state.persons[this.state.curPerson].name}
					age = {this.state.persons[this.state.curPerson].age}
					click = {this.switchNameHandler}
					curPerson = {this.state.curPerson}
					changeName = {this.nameChangeHandler}>
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