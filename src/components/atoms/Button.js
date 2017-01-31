import React from 'react';

const Button = ({onClick, text}) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);
export default Button;
