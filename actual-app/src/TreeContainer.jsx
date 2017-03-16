import React from 'react'
import { connect } from 'react-redux'
import Tree from './Tree.jsx'





const mapState = ({ routes, testRoute, showModal, activeTestNode, selectedRouteVerb }) => 
	({ routes, testRoute, showModal, activeTestNode, selectedRouteVerb });



export default connect(mapState)(Tree);


