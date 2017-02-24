import recompact from 'recompact'
import InputText from '../atoms/InputText'

export default recompact.compose(
  recompact.connectObs(({ input$, addEpic$ }) => ({ onInput: input$, input: input$, onKeyDown: addEpic$ })),
  recompact.withHandlers({
    onChange: props => (event) => {
      props.onInput(event.target.value)
    },
    onKeyDown: props => (event) => {
      const keyCode = event.which || event.keyCode
      if (keyCode === 13) {
        props.onKeyDown('submit')
      }
    },
  }),
  recompact.withProps({
    placeholder: 'Epic name',
  }),
)(InputText)
