import React from 'react';
import {Typeahead} from 'react-typeahead';

export default (props) => {
  console.log(props)
  return (
    <div id='search-bar'>
      <Typeahead 
        options={props.routeList}
        maxVisible={10}
      />
    </div>
  )
}