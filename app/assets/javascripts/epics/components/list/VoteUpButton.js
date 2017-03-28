import recompact from 'recompact'
import Button from '../atoms/Button'

export default recompact.compose(
  recompact.setDisplayName('VoteUp'),
  recompact.connectObs(({ requestVoteForEpic$ }) => ({ onClick: requestVoteForEpic$ })),
  recompact.withHandlers({
    onClick: ({ epicId, onClick }) => () => onClick(epicId),
  }),
  recompact.withProps({ text: 'Up!' }),
)(Button)
