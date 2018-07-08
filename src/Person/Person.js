import React from 'react'

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>Imie: {props.name}, wiek: {props.age} - click!</p>
			<p>{props.children}</p>
		</div>
	)
};

export default person;