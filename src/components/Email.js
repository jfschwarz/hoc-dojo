import { Text } from './base'
import React, { Component } from 'react'
import enhanceWithLabel from './enhanceWithLabel';
import { isEmail } from '../validation';
import Checkmark from './Checkmark';

const EmailWithLabel = enhanceWithLabel(Text);

class EmailWithValidation extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			isValid: false
		};
	}
	
	render() {
		const { onChange, ...rest } = this.props;
		
		return (
			<div>
				<EmailWithLabel 
					onChange={(value) => {
						if (isEmail(value)) {
							this.setState({
								isValid: true
							});
							onChange(value);
						} else {
							this.setState({
								isValid: false
							});
						}
					}}
					{...rest}
				/>
				{this.state.isValid && <Checkmark />}
			</div>
		)	
	}
} 

export default EmailWithValidation
