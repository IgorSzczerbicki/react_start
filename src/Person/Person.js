import React from 'react'

const person = (props) => {
	return (
		<div>
			<p>Imie: {props.name}, wiek: {props.age}</p>
			<p>{props.children}</p>
		</div>
	)
};

export default person;