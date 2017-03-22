import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as d3 from "d3"

import Search from './Search.jsx';

//trying to get D3 tree
import {nodes} from './Tree.jsx'


//helper functions

//gets terminal nodes from the routes object
const treeToRoutes = (array, prefix, node) => {
  const currString = `${prefix}${node.name}`
  if (node.verb) {
    array.push(`${node.verb.toUpperCase()}: ${currString}`);
  }
  if (node.children){
    node.children.forEach(child => {
      treeToRoutes(array, currString , child)
    })
  }
}

//handles the tricky bit of simulating clicks on a d3 element
function simulateClick(circle) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    circle.dispatchEvent(event);
}

class SearchContainer extends Component {
  constructor () {
    super();
    this.state = {
      routeList: [],
      inputState: '',
    }
    this.onOptionSelect = this.onOptionSelect.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    let list = []
    nextProps.routes && nextProps.routes.children.forEach(child => {
      treeToRoutes(list, '', child);
    })
    this.setState({routeList: list})
  }

  onOptionSelect (e) {
    this.setState({inputState: e})
  }

  onButtonClick () {
    //parse the route
    const colonPlace = this.state.inputState.indexOf(':');
    const pathOnly = this.state.inputState.slice(colonPlace+2);
    const verbOnly = this.state.inputState.slice(0, colonPlace).toLowerCase();
    const pathParts = pathOnly.split('/').slice(1)
    //try finding node from tree top
    let currNode = nodes
    while (pathParts.length > 0) {
      const currChildren = currNode.children;
      currNode = currChildren.filter(child => {return child.data.name === `/${pathParts[0]}`})
      if(currNode.length > 1) {
        //console.log('in if', currNode, verbOnly)
        currNode = currNode.filter(node => {return node.data.verb === verbOnly})
      }
      currNode = currNode[0]
      pathParts.shift();
    }
    //simulate the click
    console.log(currNode);
    const leaves = document.querySelectorAll('#tree g.node--leaf');
    console.log(leaves)
    const rightNode = Array.prototype.filter.call(leaves, leaf => {return leaf.__data__.x === currNode.x && leaf.__data__.y === currNode.y})[0];
    console.log(rightNode.firstChild)
    simulateClick(rightNode.firstChild);
  }

  render () {
    return (
      <Search 
        routeList={this.state.routeList} 
        optionSelect={this.onOptionSelect} 
        buttonClick={this.onButtonClick}
      />
    )
  }
}

const mapStateToProps = ({routes}) => ({
  routes
})

export default connect(mapStateToProps)(SearchContainer);