import React from 'react';
import './App.css';
import todo from './todo.png';
import { Route, Link, Switch } from 'react-router-dom';

import List from "./List";

class ToDoApp extends React.Component {
  
    constructor(props){
      super(props);
  }
    
    render() {
      return (
        <div className="ToDoApp">
          
            <img src={todo} className="App-todo" alt="todologo" />
            <div>
            <h1 className="hello">Hello, world!</h1>
            <div className="enterButtonsContainer">
                <nav>
                    <ul>
                        <button className="enterButton" ><Link style={{ textDecoration: 'none' }} to="/list">Enter</Link></button>
                        
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/list">
                    <List />
                </Route>
                
            </Switch>
        </div>
            
            
          
        </div>
  
      );
  
    }
  
  }
  
  export default ToDoApp;
  