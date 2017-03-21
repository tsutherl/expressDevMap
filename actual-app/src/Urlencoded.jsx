import React from 'react'

class Urlencoded extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyValuePairs: [0]
        }
        this.addInput = this.addInput.bind(this)
        this.removeInput = this.removeInput.bind(this)
    }

    removeInput(idx) {
        const newState = this.state.keyValuePairs;
        if (newState.indexOf(idx) > -1 && idx > 0) {
            newState.splice(idx, 1);
            this.setState({keyValuePairs: newState})
        }
    }

    addInput (idx) {
        const {keyValuePairs} = this.state
        if (idx === keyValuePairs.length - 1) {
            let newState = keyValuePairs.concat(keyValuePairs.length)
            this.setState({keyValuePairs: newState})
        }
    }
    render() {
        return(
            <form className = "form">
                {
                    this.state.keyValuePairs.map((num) => {
                        return(
                            <div key={num} className='form-input'>
                                <input name='url-key' className="headersKey" onChange={this.props.onChange} onClick={this.addInput.bind(this, num)} placeholder='key'></input>
                                <input name='url-value' className="headersValue" onChange={this.props.onChange} onClick={this.addInput.bind(this, num)} placeholder='value'></input>
                                <button onClick={this.removeInput.bind(this, num)} >x</button> 
                            </div>
                        )
                    })
                }
            </form>
        )
    }
}

export default Urlencoded

//if clicked and it is the last thing in the array 
//  add another key and value with a key value set to its index in the array
//else do nothing
