'use strict';

import React from 'react';
import Closex from './xImage'
import Headers from './Headers.jsx'
import RequestBody from './RequestBody.jsx'


export default class Modal extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			reqBody : {},
			headers : {},
			fadingOut: false,
			currentOption: 'headers',
		}
		this.handleClick = this.handleClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.closeButton = this.closeButton.bind(this);
		this.toggleOptions = this.toggleOptions.bind(this)
	}

	handleClick(route, verb) {
		this.props.testThisRoute(route, verb);
	}
	closeButton () {
		this.setState({fadingOut: true})
		setTimeout(this.props.hideModal, 1000)
	}
	// to do: change handle click to incorporate reqBody / headers for put or post 
	// to do above, you will need to change the async action creator (in store ) to
	// pass headers to axios request 

	onChange(e) {
		switch(e.target.name){
			case "reqBodyKey":
				this.setState({reqBody: {[e.target.value] : null}});
				break;
			case "reqBodyValue":
				let key = document.getElementById("reqBodyKey").value;
				this.setState({reqBody: {[key] : e.target.value}});
				break;
		}
		console.log("in onChange, here is this.reqBody ", this.state.reqBody);
	}
	toggleOptions (e) {
		const update = this.state.currentOption === 'headers'?{currentOption: 'requestBody'} : {currentOption: 'headers'}
		this.setState(update)
	}

	render() {
		const route = this.props.testRoute;
		const method = this.props.selectedRouteVerb;
		return (
		<div className={this.state.fadingOut ? 'modal fadeOut': 'modal'}>
			<div className='info'>
				<div onClick={this.closeButton}>
					<Closex />
				</div>
				<div id='request-verb' >{method}</div>
				<div>{this.props.testRoute}</div>
				<div>Test</div>
				{method === 'put' || method === 'post' ? 
					<div>
						<div className='encoding-options' onClick={this.toggleOptions}>Headers</div>
						<div className='encoding-options' onClick={this.toggleOptions}>Body</div>
					</div> : 
				null}
					{this.state.currentOption === 'requestBody'? <RequestBody/> : <Headers onChange={this.onChange}/> }
					
			</div>
			<button onClick={()=>this.handleClick(route, method)}>Test Route</button>
		</div>
	)
}
}


