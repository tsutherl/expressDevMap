import React from 'react'

const Headers = ({onChange}) => {
    return(
        <form className = "form-inline">
            <h3>Headers</h3>
            <div className='ro-row'>
                <span>Key</span><span>Value</span>
            </div>
            <div className='ro-row form-group'>
                <input name="headersKey"></input>
                <input name="headersValue"></input>
            {/*  button here to add another set (key-value pair) for headers
                would have to capture their data separately */}
            </div>
    </form>)
}

export default Headers

