import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Add from './components/Add.js';
import Delete from './components/Delete.js';
import Save from './components/Save.js'
import Titles from './components/Titles.js';
import Note from './components/Note.js';

class App extends Component {
	state = {
		1: {
			id: 1,
			title: "",
			text: ""
		}
	}

	selectNote = () => {

	}

	saveText = (event) => {
		this.setState({ text: event.target.value, });
	}

	addNote = () => {
		// Prepend title, empty state
	}

	saveChanges = () => {
		// Send state to server
	}

	deleteNote = () => {
		// Empty string, delete node, send delete request to back-end
	}

	// this.state.map

	render() {
		return (
			<div>
				<Header />
				<div className="app-container background">
					<Add addNote={this.addNote} />
					<Save saveChanges={this.saveChanges} />
					<Delete deleteNote={this.deleteNote} />
					<Titles selectNote={this.selectNote} />
					<Note saveText={this.saveText} />
				</div>
			</div>
		);
	}
}

export default App;