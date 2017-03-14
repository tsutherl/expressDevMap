import React from 'react'
import { connect } from 'react-redux'
import Tree from './Tree.jsx'





const mapState = ({ routes, testRoute, showModal, activeTestNode }) => 
	({ routes, testRoute, showModal, activeTestNode });



export default connect(mapState)(Tree);


