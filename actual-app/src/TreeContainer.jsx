import React from 'react'
import { connect } from 'react-redux'

import Tree from './Tree.jsx'

import { setTestRoute, setTestNode, setRouteVerb } from './reducers/selectedReducer';
import { showModal, hideModal } from './reducers/modalReducer';





const mapState = ({ routes, testRoute, showModal, activeTestNode, selectedRouteVerb }) => 
	({ routes, testRoute, showModal, activeTestNode, selectedRouteVerb });

const mapDispatch = (dispatch) => ({
	setRouteVerb: (verb) => {
		dispatch(setRouteVerb(verb))
	},
	setTestRoute: (testRoute) => {
		dispatch(setTestRoute(testRoute))
	},
	setTestNode: (node) => {
		dispatch(setTestNode(node));
	},
	showModalNow: () => {
		dispatch(showModal())
	},
	hideModal: () => {
		dispatch(hideModal())
	}
})



export default connect(mapState, mapDispatch)(Tree);


