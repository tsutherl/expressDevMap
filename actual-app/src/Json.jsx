import React from 'react';
import _ from 'lodash';

export default props=>(
  <textarea
    className="json"
    onChange={(e)=>{
      props.setJson();
      props.onChangeJson(e);
    }}
    rows="4"
    cols="50">
    { _.isEmpty(this.props.bodyJson) ? null : this.props.bodyJson}
  </textarea>
);

