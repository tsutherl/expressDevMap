import React from 'react';
import {Typeahead} from 'react-typeahead';

export default (props) => {
  console.log(props)
  return (
    <div id='search-bar'>
      <div className='search-inner'>
        <Typeahead 
          options={props.routeList}
          maxVisible={10}
          placeholder={'Filter Routes'}
        />
        <button>
          Select Path
        </button>
      </div>
    </div>
  )
}