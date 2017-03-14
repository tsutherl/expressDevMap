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
		<div className='modal'>
			<p> I'm just a boring modal for now </p>
			<button onClick={()=>this.handleClick(route)}>Test Route</button>
			<p> {this.props.testRoute} </p>
		</div>
	)
}
}


