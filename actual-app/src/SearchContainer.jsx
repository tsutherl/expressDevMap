import React, {Component} from 'react';
import {connect} from 'react-redux';

import Search from './Search.jsx';

const treeToRoutes = (array, prefix, node) => {
  const currString = `${prefix}${node.name}`
  array.push(`${node.verb ? node.verb.toUpperCase() : 'ROUTER'}: ${currString}`);
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
    }
  }

  componentWillReceiveProps (nextProps) {
    let list = []
    nextProps.routes && nextProps.routes.children.forEach(child => {
      treeToRoutes(list, '', child);
    })
    this.setState({routeList: list})
  }

  render () {
    console.log('in search container', this.props.routes);
    return (
      <Search routeList={this.state.routeList}/>
    )
  }
}

const mapStateToProps = ({routes}) => ({
  routes
})

export default connect(mapStateToProps)(SearchContainer);