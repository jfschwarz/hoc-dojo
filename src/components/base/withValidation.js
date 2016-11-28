import React, { Component } from 'react'
import Checkmark from '../Checkmark'

export default (WrappedComponent, valid) => (

	class ValidationBuffer extends Component {
		constructor(props) {
			super(props)
			this.state = {
				hasFocus: false
			}
		}

		render() {
			const { value, onChange, ...rest } = this.props
			return (
				<div>
					<WrappedComponent {...rest}
						value={ this.state.hasFocus ? undefined : (value || '')}
						onChange={ (newValue) => {
							if (valid(newValue)) {
								onChange(newValue)
							} else if(value != null) {
								onChange(null)
							}
						}}
						onFocus={() => this.setState({ hasFocus: true })}
						onBlur={() => this.setState({ hasFocus: false })}
					/>
					{ valid(value) ? <Checkmark/> : "" }
				</div>
			)
		}
	}

)
