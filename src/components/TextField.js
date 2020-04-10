import React from 'react';

class TextField extends React.Component {
  render() {
    console.log(this.props.onChange);
    return (
      <div className="ui field">
        <label>Name</label>
        <input type="text" />
      </div>
    );
  }
}

export default TextField;
