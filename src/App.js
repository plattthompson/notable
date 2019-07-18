import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Title from './components/Title.js';
import Menu from './components/Menu.js';
import Note from './components/Note.js';

class App extends Component {
	state = {
		text: ""
	}

	render() {
		return (
			<div>
				<Grid>
					<Title />
					<Menu />
					<Note />
				</Grid>
			</div>
		);
	}
}

export default App;