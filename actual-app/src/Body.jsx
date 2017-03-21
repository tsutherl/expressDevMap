import React from 'react'
import Headers from './Headers.jsx'
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
                {this.state.typeSelected === 'urlencoded'? <Headers/> : <Json/>}
            </div>
        )
    }
}

export default Body

