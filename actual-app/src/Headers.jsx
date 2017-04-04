import React from 'react';

class Headers extends React.Component {
  componentDidMount () {
    if (this.props.keyValuePairs.length === 0) {
      this.props.addInput(0);
    }
  }

  componentDidUpdate () {
    if (this.props.keyValuePairs.length === 0) {
      this.props.addInput(0);
    }
  }

  render () {
    return (
      <form className="form">
        {
          this.props.keyValuePairs.map(num=>(
            <div key={num} className='form-input'>
              <input
                name="header-key"
                className="headersKey"
                onChange={e=>this.props.onChange(num, e)}
                onClick={e=>this.props.addInput(num, e)}
                onFocus={e=>this.props.addInput(num, e)}
                placeholder="key"
              />
              <input
                id="header-value"
                name="header-value"
                className="headersValue"
                onChange={e=>this.props.onChange(num, e)}
                onClick={e=>this.props.addInput(num, e)} placeholder="value"
              />
              <button onClick={e=>this.props.removeInput(num, e)} >x</button>
            </div>
          ))
        }
      </form>
    );
  }
}

export default Headers;


