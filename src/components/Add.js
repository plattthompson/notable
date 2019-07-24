import React from 'react';

const Add = (props) => {
	return (
		<div className="add">
			<i onClick={ props.addNote } className="fas fa-plus-circle fa-lg icon" aria-label="Add"></i>
		</div>
	);
}

export default Add;