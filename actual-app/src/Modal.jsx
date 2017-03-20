'use strict';

import React from 'react';
import Closex from './xImage'
import Headers from './Headers.jsx'
import Body from './Body.jsx'
import RequestBody from './RequestBody.jsx'


export default class Modal extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			reqBody : {},
			headers : {},
			fadingOut: false,
			currentOption: 'headers',
			options: ['headers', 'body'],
			idx: 0
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
		console.log('trying to close')
		this.setState({fadingOut: true})
		setTimeout(this.props.hideModal, 1000)
	}
	// to do: change handle click to incorporate reqBody / headers for put or post 
	// to do above, you will need to change the async action creator (in store ) to
	// pass headers to axios request

	toggleOptions(evt) {
		const idx = +evt.target.value;
		this.setState({ idx });
	} 

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
	

	render() {
		const option = this.state.options[this.state.idx]
		const route = this.props.testRoute;
		const method = this.props.selectedRouteVerb;
		return (
			<div className={this.state.fadingOut ? 'modal fadeOut': 'modal'}>
				<div className='info'>
					<div className='nav'>
						<button className='nav-children' onClick={()=>this.handleClick(route, method)}>Test</button>
						<Closex onClick={this.closeButton}/>
					</div>
					<div className='testing'>
						<h2 id='request-verb' >{method}</h2>
						<h2>{this.props.testRoute}thisIsAllTheOverflowText</h2>
					</div>
					<div className='headers-body'>
						<button className={`headers ${option === 'headers'? 'selected' : ''}`}  value={0} onClick={this.toggleOptions}>Headers</button>
						<button className={`headers ${option === 'body'? 'selected' : ''}`}value={1} onClick={this.toggleOptions}>Body</button>
					</div>
					{option === 'headers' ? <Headers/> : <Body/> }
					

						{/*{method === 'put' || method === 'post' ? 
							<div>
								<div className='encoding-options' onClick={this.toggleOptions}>Headers</div>
								<div className='encoding-options' onClick={this.toggleOptions}>Body</div>
							</div> : 
						null}
							{this.state.currentOption === 'requestBody'? <RequestBody/> : <Headers onChange={this.onChange}/> }*/}
						
				</div>
			</div>
		)
	}
}


