import React from 'react'

class Headers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.localStateChangeIndicator !== nextProps.localStateChangeIndicator) {
            console.log("should clear the form!!!  ");
            this.refs.headerKey.value = "";
            this.refs.headerValue.value ="";
        }
    }

    render() {
        console.log("in headers render, props", this.props);

        return(
            <form className = "form">
                {
                    this.props.keyValuePairs.map((num) => {
                       
                        return(
                            <div key={num} className='form-input'>
                                <input name='header-key' className="headersKey" ref='headerKey' onChange={(e)=>this.props.onChange(num, e)} 

                                onClick={(e)=>{
                                    this.props.addInput(num, e)}}
                                onFocus={(e)=>{
                                    this.props.addInput(num, e)}} placeholder='key'></input>
                                <input id='header-value' ref='headerValue' name='header-value' className="headersValue" onChange={(e)=>this.props.onChange(num, e)} onClick={(e)=>this.props.addInput(num, e)} placeholder='value'></input>
                                
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

