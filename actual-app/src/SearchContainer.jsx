import React, {Component} from 'react';
import {connect} from 'react-redux';

import Search from './Search'

class SearchContainer extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render () {
    <Search />
  }
}

export default connect()(SearchContainer);