import React from 'react'
import recompact from 'recompact'
import VoteUpButton from './VoteUpButton'

const EpicsList = ({ epics }) => (
  <ul className="list-group">
    {
      epics.map(({ id, user, name, score, timeAgo }) =>
        <li key={id} className="list-group-item row container-full p-1">
          <div className="col-md-2">
            <VoteUpButton epicId={id} className="container-full" />
          </div>
          <div className="col-md-10">
            <div className="row">
              <b className="col-md-8">{name}</b>
              <span className="col-md-4">{score} points</span>
            </div>
            <div className="row">
              <i className="col-md-12">by {user}, {timeAgo} ago</i>
            </div>
          </div>
        </li>,
      )
    }
  </ul>
)

export default recompact.compose(
  recompact.connectObs(({ epics$ }) => ({ epics: epics$ })),
  recompact.mapProps(({ epics }) => ({
    epics: epics.sort((epicA, epicB) => epicA.score < epicB.score),
  }),
  ),
)(EpicsList)
