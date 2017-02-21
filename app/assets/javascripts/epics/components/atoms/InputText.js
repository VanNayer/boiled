import React from 'react'
import recompact from 'recompact'

const InputText = ({ onChange, input }) => (
  <input
    type="text"
    name="text"
    placeholder="Epic name"
    value={input}
    onChange={onChange}
  />
)
export default recompact.compose(
  recompact.connectObs(({ input$ }) => (
    { onInput: input$, input: input$ }
  )),
  recompact.withHandlers({
    onChange: props => event => props.onInput(event.target.value),
  }),
)(InputText)
