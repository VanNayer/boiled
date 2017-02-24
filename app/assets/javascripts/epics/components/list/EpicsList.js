import React from 'react'
import recompact from 'recompact'
import VoteUpButton from './VoteUpButton'

const EpicsList = ({ epics }) => (
  <ul className="list-group">
    {
      epics.map(epic =>
        <li key={epic.id} className="list-group-item">
          <div className="row">
            <div className="col-sm-2 col-md-2">
              <VoteUpButton />
            </div>
            <div className="col-sm-4 col-md-4">
              <b>{epic.name}</b>
            </div>
            <div className="col-sm-4 col-md-4">
              <i>by {epic.user}</i>
            </div>
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
