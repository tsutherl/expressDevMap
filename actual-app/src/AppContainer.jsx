import React from 'react';
import {connect} from 'react-redux';


import TreeContainer from './TreeContainer.jsx'
import ModalContainer from './ModalContainer.js'
import SearchContainer from './SearchContainer.jsx';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: 'response will load here'
        }
        this.clearResponse = this.clearResponse.bind(this)
        this.setResponse = this.setResponse.bind(this)
//
    }

    clearResponse() {
      this.setState({response: 'response will load here'})
    }
    setResponse(responseInfo) {
        this.setState({response: responseInfo})
    }
    render() {
        return(
            <div>
                {this.props.showModal ? <ModalContainer response={this.state.response} setResponse={this.setResponse}/> : null}
                <h1>expressDevMap</h1>
                <SearchContainer />
                {this.props.routes ? <TreeContainer clearResponse={this.clearResponse}/> : null }
            </div>
        )
    }

}

const mapStateToProps = ({routes, showModal}) => ({
    routes,
    showModal
})



export default connect(mapStateToProps)(App);
