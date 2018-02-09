import React, {  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBig from './components/HelloBig';
import Border from './components/Border';
import NameList from './components/NameList';

const data = [
  { id: 5, name: 'pippo'},
  { id: 6, name: 'pluto'},
  { id: 7, name: 'qui'},
  { id: 9, name: 'quo'},
  { id: 11, name: 'qua'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        <NameList data={data} />

        <Border borderCss="border-blue" 
          visible={false} >
          <Hello name="pippo" />
          <Hello name="pluto" />
          <HelloBig />
          <HelloBig name="pino" />
        </Border>
      </div>
    );
  }
}

export default App;
