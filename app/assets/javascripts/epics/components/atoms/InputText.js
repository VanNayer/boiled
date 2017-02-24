import React from 'react'

export default ({ onChange, onKeyDown, input, placeholder }) => (
  <input
    className="form-control"
    type="text"
    name="text"
    placeholder={placeholder}
    value={input}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
)
