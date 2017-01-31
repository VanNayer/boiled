import React from 'react';
import InputText from './atoms/InputText.js';
import Button from './atoms/Button.js';

const NewEpicForm = () => (
  <div>
    <InputText />
    <Button text="Add epic" />
  </div>
);
export default NewEpicForm;
