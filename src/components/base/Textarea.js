import React from 'react'

const Textarea = ({ value, style, onChange, ...rest }) => (
  <textarea
    {...rest}
    style={{
      ...style,
    }}
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
