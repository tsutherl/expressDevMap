import React from 'react';
import {connect} from 'react-redux';
import ElementPan from 'react-element-pan';

import TreeContainer from './TreeContainer.jsx'
import ModalContainer from './ModalContainer.js'

// React.initializeTouchEvents(true);



export const App = (props) => {
    console.log('APP CHILDREN', props.children)
    return(
        <div>
            {props.showModal ? <ModalContainer/> : null}
            {props.routes ? 
           
                <TreeContainer/> 
            : null 
            }
        </div>    
    )
} 

const mapStateToProps = ({routes, showModal}) => ({
    routes,
    showModal
})



export default connect(mapStateToProps)(App);