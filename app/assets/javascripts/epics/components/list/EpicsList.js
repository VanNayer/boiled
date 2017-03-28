import React from 'react'
import recompact from 'recompact'
import VoteUpButton from './VoteUpButton'

const EpicsList = ({ epics }) => (

  <ul className="list-group">
    {
      epics.map(epic =>
        <li key={epic.id} className="list-group-item">
          <div className="row">
            <VoteUpButton epicId={epic.id} className="col-sm-2 col-md-2" />
            <b className="col-sm-4 col-md-4">{epic.name}</b>
            <i className="col-sm-4 col-md-4">by {epic.user}</i>
          </div>
        </li>,
      )
    }
  </ul>
)

export default recompact.compose(
  recompact.connectObs(({ epics$ }) => ({ epics: epics$ }
  )),
)(EpicsList)
