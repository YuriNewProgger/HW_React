import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';

export default class App extends React.Component{
  

  render(){
      return (
          <div>
            <Header/>
            <div className='outterContainer'>
              <Nav/>
              <Content/>
            </div>
            
        </div>
      );
  }
}

