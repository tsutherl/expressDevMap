import React from 'react';
import {connect} from 'react-redux';


import TreeContainer from './TreeContainer.jsx'
import ModalContainer from './ModalContainer.js'
import SearchContainer from './SearchContainer.jsx';



class App extends React.Component {
    render() {
        return(
            <div>
                {this.props.showModal ? <ModalContainer /> : null}
                <h1>expressDevMap</h1>
                <SearchContainer />
                {this.props.routes ? <TreeContainer /> : null }
            </div>
        )
    }

}

const mapStateToProps = ({routes, showModal}) => ({
    routes,
    showModal
})



export default connect(mapStateToProps)(App);
