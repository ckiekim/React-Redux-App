import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header></Header>
				<Nav></Nav>
				<Content></Content>
				{/* <header> <h1>WEB</h1> World Wide Web!!! </header> 
				<nav> <ol> <li><a href="html">HTML</a></li> <li><a href="css">CSS</a></li> <li><a href="js">JavaScript</a></li> </ol> </nav> 
				<article> <h2>Welcome to WEB</h2> Hello, everyone. </article> */}
			</div>
		);
	}
}

export default App;
