import React from 'react';
import {connect} from 'react-redux';

import TreeContainer from './TreeContainer.jsx'
import TestModalContainer from './TestModalContainer'




export const App = (props) => {
    return(
        <div>
            {props.showModal ? <TestModalContainer/> : null}
            {props.routes ? <TreeContainer/> : null }
        </div>    
    )
} 

const mapStateToProps = ({routes, showModal}) => ({
    routes,
    showModal
})



export default connect(mapStateToProps)(App);