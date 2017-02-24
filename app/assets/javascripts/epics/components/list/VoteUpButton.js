import recompact from 'recompact'
import Button from '../atoms/Button'

export default recompact.compose(
  recompact.setDisplayName('VoteUp'),
  recompact.connectObs(({ requestAddEpic$ }) => ({ onClick: requestAddEpic$ })),
  recompact.withProps({ text: 'Up!' }),
)(Button)
