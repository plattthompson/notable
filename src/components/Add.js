import React from 'react';

// class Add extends Component {
// 	render() {
// 		return (
// 			<div className="add">
// 				<i onClick={ this.props.addNote } className="fas fa-plus-circle fa-lg icon" aria-label="Add"></i>
// 			</div>
// 		)
// 	}
// }

const Add = (props) => {
	return (
		<div className="add">
			<i onClick={ props.addNote } className="fas fa-plus-circle fa-lg icon" aria-label="Add"></i>
		</div>
	)
}

export default Add;