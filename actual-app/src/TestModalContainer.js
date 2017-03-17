'use strict';

import React from 'react';
import {connect} from 'react-redux';

import { hideModal } from './reducers/modalReducer';
import { routeTestAsync } from './reducers/selectedReducer';

import TestModal from './TestModal';

const mapStateToProps = ({testRoute, activeTestNode, selectedRouteVerb }) =>
	({ testRoute, activeTestNode, selectedRouteVerb});

const mapDispatchToProps = (dispatch) => ({
	testThisRoute : (route, verb) => {
		dispatch(routeTestAsync(route, verb));
	},
	hideModal : () => {
		console.log('in the function')
		dispatch(hideModal());
	}
})


export default connect (mapStateToProps, mapDispatchToProps)(TestModal);