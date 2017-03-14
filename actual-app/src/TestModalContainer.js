'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {fakeRouteTest} from './store';

import TestModal from './TestModal';

const mapStateToProps = ({testRoute, activeTestNode }) =>
	({ testRoute, activeTestNode});

const mapDispatchToProps = (dispatch) => ({
	testThisRoute : (route) => {
		dispatch(fakeRouteTest(route));
	}
})


export default connect (mapStateToProps, mapDispatchToProps)(TestModal);