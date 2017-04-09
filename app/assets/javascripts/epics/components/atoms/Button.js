import React from 'react'

export default ({ onClick, text, className }) => (
  <button type="button" onClick={onClick} className={`btn btn-default ${className}`}>
    {text}
  </button>
)
