import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationCompotent from './ValidationComponent/ValidationComponent';
import CharList from './CharList/CharList';

class App extends Component {
  state = {
    text: '',
    textLegnth: 0
  }

  inputOnChangeHandler = (event) => {
    const text = event.target.value;
    const textLegnth = text.length;

    this.setState({
      text,
      textLegnth
    });
  }

  charOnClickHandler = (charIndex) => {
    const charArray = this.state.text.split('');
    charArray.splice(charIndex, 1);

    const updatedText = charArray.join('');

    this.setState({
        text : updatedText
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React: lists and condiotionals</h1>
        </header>
        <input className="App-main-input" onChange={this.inputOnChangeHandler} value={this.state.text}/>
        <CharList text={this.state.text} onCharClick={this.charOnClickHandler}/>
        <p>Text length: {this.state.textLegnth}</p>
        <ValidationCompotent textLegnth={this.state.textLegnth}/>
      </div>
    );
  }
}

export default App;
