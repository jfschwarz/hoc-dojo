import React from 'react'
import { Textarea, withLabel } from './base'

const Address = (props) => {
	const { value, onChange, ...rest } = props;

	return (
		<Textarea { ...rest } 
			value={ value ? value.join("\n") : value }
			onChange={ (newValue) => onChange(newValue ? newValue.split("\n") : newValue) }
			/>
	)
}

export default withLabel(Address)