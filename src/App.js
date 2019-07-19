import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Add from './components/Add.js';
import Delete from './components/Delete.js';
import Save from './components/Save.js'
import Menu from './components/Menu.js';
import Note from './components/Note.js';

class App extends Component {
	state = {
		id: 1,
		title: "",
		text: ""
	}

	saveText = (event) => {
		this.setState({ text: event.target.value, });
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
				<Header />
				<div className="app-container background">
					<Add />
					<Save saveChanges={this.saveChanges} />
					<Delete />
					<Menu />
					<Note saveText={this.saveText} />
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