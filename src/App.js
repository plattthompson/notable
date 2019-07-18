import React, { Component } from 'react';
import './App.css';
import Note from './components/Note.js';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<Note />
			</div>
		);
	}
}

export default App;