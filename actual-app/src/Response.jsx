import React from 'react';

export default (props)=>{
  const { response } = props;
  return (
    <div>
      <div className="response-header">
        <h4>Response</h4>
        <h5>Status:</h5>
        <h5>Time:</h5>
      </div>
      <textarea
        value={response ? JSON.stringify(response) : 'response will load here'}
      />
    </div>
  );
};


