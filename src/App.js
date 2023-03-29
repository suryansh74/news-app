import './App.css';
import NavBar from './components/NavBar';
import News from './components/News'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    const KEY='d88e960296b3445a82d5c9a4367702f1'  //ENTER YOUR API KEY HERE
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={12} country='in' category='general' KEY={KEY}/>}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={12} country='in' category='business' KEY={KEY}/>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={12} country='in' category='entertainment' KEY={KEY}/>}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={12} country='in' category='health' KEY={KEY}/>}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={12} country='in' category='science' KEY={KEY}/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={12} country='in' category='sports' KEY={KEY}/>}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={12} country='in' category='technology' KEY={KEY}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}