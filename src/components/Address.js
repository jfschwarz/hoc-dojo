import React from 'react';
import { Textarea } from './base';
import enhanceWithLabel from './enhanceWithLabel';

const AddressWithLabel = enhanceWithLabel(Textarea);

const AddressWithArrayValue = ({value, onChange, ...rest}) => {
	return (
		<AddressWithLabel 
			value={value.join('\n')}
			onChange={(stringValue) => {
				onChange(stringValue.split('\n'));
			}}
			{...rest} />
	);
}

export default AddressWithArrayValue
