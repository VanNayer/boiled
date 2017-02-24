import recompact from 'recompact'
import Button from '../atoms/Button'

export default recompact.compose(
  recompact.setDisplayName('AddEpicButton'),
  recompact.connectObs(({ requestAddEpic$ }) => ({ onClick: requestAddEpic$ })),
  recompact.withProps({ text: 'Ajouter l\'Epic' }),
)(Button)
