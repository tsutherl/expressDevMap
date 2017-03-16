import React from 'react'

class Headers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numKeyValue: [
            <div className='ro-row form-group'>
                <input name="headersKey" onclick={addNewInput} value='key'></input>
                <input name="headersValue" onclick={addNewInput} value='value'></input>
            {/*  button here to add another set (key-value pair) for headers
                would have to capture their data separately */}
            </div>

            ]
        }
    }
    render() {
        return(
            <form className = "form-inline">
                {
                    this.state.numKeyValue.map(input => input)
                }
            </form>
        )
    }
}

export default Headers

