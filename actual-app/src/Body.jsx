import React from 'react'
import Urlencoded from './Urlencoded.jsx'
import Json from './Json.jsx'

class Body extends React.Component {
    constructor(props) {
        super()
        this.state = {
            typeSelected: 'urlencoded', 
        }
        this.toggleType = this.toggleType.bind(this)
    }

    toggleType (evt) {
        this.setState({typeSelected: evt.target.value})
        // const idx = +evt.target.value;
        // this.setState({ idx });
    }

    
    render() {
        return(
            <div className='body'>
                <form className='radio-buttons'>
                <div className="radio">
                    <label>
                    <input type="radio" value="urlencoded" checked={this.state.typeSelected === 'urlencoded'} onChange={this.toggleType}/>
                    urlencoded
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" value="json" checked={this.state.typeSelected === 'json'} onChange={this.toggleType}/>
                    JSON
                    </label>
                </div>
                </form>
                {this.state.typeSelected === 'urlencoded'? <Urlencoded onChange={this.props.onChange}
                addInput={this.props.addInput} removeInput={this.props.removeInput} bodyKVPairs={this.props.bodyKVPairs} setUrlEn={this.props.setUrlEn}/> : <Json setJson={this.props.setJson} onChangeJson={this.props.onChangeJson}/>}
            </div>
        )
    }
}

export default Body

