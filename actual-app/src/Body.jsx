import React from 'react'
import Urlencoded from './Urlencoded.jsx'
import Json from './Json.jsx'

class Body extends React.Component {
    constructor(props) {
        super()        
    }
    componentDidMount(){
        if (this.props.bodyKVPairs.length === 0) this.props.addInput(0);
    }
    
    render() {
        return(
            <div className='body'>
                <form className='radio-buttons'>
                <div className="radio">
                    <label>
                    <input type="radio" value="urlencoded" checked={this.props.bodyTypeSelected === 'urlencoded'} onChange={this.props.toggleBodyType}/>
                    urlencoded
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" value="json" checked={this.props.bodyTypeSelected === 'json'} onChange={this.props.toggleBodyType}/>
                    JSON
                    </label>
                </div>
                </form>
                {this.props.bodyTypeSelected === 'urlencoded'? <Urlencoded onChange={this.props.onChange}
                addInput={this.props.addInput} removeInput={this.props.removeInput} bodyKVPairs={this.props.bodyKVPairs} setUrlEn={this.props.setUrlEn}/> : <Json 
                setJson={this.props.setJson} 
                onChangeJson={this.props.onChangeJson}
                bodyJson={this.props.bodyJson}/>}
            </div>
        )
    }
}

export default Body

