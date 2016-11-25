import React from 'react'

// DO NOT CHANGE THIS COMPONENT
const Textarea = ({ value, onChange, ...rest }) => (
  <textarea
    {...rest}
    onChange={(ev) => {
      if (onChange) {
        onChange(ev.target.value, ev)
      }
    }}
  >
    { value }
  </textarea>
)

export default Textarea
