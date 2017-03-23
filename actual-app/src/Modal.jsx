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
			
			keyValuePairs: [0],   
			headerKeys: {},
			headerVals: {},
			bodyKVPairs: [0],
			bodyKeys: {},
			bodyVals: {},
			bodyJson: {},
			JORU: null,
			fadingOut: false,
			currentOption: 'headers',
			options: ['headers', 'body'],
			idx: 0
		}
		this.handleClick = this.handleClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.closeButton = this.closeButton.bind(this);
		this.toggleOptions = this.toggleOptions.bind(this)
		this.removeInput = this.removeInput.bind(this)
		this.addInput = this.addInput.bind(this)
		this.onChange = this.onChange.bind(this)
		this.removeInputB = this.removeInputB.bind(this);
		this.addInputB = this.addInputB.bind(this);
		this.setUrlEn = this.setUrlEn.bind(this);
		this.setJson = this.setJson.bind(this);
		this.onChangeJson = this.onChangeJson.bind(this);
	}

	removeInput(idx) {
        const newState = this.state.keyValuePairs;
        if (newState.indexOf(idx) > -1 && idx > 0) {
            newState.splice(idx, 1);
            this.setState({keyValuePairs: newState})
        }
    }

    addInput (idx) {
        const {keyValuePairs} = this.state
        if (idx === keyValuePairs.length - 1) {
            let newState = keyValuePairs.concat(keyValuePairs.length)
            this.setState({keyValuePairs: newState})
        }
    }

    removeInputB(idx) {
        const newState = this.state.bodyKVPairs;
        if (newState.indexOf(idx) > -1 && idx > 0) {
            newState.splice(idx, 1);
            this.setState({bodyKVPairs: newState})
        }
    }

    addInputB (idx) {
        const {bodyKVPairs} = this.state
        if (idx === bodyKVPairs.length - 1) {
            let newState = bodyKVPairs.concat(bodyKVPairs.length)
            this.setState({bodyKVPairs: newState})
        }
    }

    setUrlEn () {
    	this.setState({JORU: 'U'});
    }

    setJson () {
    	this.setState({JORU: 'J'});
    }

    onChange(idx, e) {

        switch(e.target.name){
            case "header-key":
                let newHeaderKeys = Object.assign({}, this.state.headerKeys, {[idx]: e.target.value});
                this.setState({headerKeys: newHeaderKeys});
                break;
            case "header-value":
                let newHeaderVals = Object.assign({}, this.state.headerVals, {[idx]: e.target.value});
                this.setState({headerVals: newHeaderVals});
                break;
            case "url-key":
				let newBodyKeys = Object.assign({}, this.state.bodyKeys, {[idx]: e.target.value});
				this.setState({bodyKeys: newBodyKeys});            
            	break;
            case "url-value":
            	let newBodyVals = Object.assign({}, this.state.bodyVals, {[idx]: e.target.value});
            	this.setState({bodyVals: newBodyVals});
            	break;
    	}

	}

	onChangeJson(e) {
		this.setState({bodyJson: e.target.value});
	}

	closeButton () {
		this.setState({fadingOut: true})
		setTimeout(this.props.hideModal, 1000)
	}

	toggleOptions(evt) {
		const idx = +evt.target.value;
		this.setState({ idx });
	} 

	handleClick (route, verb) {
		const headerKeys = this.state.headerKeys;
		const headerVals = this.state.headerVals;
		const bodyKeys = this.state.bodyKeys;
		const bodyVals = this.state.bodyVals;
		const testingInfo = {}
		console.log("keyValuePairs ", this.state.keyValuePairs, "bodyKVPairs", this.state.bodyKVPairs);
		
		let headers = {};

		this.state.keyValuePairs.forEach((val,idx) => {
			if (idx !== this.state.keyValuePairs.length-1){
				headers[headerKeys[val]] = headerVals[val];
			}
		});

		testingInfo.headers = headers;

		let body = {};

		if (this.state.JORU === 'U') {
			this.state.bodyKVPairs.forEach((val,idx) => {
				if (idx !== this.state.bodyKVPairs.length-1) {
					body[bodyKeys[val]] = bodyVals[val];
				}
			});
		}
		else if (this.state.JORU === 'J'){ 
			body = JSON.stringify(this.state.bodyJson);
		}
		testingInfo.body = body;
		
		this.props.testThisRoute(route, verb, testingInfo);
	}


	render() {
		const option = this.state.options[this.state.idx]
		const route = this.props.selected.testRoute;
		const method = this.props.selected.selectedRouteVerb;
		
		return (
			<div className={this.state.fadingOut ? 'modal fadeOut': 'modal'}>
				<div className='info'>
					<div className='nav'>
						<button className='nav-children' onClick={()=>this.handleClick(route, method)}>Test</button>
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
					{option === 'headers' ? <Headers verb={method} onChange={this.onChange} addInput={this.addInput} removeInput={this.removeInput} keyValuePairs={this.state.keyValuePairs} /> : <Body onChange={this.onChange} addInput={this.addInputB} removeInput={this.removeInputB} bodyKVPairs={this.state.bodyKVPairs} setUrlEn={this.setUrlEn} setJson={this.setJson} onChangeJson={this.onChangeJson}/> }
						
				</div>
			</div>
		)
	}
}


