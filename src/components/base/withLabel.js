import React from 'react'

export default (WrappedComponent) => (props) => (
	<div>
		<label style={ { marginRight: 10} }>{ props.label }:</label>
		<WrappedComponent { ...props } />
	</div>
)