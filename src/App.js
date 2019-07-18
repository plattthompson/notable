import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Menu from './components/Menu.js';
import Note from './components/Note.js';

class App extends Component {
	state = {
		text: ""
	}

	render() {
		return (
			<div className="flex">
				<Title />
				<Menu />
				<Note />
			</div>
		);
	}
}

export default App;