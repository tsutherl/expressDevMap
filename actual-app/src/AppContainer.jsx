import React from 'react';
import TreeContainer from './TreeContainer.jsx'
import {connect} from 'react-redux';




export const App = (props) => {
    console.log("PROPS IN APP ", props);
    return(
        <div>
            {props.routes ? <TreeContainer/> : null }
        </div>    
    )
} 

const mapStateToProps = ({routes}) => ({
    routes
})



export default connect(mapStateToProps)(App);