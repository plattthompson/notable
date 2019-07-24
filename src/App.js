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
		.catch(error => console.error(error))

		// Timer for autosave every two minutes
		this.autoSave = setInterval(this.saveChanges, 2 * 60 * 1000)
	}

	// Clearing autosave function in case of unmount
	componentWillUnmount () {
		clearInterval(this.autoSave)
	}

	// Dynamically renders titles from state
	renderTitles = () => {
		return ( Object.values(this.state.allNotes).map(note => 
			<li onClick={ () => this.selectNote(note.id) } 
				key={ note.id.toString() }>
					<input onChange={ (event) => this.saveTitle(event) }
						className="title-box"  
						defaultValue={ note.title }
						id={ note.id } />
			</li>
			)
		)
	}

	// Updates state.currentNote upon selection of title
	selectNote = (id) => {
		let updatedCurrentNote = this.state.allNotes[id];
		this.setState({ 
			currentNote: updatedCurrentNote
		});
	}

	// Renders current note
	renderNote = () => {
		return this.state.currentNote.text;
	}

	// Saves note content to state upon change OR creates new note if a note hasn't been selected yet
	saveTextArea = (event) => {
		if (this.state.currentNote.id) {
			let currentNoteId = this.state.currentNote.id;
			let currentNoteTitle = this.state.currentNote.title;
			let currentNoteText = event.target.value;
			this.setState(prevState => ({ 
				currentNote: { 
					id: currentNoteId,
					title: currentNoteTitle,
					text: currentNoteText
				},
				allNotes: {
					...prevState.allNotes,
					[currentNoteId]: {
						id: currentNoteId,
						title: currentNoteTitle,
						text: currentNoteText
					}
				}
			}));
		} else {
			this.addNote();
		}
	}

	// Saves note title to state upon change
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

	// Makes shallow copy of state, creates a new note with a
	// Unix timestamp as an ID, adds the new note to the shallow
	// copy, and updates state with shallow copy
	addNote = () => {
		let getAllNotes = {...this.state.allNotes};
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

	// 
	saveChanges = () => {
		let allNotesObjects = Object.values({...this.state.allNotes});
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
		.then(res => console.log(res))
		.catch(error => console.error(error))
	}

	//
	deleteNote = () => {
		// Make a shallow copy, delete it from shallow copy, change state to shallow copy
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
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(error => console.error(error))
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
					<Note renderNote={ this.renderNote() } isNoteSelected={this.state.currentNote.id} saveTextArea={ this.saveTextArea } />
				</div>
			</div>
		);
	}
}

export default App;