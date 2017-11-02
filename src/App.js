import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      introText: 'I came from the state!',
      clickCount: 0,
      textTwo: 'Im a second button!',
      clickCountTwo: 0,

    }
  }
  render() {
    const headerText = "I am a title from a prop"
    return (
      <div className="App">
        <Header title={headerText} onClick={this.onClick.bind(this)}/>
        <p className="App-intro">
        {this.state.introText}
        </p>
        <Header title={headerText} onClick={this.clickDown.bind(this)}/>
        <p className="App-intro">
        {this.state.textTwo}
        </p>
        </div>
    );
  }
    onClick() {
      const newClickCount = this.state.clickCount + 1
      this.setState({ 
        clickCount: newClickCount,
        introText: 'I clicked the button ' + newClickCount + ' times'
    })
    }
     clickDown() {
      const secondClickCount = this.state.clickCountTwo - 1
      this.setState({ 
        clickCountTwo: secondClickCount,
        textTwo: 'I clicked the button ' + secondClickCount + ' times'
    })
  }
}


export default App;

class Header extends Component {
  render() {
    return (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">{this.props.title}</h1>
              <button onClick={this.props.onClick}>Click Me!</button>
            </header>
      )
  }
}
