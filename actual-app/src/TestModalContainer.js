'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {fakeRouteTest} from './store';

import TestModal from './TestModal';

const mapStateToProps = ({testRoute, activeTestNode, selectedRouteVerb }) =>
	({ testRoute, activeTestNode, selectedRouteVerb});

const mapDispatchToProps = (dispatch) => ({
	testThisRoute : (route, verb) => {
		dispatch(fakeRouteTest(route, verb));
	}
})


export default connect (mapStateToProps, mapDispatchToProps)(TestModal);