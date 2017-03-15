'use strict';

import React from 'react';


export default class TestModal extends React.Component {
	constructor (props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(route, verb) {
		this.props.testThisRoute(route, verb);
	}

	render() {
		const route = this.props.testRoute;
		const method = this.props.selectedRouteVerb;
		console.log("props in testModal ", this.props);
			return (
		<div className='modal'>
			<div className='info'>
				<h2>Info</h2>
				<p><b>Path: </b>{this.props.testRoute}</p>
				<p><b>Method: </b>{method}</p>
				{method === 'put' || method === 'POST' ? 
					<div>
						<h3>Request Body</h3>
						<div className='ro-row'>
							<span>Key</span><span>Value</span>
						</div>
						<div className='ro-row'>
							<input></input><input></input>
						</div>
					</div> : null }
			</div>
			<button onClick={()=>this.handleClick(route)}>Test Route</button>
		</div>
	)
}
}


