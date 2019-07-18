import React, { Component } from 'react';
import './App.css';
import Note from './components/Note.js';
import Menu from './components/Menu.js';

class App extends Component {
	state = {
		text: ""
	}

	render() {
		return (
			<div>
				<h1>Noteworthy</h1>
				<Menu />
				<Note />
			</div>
		);
	}
}

export default App;