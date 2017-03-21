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
			testingInfo: {
				headers: {},
				body: {}
			},
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

	handleClick(route, verb, testingInfo) {
		this.props.testThisRoute(route, verb, testingInfo);
	}
	closeButton () {
		this.setState({fadingOut: true})
		setTimeout(this.props.hideModal, 1000)
	}

	toggleOptions(evt) {
		const idx = +evt.target.value;
		this.setState({ idx });
	} 

	onChange(e) {
		switch(e.target.name){
			case "key":
				this.setState({testingInfo: {headers: {[e.target.value]: null}, body: {}}});
				break;
			case "value":
				let key = document.getElementById("reqBodyKey").value;
				this.setState({testingInfo: {headers: {[key]: e.target.value}, body: {}}});
				break;
		}
	}

	render() {
		const option = this.state.options[this.state.idx]
		const route = this.props.selected.testRoute;
		const method = this.props.selected.selectedRouteVerb;
		const {testingInfo} = this.state
		return (
			<div className={this.state.fadingOut ? 'modal fadeOut': 'modal'}>
				<div className='info'>
					<div className='nav'>
						<button className='nav-children' onClick={()=>this.handleClick(route, method, testingInfo)}>Test</button>
						<Closex onClick={this.closeButton}/>
					</div>
					<div className='testing'>
						<h2 id='request-verb' >{method}</h2>
						<h2>{route}</h2>
					</div>
					<div className='headers-body'>
						<button className={`headers ${option === 'headers'? 'selected' : ''}`}  value={0} onClick={this.toggleOptions}>Headers</button>
						<button className={`headers ${option === 'body'? 'selected' : ''}`}value={1} onClick={this.toggleOptions}>Body</button>
					</div>
					{option === 'headers' ? <Headers onChange={this.onChange}/> : <Body/> }
						
				</div>
			</div>
		)
	}
}


