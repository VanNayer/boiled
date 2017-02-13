import React from 'react';
import recompact from 'recompact';

const Button = ({onAddEpic}) => (
  <button type="button" onClick={onAddEpic}>
    {'Ajoute la choucroute'}
  </button>
);
export default recompact.connectObs(({addEpic$}) => (
  {
    onAddEpic: addEpic$,
  }))(Button);
