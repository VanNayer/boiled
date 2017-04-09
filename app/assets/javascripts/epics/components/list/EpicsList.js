import React from 'react'
import recompact from 'recompact'
import VoteUpButton from './VoteUpButton'

const style = {
  width: '100%',
}

const EpicsList = ({ epics }) => (
  <ul className="list-group">
    {
      epics.map(({ id, user, name }) =>
        <li key={id} className="list-group-item">
          <div className="row" style={style}>
            <b className="col-4 col-md-4">{name}</b>
            <i className="col-7 col-md-6">by {user}</i>
            <VoteUpButton epicId={id} className="col-1 col-md-1" />
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
