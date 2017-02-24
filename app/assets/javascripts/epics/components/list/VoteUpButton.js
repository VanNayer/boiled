import recompact from 'recompact'
import Button from '../atoms/Button'

export default recompact.compose(
  recompact.setDisplayName('VoteUp'),
  recompact.connectObs(({ addEpic$ }) => ({ onClick: addEpic$ })),
  recompact.withProps({ text: 'Up!' }),
)(Button)
