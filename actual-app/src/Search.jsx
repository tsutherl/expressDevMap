import React from 'react';
import {Typeahead} from 'react-typeahead';



export default (props) => {
  return (
    <div id='search-bar'>
      <div className='search-inner'>
        <Typeahead 
          options={props.routeList}
          placeholder={'Filter Routes'}
          onOptionSelected={props.optionSelect}
        />
        <button onClick={props.buttonClick}>
          Select Path
        </button>
      </div>
    </div>
  )
}