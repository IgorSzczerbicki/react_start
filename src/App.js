import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>React Start</h1>
			</div>

			// równoważny zapis 
			//
			// React.createElement('div', null, React.createElement('h1', {className:"App"}, 'React Start Element'))
		);
	}
}

export default App;
