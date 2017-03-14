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
			<div className='info'>
				<h2>Info</h2>
				<p><b>Path: </b>{this.props.testRoute}</p>
				<p><b>Method: </b>{this.props.testRoute}</p>
			</div>
			<button onClick={()=>this.handleClick(route)}>Test Route</button>
		</div>
	)
}
}


