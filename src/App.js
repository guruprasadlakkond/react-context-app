import React from 'react';
import UserCreate from './components/UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onLanguagechange(selectedLanguage) {
    this.setState({ language: selectedLanguage });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguagechange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguagechange('dutch')}
          />
        </div>
        <div>
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
