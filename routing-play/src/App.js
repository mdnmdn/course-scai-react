import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';

const userList = [
  {id: 1, name: 'pippo'},
  {id: 2, name: 'pluto'},
  {id: 3, name: 'paperino'},
]

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">        
          <h1 className="App-title">Welcome to React            
          </h1>

          <Link to="/" >Home</Link>
          - <Link to="/info" >Info</Link>
          - <Link to="/about" >About</Link>
          - <Link to="/users" >Users</Link>
          
          
          <hr />

          <Route path="/" exact component={HomePage} />
          <Route path="/info"  component={InfoPage} />
          
          <Route path="/about" render={ () => (
              <div>
                  pagina di about
              </div>
            )} /> 

          <Route path="/users" render={ () => (
            <div>
              <div>
                  users
              </div>
              <ul>
                {userList.map(u => 
                  <li key={u.id}>
                    <Link to={'/users/' + u.id}>{u.name}</Link>                  
                  </li>
                )}                
              </ul>

              <Route path="/users/:id" render={
                (props) => (
                    <div>
                      user page id: {props.match.params.id} 
                    </div>
                )
              } />
            </div>
            )} /> 
          
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
