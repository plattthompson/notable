import React, { Component } from 'react';

class Note extends Component {

	render() {
		return (
			<div className="note-div">
				<textarea 
					value={this.value} 
					onChange={this.props.saveText}
					className="note-box" 
					placeholder="Create your note here"
				/>
			</div>
		);
	}
}

export default Note;