import React from 'react'
import { connect } from 'react-redux'

import Tree from './Tree.jsx'
import { setTestRoute, showModal, setTestNode, setRouteVerb } from './store'





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
	}
})



export default connect(mapState, mapDispatch)(Tree);


