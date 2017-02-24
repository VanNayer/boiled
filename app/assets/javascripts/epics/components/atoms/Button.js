import React from 'react'

export default ({ onClick, text }) => (
  <button type="button" onClick={onClick} className="btn btn-default">
    { text }
  </button>
)
