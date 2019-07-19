import React, { Component } from 'react';

class SaveNote extends Component {
	render() {
		return (
			<div className="save-note">
				<button onSubmit={this.props.saveChanges} type="submit">
					<i />
				</button>
			</div>
		)
	}
}

export default SaveNote;