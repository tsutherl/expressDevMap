'use strict';

import React from 'react';
import Closex from './xImage'
import Headers from './Headers.jsx'
import Body from './Body.jsx'
import RequestBody from './RequestBody.jsx'
import Response from './Response.jsx'


export default class Modal extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			
			keyValuePairs: [], 
			lastAddedVal: null,  
			headerKeys: {},
			headerVals: {},
			bodyKVPairs: [],
			bodyKeys: {},
			bodyVals: {},
			bodyJson: {},
			JORU: null,
			fadingOut: false,
			currentOption: 'headers',
			options: ['headers', 'body'],
			idx: 0,
			bodyTypeSelected: 'urlencoded',
			changeMe: false
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
		this.toggleBodyType = this.toggleBodyType.bind(this)
	}

	removeInput(val) {
		const KVPairsLength = this.state.keyValuePairs.length;
        const newState = this.state.keyValuePairs;
        const idxVal = newState.indexOf(val);
        if (idxVal > -1 ) {
            newState.splice(idxVal, 1);
            this.setState({keyValuePairs: newState})
        }
        if (KVPairsLength === 1){
        	this.addInput(0);
        }
    }


    addInput (val) {
        const {keyValuePairs} = this.state;
        if (keyValuePairs.indexOf(val) === keyValuePairs.length-1) {
        	// the double Math.max operation is needed because keyValuePairs is empty,
        	// the inner Math.max returns -Infinity which breaks things
            let newState = keyValuePairs.concat( Math.max(Math.max(...keyValuePairs), 0) + 1);
            this.setState({keyValuePairs: newState});
        }
    }

    removeInputB(val) {
    	const bkvpairslen = this.state.bodyKVPairs.length;
        const newState = this.state.bodyKVPairs;
        let idxVal = newState.indexOf(val);
        if (idxVal > -1 ) {
            newState.splice(idxVal, 1);
            this.setState({bodyKVPairs: newState})
        }
        if (bkvpairslen === 1){
        	this.addInputB(0);
        }
    }

    addInputB (val) {
        const {bodyKVPairs} = this.state
         if (bodyKVPairs.indexOf(val) === bodyKVPairs.length-1) {
            let newState = bodyKVPairs.concat( Math.max(Math.max(...bodyKVPairs), 0) + 1);
            this.setState({bodyKVPairs: newState});
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
		const testingInfo = {};
		
		let headers = {};

		this.state.keyValuePairs.forEach((val,idx) => {
			if (idx !== this.state.keyValuePairs.length-1){
				headers[headerKeys[val]] = headerVals[val];
			}
		});

		testingInfo.headers = headers;

		let body = {};

		if (this.state.bodyTypeSelected === 'urlencoded') {
			this.state.bodyKVPairs.forEach((val,idx) => {
				if (idx !== this.state.bodyKVPairs.length-1) {
					body[bodyKeys[val]] = bodyVals[val];
				}
			});
		}
		else if (this.state.bodyTypeSelected === 'json'){ 
			body = JSON.parse(this.state.bodyJson);
		}
		testingInfo.body = body;
		
		this.props.testThisRoute(route, verb, testingInfo);
	}

	toggleBodyType (evt) {
					this.setState({bodyTypeSelected: evt.target.value})
					// const idx = +evt.target.value;
					// this.setState({ idx });
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.selected.testRoute !== nextProps.selected.testRoute) {
			this.setState ({	
				keyValuePairs: [0], 
				lastAddedVal: null,  
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
				idx: 0,
				bodyTypeSelected: 'urlencoded',
			});
			this.state.changeMe ? this.setState({changeMe: false}) : 
				this.setState({changeMe: true});

		}
	}



	render() {
		const option = this.state.options[this.state.idx]
		const route = this.props.selected.testRoute;
		const method = this.props.selected.selectedRouteVerb;

		console.log("in modal render, header keys ", this.state.headerKeys);
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
						<button className={`headers ${option === 'body'? 'selected' : ''}`}  disabled={method === 'post' || method === 'put'? '' : 'disabled'} value={1} onClick={this.toggleOptions}>Body</button>
					</div>
					{option === 'headers' ? <Headers 
					verb={method} 
					onChange={this.onChange} 
					addInput={this.addInput} 
					removeInput={this.removeInput} 
					keyValuePairs={this.state.keyValuePairs} /> : 
					<Body 
					bodyTypeSelected={this.state.bodyTypeSelected} 
					toggleBodyType={this.toggleBodyType} 
					onChange={this.onChange} 
					addInput={this.addInputB} 
					removeInput={this.removeInputB} 
					bodyKVPairs={this.state.bodyKVPairs} 
					setUrlEn={this.setUrlEn} 
					setJson={this.setJson} 
					onChangeJson={this.onChangeJson}
					bodyJson={this.state.bodyJson}/> }
						
				</div>
				<div>
					<Response response={this.props.response}/>
				</div>
			</div>
		)
	}
}



// ${method === 'post' || method === 'put'? '' : disabled}


