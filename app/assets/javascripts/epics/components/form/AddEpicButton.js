import recompact from 'recompact'
import Button from '../atoms/Button'

export default recompact.compose(
  recompact.setDisplayName('AddEpicButton'),
  recompact.connectObs(({ addEpic$ }) => ({ onClick: addEpic$ })),
  recompact.withProps({ text: 'Ajouter l\'Epic' }),
)(Button)
