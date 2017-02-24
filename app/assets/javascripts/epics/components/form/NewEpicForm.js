import React from 'react'
import InputText from '../atoms/InputText.js'
import AddEpicButton from './AddEpicButton.js'

const NewEpicForm = () => (
  <div className="input-group input-group-lg py-3">
    <InputText />
    <AddEpicButton />
  </div>
)

export default NewEpicForm
