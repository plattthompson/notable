import React, { Component } from 'react';

class Save extends Component {
	render() {
		return (
			<div className="save">
				<button onSubmit={this.props.saveChanges} type="submit">
					<i />
				</button>
			</div>
		)
	}
}

export default Save;