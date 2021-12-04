import React, { Component } from 'react'
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
    <>
       <Navbar/>
       <Banner/>
       <Movies/>
    </>
    )
  }
}
