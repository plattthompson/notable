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
		currentNote: {
			id: null,
			title: "",
			text: ""
		},
		allNotes: {
		}
	}

	// When app loads, notes are retrieved from API and state is updated
	componentDidMount() {
		fetch('https://noteworthy-graphql.herokuapp.com/v1/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: '{ notes { id title text } }'
			})
		})
		.then(res => res.json())
		.then(obj => obj.data.notes)
		.then(array => array.reduce((notes, note) => {
			notes[note.id] = note;
			return notes;
		}, {}))
		.then(notes => this.setState({ allNotes: notes }))
	}

	// Autosave every two minutes
	// setInterval(saveChanges, 2 * 60 * 5000)

	renderTitles = () => {
		let titlesToBeRendered = Object.values(this.state.allNotes).map(note => 
			<li onClick={ (event) => this.selectNote(event) } 
				key={ note.id.toString() }>
					<input onChange={ (event) => this.saveTitle(event) }
						className="title-box"  
						defaultValue={ note.title }
						id={ note.id } />
			</li>
		);
		return titlesToBeRendered;
	}

	renderNote = () => {
		let displayCurrentNote = this.state.currentNote.text;
		return displayCurrentNote;
	}

	selectNote = (event) => {
		let selectedNoteId = event.target.id;
		let updatedCurrentNote = this.state.allNotes[selectedNoteId];
		this.setState({ 
			currentNote: updatedCurrentNote
		});
	}

	saveTextArea = (event) => {
		let currentNoteId = this.state.currentNote.id;
		let currentNoteTitle = this.state.currentNote.title;
		let currentText = event.target.value;
		this.setState(prevState => ({ 
			currentNote: { 
				id: currentNoteId,
				title: currentNoteTitle,
				text: currentText
			},
			allNotes: {
				...prevState.allNotes,
				[currentNoteId]: {
					id: currentNoteId,
					title: currentNoteTitle,
					text: currentText
				}
			}
		}));
	}

	saveTitle = (event) => {
		let currentNoteId = this.state.currentNote.id;
		let currentNoteTitle = event.target.value;
		let currentText = this.state.currentNote.text;
		this.setState(prevState => ({ 
			currentNote: { 
				id: currentNoteId,
				title: currentNoteTitle,
				text: currentText
			},
			allNotes: {
				...prevState.allNotes,
				[currentNoteId]: {
					id: currentNoteId,
					title: currentNoteTitle,
					text: currentText
				}
			}
		}));
	}

	addNote = () => {
		let getAllNotes = this.state.allNotes;
		let id = Date.now();
		let newNote = { id: id, title: "", text: "" };
		getAllNotes[id] = newNote;
		this.setState({
			currentNote: {
				id: id,
				title: "",
				text: ""
			},
			allNotes: getAllNotes
		});
	}

	saveChanges = () => {
		let allNotesObjects = Object.values(this.state.allNotes);
		let allNotesNoQuotes = JSON.stringify(allNotesObjects)
			.replace(/"id":/g, "id:")
			.replace(/"title":/g, "title:")
			.replace(/"text":/g, "text:");
		let query = `mutation {
					  insert_notes(
						objects: 
						  ${allNotesNoQuotes}
						,
						on_conflict: {
						  constraint: notes_pkey
						  update_columns: [title, text]
						}
					  ) {
						returning {
						  id
						  title
						  text
						}
					  }
					}`;
		fetch('https://noteworthy-graphql.herokuapp.com/v1/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query })
		})
		.then(res => res.json())
		.then(res => console.log( res ))
	}

	deleteNote = () => {
		let currentId = this.state.currentNote.id;
		delete this.state.allNotes[currentId];
		this.setState({ currentNote: { id: null, title: "", text: "" }});
		fetch('https://noteworthy-graphql.herokuapp.com/v1/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `mutation {
							delete_notes(where: {id: {_eq: ${currentId}}}) {
								affected_rows
							}
						}`
			})
		})
	}

	render() {
		return (
			<div>
				<Header />
				<div className="app-container background">
					<Add addNote={ this.addNote } />
					<Save saveChanges={ this.saveChanges } />
					<Delete deleteNote={ this.deleteNote } />
					<Titles renderTitles={ this.renderTitles() } selectNote={ this.selectNote } saveTitle={ this.saveTitle } />
					<Note renderNote={ this.renderNote() } saveTextArea={ this.saveTextArea } />
				</div>
			</div>
		);
	}
}

export default App;