import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React: lists and condiotionals</h1>
        </header>
        <input className="App-main-input" onChange={this.inputOnChangeHandler} value={this.state.text}/>
        <p>Text length: {this.state.textLegnth}</p>
        <p>Text: {this.state.text}</p>        
      </div>
    );
  }
}

export default App;
