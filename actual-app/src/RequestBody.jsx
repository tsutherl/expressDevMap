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

            <textarea></textarea>

            </div>
    </form>)
}

export default RequestBody