import React from 'react';
import TextField from './TextField';
import Button from './Button';

export default class UserCreate extends React.Component {
  render() {
    return (
      <div className="ui form">
        User Create
        <TextField />
        <Button />
      </div>
    );
  }
}
