import React, { Component } from 'react';

class Note extends Component {

	render() {
		return (
			<div className="note-div">
				<textarea 
					value={ this.props.renderNote } 
					onChange={ (event) => this.props.saveTextArea(event) }
					className="note-box" 
					placeholder="Create a note on the left and start typing here" />
			</div>
		);
	}
}

export default Note;