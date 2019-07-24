import React from 'react';

// class Save extends Component {
// 	render() {
// 		return (
// 			<div className="save">
// 				<i onClick={ this.props.saveChanges } className="far fa-save fa-lg icon" aria-label="Save"></i>
// 			</div>
// 		)
// 	}
// }

const Save = (props) => {
	return (
		<div className="save">
			<i onClick={ props.saveChanges } className="far fa-save fa-lg icon" aria-label="Save"></i>
		</div>
	)
}

export default Save;