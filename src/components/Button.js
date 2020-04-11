import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Voorlggen';
    return <button className="ui button primary ">{text}</button>;
  }
}
