import React from 'react';
import Closex from './xImage';
import Headers from './Headers';
import Body from './Body';
import Response from './Response';

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
      changeMe: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.addInput = this.addInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeInputB = this.removeInputB.bind(this);
    this.addInputB = this.addInputB.bind(this);
    this.setUrlEn = this.setUrlEn.bind(this);
    this.setJson = this.setJson.bind(this);
    this.onChangeJson = this.onChangeJson.bind(this);
    this.toggleBodyType = this.toggleBodyType.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.selected.testRoute !== nextProps.selected.testRoute) {
      this.setState({
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
      });
      this.state.changeMe ? this.setState({ changeMe: false }) :
        this.setState({ changeMe: true });
    }
  }

  onChange (idx, e) {
    let requestFormInfo;
    switch (e.target.name) {
      case 'header-key':
        requestFormInfo = Object.assign({}, this.state.headerKeys, { [idx]: e.target.value });
        this.setState({ headerKeys: requestFormInfo });
        break;
      case 'header-value':
        requestFormInfo = Object.assign({}, this.state.headerVals, { [idx]: e.target.value });
        this.setState({ headerVals: requestFormInfo });
        break;
      case 'url-key':
        requestFormInfo = Object.assign({}, this.state.bodyKeys, { [idx]: e.target.value });
        this.setState({ bodyKeys: requestFormInfo });
        break;
      case 'url-value':
        requestFormInfo = Object.assign({}, this.state.bodyVals, { [idx]: e.target.value });
        this.setState({ bodyVals: requestFormInfo });
        break;
      default:
        break;
    }
  }

  onChangeJson (e) {
    this.setState({ bodyJson: e.target.value });
  }

  setUrlEn () {
    this.setState({ JORU: 'U' });
  }
  setJson () {
    this.setState({ JORU: 'J' });
  }

  addInputB (val) {
    const { bodyKVPairs } = this.state;
    if (bodyKVPairs.indexOf(val) === bodyKVPairs.length - 1) {
      const newState = bodyKVPairs.concat(Math.max(Math.max(...bodyKVPairs), 0) + 1);
      this.setState({ bodyKVPairs: newState });
    }
  }

  removeInputB (val) {
    const bkvpairslen = this.state.bodyKVPairs.length;
    const newState = this.state.bodyKVPairs;
    const idxVal = newState.indexOf(val);
    if (idxVal > -1) {
      newState.splice(idxVal, 1);
      this.setState({ bodyKVPairs: newState });
    }
    if (bkvpairslen === 1) {
      this.addInputB(0);
    }
  }

  closeButton () {
    this.setState({ fadingOut: true });
    setTimeout(this.props.hideModal, 1000);
  }

  toggleOptions (evt) {
    const idx = +evt.target.value;
    this.setState({ idx });
  }

  handleClick (route, verb) {
    const headerKeys = this.state.headerKeys;
    const headerVals = this.state.headerVals;
    const bodyKeys = this.state.bodyKeys;
    const bodyVals = this.state.bodyVals;
    const testingInfo = {};
    const headers = {};

    this.state.keyValuePairs.forEach((val, idx)=>{
      if (idx !== this.state.keyValuePairs.length - 1) {
        headers[headerKeys[val]] = headerVals[val];
      }
    });
    testingInfo.headers = headers;

    let body = {};
    if (this.state.bodyTypeSelected === 'urlencoded') {
      this.state.bodyKVPairs.forEach((val, idx)=>{
        if (idx !== this.state.bodyKVPairs.length - 1) {
          body[bodyKeys[val]] = bodyVals[val];
        }
      });
    } else if (this.state.bodyTypeSelected === 'json') {
      body = JSON.parse(this.state.bodyJson);
    }
    testingInfo.body = body;
    testingInfo.route = route;
    testingInfo.verb = verb;

    this.props.testThisRoute(route, verb, testingInfo);
    // const stringified = JSON.stringify(testingInfo)
    // this.updateLocalStorage(stringified);
  }

  toggleBodyType (evt) {
    this.setState({ bodyTypeSelected: evt.target.value });
    // const idx = +evt.target.value;
    // this.setState({ idx });
  }


  addInput (val) {
    const { keyValuePairs } = this.state;
    if (keyValuePairs.indexOf(val) === keyValuePairs.length - 1) {
      // the double Math.max operation is needed because keyValuePairs is empty,
      // the inner Math.max returns -Infinity which breaks things
      const newState = keyValuePairs.concat(Math.max(Math.max(...keyValuePairs), 0) + 1);
      this.setState({ keyValuePairs: newState });
    }
  }
  removeInput (val) {
    const KVPairsLength = this.state.keyValuePairs.length;
    const newState = this.state.keyValuePairs;
    const idxVal = newState.indexOf(val);
    if (idxVal > -1) {
      newState.splice(idxVal, 1);
      this.setState({ keyValuePairs: newState });
    }
    if (KVPairsLength === 1) {
      this.addInput(0);
    }
  }

  render () {
    const option = this.state.options[this.state.idx];
    const route = this.props.selected.testRoute;
    const method = this.props.selected.selectedRouteVerb;
    // const LS = this.getLocalStorage();
    return (
      <div className={this.state.fadingOut ? 'modal fadeOut' : 'modal'}>
        <div className="info">
          <div className="nav">
            <button
              className="nav-children"
              onClick={()=>this.handleClick(route, method)}
            >Test</button>
            <button className="nav-children dropdown">History</button>
            <div className="dropdown-content" />
            <Closex onClick={this.closeButton} />
          </div>
          <div className="testing">
            <h2 id="request-verb" >{method}</h2>
            <h2>{route}</h2>
          </div>
          <div className="headers-body">
            <button className={`headers ${option === 'headers' ? 'selected' : ''}`} value={0} onClick={this.toggleOptions}>Headers</button>
            <button className={`headers ${option === 'body' ? 'selected' : ''}`} disabled={method === 'post' || method === 'put' ? '' : 'disabled'} value={1} onClick={this.toggleOptions}>Body</button>
          </div>
          {option === 'headers' ? <Headers
            verb={method}
            onChange={this.onChange}
            addInput={this.addInput}
            removeInput={this.removeInput}
            keyValuePairs={this.state.keyValuePairs}
          /> :
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
            bodyJson={this.state.bodyJson}
          /> }
        </div>
        <div>
          <Response response={this.props.response} />
        </div>
      </div>
    );
  }
}

// this.getLocalStorage.map(req => {
// console.log(req)

// getLocalStorage() {
//   const pastRequests = [];
//   let i = 0
//   while (++i <= 10) {
//     console.log('our key', `recent${i}`)
//     const parsed = JSON.parse(localStorage.getItem(`recent${i}`))
//     pastRequests.push(parsed)
//   }
//   return pastRequests
// }

// updateLocalStorage (testInfo) {
//   for (let i = 10; i > 1; i--) {
//     let shift = localStorage.getItem(`recent${i-1}`) || "empty";
//     localStorage.setItem(`recent${i}`, shift);
//   }
//   localStorage.setItem("recent1", testInfo);
// }
/*
{ LS.map(req=>(
  <div>
    <p>{req.route}</p>
    <p>{req.verb}</p>
  </div>
))}*/
