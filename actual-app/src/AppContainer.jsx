import React from 'react';
import { connect } from 'react-redux';

import TreeContainer from './TreeContainer';
import ModalContainer from './ModalContainer';
import SearchContainer from './SearchContainer';

const App = props=>(
  <div>
    {props.showModal ? <ModalContainer /> : null}
    <h1>expressDevMap</h1>
    <SearchContainer />
    {props.routes ? <TreeContainer /> : null }
  </div>
);

const mapStateToProps = ({ routes, showModal })=>({
  routes,
  showModal,
});

export default connect(mapStateToProps)(App);
