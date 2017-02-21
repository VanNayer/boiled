import React from 'react'
import recompact from 'recompact'

const EpicsList = ({ epics }) => (
  <ul>
    {
      epics.map(epic =>
        <li key={epic.id}><b>{epic.name}</b> <i>by {epic.user}</i></li>,
      )
    }
  </ul>
)

export default recompact.compose(
  recompact.connectObs(({ epics$ }) => ({ epics: epics$ }
  )),
)(EpicsList)
