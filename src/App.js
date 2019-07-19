import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Add from './components/Add.js';
import Trash from './components/Trash.js';
import SaveNote from './components/SaveNote.js'
import Menu from './components/Menu.js';
import Note from './components/Note.js';

class App extends Component {
	state = {
		title: "",
		text: ""
	}

	saveText = (event) => {
		this.setState({ text: event.target.value });
	}

	newNote = () => {
		// Prepend title, empty state
	}

	saveChanges = () => {
		// Send state to server
	}

	deleteNote = () => {
		// Empty string, delete node, send delete request to back-end
	}

	render() {
		return (
			<div>
				<Title />
				<div className="app-container background">
					<Add className="add"/>
					<SaveNote saveChanges={this.saveChanges} className="save-note"/>
					<Trash className="trash"/>
					<Menu className="menu"/>
					<Note saveText={this.saveText} className="note"/>
				</div>
			</div>
		);
	}
}
/*
<div>
				<Title className="title" />
				<div className="app-container background">
					<Grid container justify="center" alignItems="center">
						<Grid item sm={4} align="center">
							<Add className="add"/>
						</Grid>
						<Grid item sm={4} align="center">
							<SaveNote saveChanges={this.saveChanges} className="save-note"/>
						</Grid>
						<Grid item sm={4} align="center">
							<Trash className="trash"/>
						</Grid>
						<Grid item sm={6}>
							<Menu className="menu"/>
						</Grid>
						<Grid item sm={6}>
							<Note saveText={this.saveText} className="note"/>
						</Grid>
					</Grid>
				</div>
			</div>
*/

export default App;