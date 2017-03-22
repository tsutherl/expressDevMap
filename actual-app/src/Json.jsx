import React from 'react'

class Json extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <textarea onChange={(e)=>{this.props.setJson(); this.props.onChangeJson(e)}}rows="4" cols="50"/>
        )
    }
}

export default Json

