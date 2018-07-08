import React from 'react'

const person = (props) => {
	return (
		<div>
			<p onClick={props.click.bind(this, null)}>Imie: {props.name}, wiek: {props.age} - click!</p>
			<p>{props.children}</p>
			<input type = "text" onChange={props.changeName} value = {props.curPerson} />
		</div>
	)
};

export default person;