import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './containers/Counter';
import TabLink from './containers/TabLink';
import TabContainer from './containers/TabContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter />
        <hr />
        <TabLink group="tabHome" id="tab1" >Pagina 1</TabLink> - 
        <TabLink group="tabHome" id="tab2" >Pagina 2</TabLink> - 
        <TabLink group="tabHome" id="tab3" >Pagina 3</TabLink> - 
        <hr />
        <TabContainer group="tabHome" id="tab1" >
          contenuti pagina 1
        </TabContainer>
        <TabContainer group="tabHome" id="tab2">
          contenuti pagina 2
        </TabContainer>
        <TabContainer group="tabHome" id="tab3">
          contenuti pagina 3
        </TabContainer>
      </div>
    );
  }
}

export default App;
