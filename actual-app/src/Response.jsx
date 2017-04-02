import React from 'react'

class Response extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className='response-header'>
                    <h4>Response</h4>
                    <h5>Status:   </h5>
                    <h5>Time:   </h5>
                </div>
                <textarea value={JSON.stringify(this.props.response)}></textarea>
            </div>
        )
    }
}

export default Response


