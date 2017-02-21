import React from 'react'
import recompact from 'recompact'

const Button = ({ onAddEpic }) => (
  <button type="button" onClick={onAddEpic}>
    {'Ajouter l\'Epic'}
  </button>
)
export default recompact.connectObs(({ addEpic$ }) => (
  {
    onAddEpic: addEpic$,
  }))(Button)
