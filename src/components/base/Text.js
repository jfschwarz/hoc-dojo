import React from 'react'

// DO NOT CHANGE THIS COMPONENT
const Text = ({ onChange, ...rest }) => (
  <input
    type="text"
    {...rest}
    onChange={(ev) => {
      if (onChange) {
        onChange(ev.target.value, ev)
      }
    }}
  />
)

export default Text
