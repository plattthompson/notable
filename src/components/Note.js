import React from 'react';

// class Note extends Component {
// 	render() {
// 		return (
// 			<div className="note-div">
// 				<textarea 
// 					value={ this.props.renderNote } 
// 					onChange={ (event) => this.props.saveTextArea(event) }
// 					className="note-box" 
// 					placeholder="Create your note here" />
// 			</div>
// 		);
// 	}
// }

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