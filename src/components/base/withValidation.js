import React, { Component } from 'react'
import Checkmark from '../Checkmark'

export default (WrappedComponent, valid) => (

	class ValidationBuffer extends Component {
		constructor(props) {
			super(props)
			this.state = {
				value : props.value
			}
		}

		render() {
			const { value, onChange, ...rest } = this.props
			return (
				<div>
					<WrappedComponent {...rest} 
						value={ this.state.value }
						onChange={ (newValue) => {
							this.setState({value : newValue})
							if (valid(newValue)) {
								onChange(newValue)
							}
						}}
					/>
					{ valid(this.state.value) ? <Checkmark/> : "" }
				</div>
			)	
		}
	}	

)