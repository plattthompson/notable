import React from 'react';

const Note = (props) => {
	return (
		<div className="note-div">
			<textarea 
				value={ props.renderNote } 
				onChange={ (event) => props.saveTextArea(event) }
				className="note-box" 
				placeholder="Create your note here" />
		</div>
	);
}

export default Note;