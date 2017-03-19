import React from 'react'

class Headers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numKeyValue: []
        }
        this.addNewInput = this.addNewInput.bind(this)
    }

    addNewInput () {
        console.log('this', this.state)
        const updated = this.state.numKeyValue.concat(
            <div className='ro-row form-group'>
                <input name="headersKey" onClick={this.addNewInput} value='key'></input>
                <input name="headersValue" onClick={this.addNewInput} value='value'></input>
            {/*  button here to add another set (key-value pair) for headers
                would have to capture their data separately */}
            </div>
        )
        this.setState({numKeyValue: updated})
    }
    render() {
        return(
            <form className = "form-inline">
                <div className='ro-row form-group'>
                    <input className="headersKey" onClick={this.addNewInput} value='key'></input>
                    <input className="headersValue" onClick={this.addNewInput} value='value'></input>
                {/*  button here to add another set (key-value pair) for headers
                    would have to capture their data separately */}
                </div>
                {
                    this.state.numKeyValue.map(input => input)
                }
            </form>
        )
    }
}

export default Headers

