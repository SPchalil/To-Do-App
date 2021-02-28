import React from 'react';
import logo from './Avatar.png';
import './App.css';
import List from './List.js'

class App extends React.Component {
  render (){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          -- My To-Do App ✍--
        </h1>
        <List/>
      </header>
    </div>

    );

  }
  
}
export default App;
