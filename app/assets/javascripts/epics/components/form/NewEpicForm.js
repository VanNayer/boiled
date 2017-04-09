import React from 'react'
import NewEpicInput from './NewEpicInput'
import AddEpicButton from './AddEpicButton'
import recompact from 'recompact'

export default recompact.compose(
  recompact.connectObs(({ responseAddEpic$, input$ }) => {
    responseAddEpic$.subscribe(() => input$.next(''))
    return {}
  }),
)(() =>
  <div className="input-group input-group-lg py-3 full-container">
    <NewEpicInput />
    <AddEpicButton />
  </div>,
)
