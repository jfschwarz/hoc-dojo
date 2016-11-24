import React from 'react'

const Text = ({ onChange, style, ...rest }) => (
  <input
    type="text"
    {...rest}
    style={{
      ...style,
    }}
    onChange={(ev) => {
      if (onChange) {
        onChange(ev.target.value, ev)
      }
    }}
  />
)

export default Text
