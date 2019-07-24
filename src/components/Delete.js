import React from 'react';

const Delete = (props) => {
	return (
		<div className="delete">
			<i onClick={ props.deleteNote } className="fas fa-trash-alt fa-lg icon" aria-label="Delete"></i>
		</div>
	);
}

export default Delete;