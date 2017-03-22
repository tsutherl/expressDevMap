import React from 'react'
import _ from 'lodash'

class Json extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('our last json', this.props.bodyJson )

        return(
            <textarea onChange={(e)=>{this.props.setJson(); this.props.onChangeJson(e)}}rows="4" cols="50">{_.isEmpty({})? null : this.props.bodyJson}</textarea>
        )
    }
}

export default Json

