import React from 'react'
import { connect } from 'react-redux'
import Tree from './Tree.jsx'





const mapState = ({ routes }) => ({ routes });



export default connect(mapState)(Tree);


