import React from 'react'

class Urlencoded extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form className = "form">
                {
                    this.props.bodyKVPairs.map((num) => {
                        return(
                            <div key={num} className='form-input'>
                                <input name='url-key' className="headersKey" onChange={(e)=>this.props.onChange(num, e)} onClick={(e) => {
                                    console.log("in onCLick, here is num ", num);
                                    this.props.addInput(num, e); this.props.setUrlEn()}} onFocus={(e) => {
                                        console.log("in onFocus, here's num ", num);
                                        this.props.addInput(num, e); this.props.setUrlEn()}} placeholder='key'></input>
                                <input name='url-value' className="headersValue" onChange={(e)=>this.props.onChange(num, e)} onClick={(e)=>this.props.addInput(num, e)} placeholder='value'></input>
                                <button onClick={(e)=>this.props.removeInput(num, e)} >x</button> 
                                    {/* the "NUM" passed to the remove input fn is the problem --
                                        it is NOT the same as the unique id that gets attached 
                                        in onClick/onFocus --  need to get THAT value and pass it in 
                                        to on remove...  */}                                
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

