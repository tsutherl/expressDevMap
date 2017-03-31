import React from 'react';
import {Typeahead} from 'react-typeahead';



export default (props) => {
  return (
    <div id='search-bar'>
      <div className='search-inner'>
        <Typeahead 
          options={props.routeList}
          maxVisible={10}
          placeholder={'Filter Routes'}
          onOptionSelected={props.optionSelect}
          onKeyDown={props.downOnInput}
        />
        <button onClick={props.buttonClick}>
          Select Path
        </button>
      </div>
    </div>
  )
}