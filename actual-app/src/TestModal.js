'use strict';

import React from 'react';


export default class TestModal extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(route) {
		this.props.testThisRoute(route);
	}

	render() {
		const route = this.props.testRoute;
		console.log("props in testModal ", this.props);
			return (
		<div>
			<p> I'm just a boring modal for now </p>
			<p> if you click <button onClick={()=>this.handleClick(route)}>me</button> you can test this route: </p>
			<p> {this.props.testRoute} </p>
		</div>
	)
}
}


