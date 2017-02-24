import React from 'react'
import recompact from 'recompact'

const InputText = ({ onChange, onKeyDown, input }) => (
  <input
    className="form-control"
    type="text"
    name="text"
    placeholder="Epic name"
    value={input}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
)
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
)(InputText)
