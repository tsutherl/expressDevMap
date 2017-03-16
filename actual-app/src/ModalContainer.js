'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {fakeRouteTest, hideModal} from './store';

import Modal from './Modal.jsx';

const mapStateToProps = ({testRoute, activeTestNode, selectedRouteVerb }) =>
	({ testRoute, activeTestNode, selectedRouteVerb});

const mapDispatchToProps = (dispatch) => ({
	testThisRoute : (route, verb) => {
		dispatch(fakeRouteTest(route, verb));
	},
	hideModal : () => {
		console.log('in the function')
		dispatch(hideModal());
	}
})


export default connect (mapStateToProps, mapDispatchToProps)(Modal);