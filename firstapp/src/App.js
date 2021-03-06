import React, {  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBig from './components/HelloBig';
import Border from './components/Border';
import NameList from './components/NameList';
import Ticker from './components/Ticker';
import If from './components/If';
import TabPage from './components/TabPage';

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
      <div className="App super-scai-todo">
        <header className="App-header"  >
          <img src={logo} className="App-logo" alt="logo"
           />                    
        </header>
        <TabPage />
{/*
        <IfElse 
          condition={true}

          then={
            ()  => <span>vero</span>
          }

          else={
            () => <span>false</span>
          }
        />
        */}
        <If condition={false} >
          <hr />
          <Ticker />
          <Ticker />
          <Ticker />
          <NameList data={data} />
          
          <a href="" >ciao</a>

          <Border borderCss="border-blue" 
            visible={false} >
            
            <Hello name="pippo" />
            <Hello name="pluto" />
            <HelloBig />
            <HelloBig name="pino" />
          </Border>
        </If>
      </div>
    );
  }
}

export default App;
