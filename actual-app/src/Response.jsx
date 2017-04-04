import React from 'react';

class Response extends React.Component {
  render () {
    const { response } = this.props;
    return (
      <div>
        <div className="response-header">
          <h4>Response</h4>
          <h5>Status:</h5>
          <h5>Time:</h5>
        </div>
        <textarea
          value={response ? JSON.stringify(this.props.response) : 'response will load here'}
        />
      </div>
    );
  }
}

// This is probably not right
Response.propTypes = {
  response: React.PropTypes.node || React.PropTypes.null,
};

export default Response;


