import React from 'react'

// DO NOT CHANGE THIS COMPONENT
const Textarea = ({ onChange, ...rest }) => (
  <textarea
    {...rest}
    onChange={(ev) => {
      if (onChange) {
        onChange(ev.target.value, ev)
      }
    }}
  ></textarea>
)

export default Textarea
