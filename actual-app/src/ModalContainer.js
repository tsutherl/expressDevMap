'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {testRoute} from './reducers/requestReducer';
import { hideModal } from './reducers/modalReducer';
import { routeTestAsync } from './reducers/selectedReducer';


import Modal from './Modal.jsx';

const mapStateToProps = ({ selected }) =>
	({ selected });

const mapDispatchToProps = (dispatch) => ({
	testThisRoute : (route, verb, testingInfo) => {
		dispatch(testRoute(route, verb, testingInfo));
	},
	hideModal : () => {
		dispatch(hideModal());
	}
})


export default connect (mapStateToProps, mapDispatchToProps)(Modal);