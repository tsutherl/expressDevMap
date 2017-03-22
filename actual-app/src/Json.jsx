import React from 'react'
import _ from 'lodash'

class Json extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <textarea onChange={(e)=>{this.props.setJson(); this.props.onChangeJson(e)}}rows="4" cols="50">{_.isEmpty(this.props.bodyJson)? null : this.props.bodyJson}</textarea>
        )
    }
}

export default Json

