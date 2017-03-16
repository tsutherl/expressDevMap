import React from 'react'

const RequestBody = ({onChange}) => {
    return(
        <form className = "form-inline">
            <h3>Request Body</h3>
            <div className='ro-row'>
                <span>Key</span><span>Value</span>
            </div>
            <div className='ro-row form-group'>
                <input name="reqBodyKey" id="reqBodyKey" onChange={onChange}></input>
                <input name="reqBodyValue" onChange={onChange}></input>

            {/* add option to have text field where user can enter JSON instead
            of entering key-value pairs in form?  
            in that case, we need to use json.stringify(?) or json.parse to 
            grab user data and  put on local state */}

            </div>
    </form>)
}

export default RequestBody