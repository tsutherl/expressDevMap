import React, {Component} from 'react';
import {connect} from 'react-redux';

import Search from './Search.jsx';

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
    console.log('button clicked', this.state.inputState)
    //parse the route
    //find the node
    //simulate the click
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