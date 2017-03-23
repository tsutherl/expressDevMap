import React from 'react'

class Headers extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form className = "form">
                {
                    this.props.keyValuePairs.map((num) => {
                        console.log("in keyValuePairs map, num -- which should be value -- is ", num);
                        return(
                            <div key={num} className='form-input'>
                                <input name='header-key' className="headersKey" onChange={(e)=>this.props.onChange(num, e)} onClick={(e)=>{
                                    console.log("in onClick, here is num (should be idx) ", num);
                                    this.props.addInput(num, e)}}
                                     onFocus={()=>{
                                    console.log("in onFocus, here is num (should be idx) ", num);
                                    this.props.addInput(num)}} placeholder='key'></input>
                                <input id='header-value' name='header-value' className="headersValue" onChange={(e)=>this.props.onChange(num, e)} onClick={(e)=>this.props.addInput(num, e)} placeholder='value'></input>
                                <button onClick={(e)=>this.props.removeInput(num, e)} >x</button> 
                             
                            </div>
                        )
                    })
                }
            </form>
        )
    }
}

export default Headers

//if clicked and it is the last thing in the array 
//  add another key and value with a key value set to its index in the array
//else do nothing

