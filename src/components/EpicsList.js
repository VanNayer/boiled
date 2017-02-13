import React from 'react';
import recompact from 'recompact';

const EpicsList = ({epics}) => (
  <ul>
    {
      epics.map(epic =>
        <li key={epic}>{epic}</li>
      )
    }
  </ul>
);

export default recompact.compose(
  recompact.connectObs(({epics$}) => ({epics: epics$}
  )),
)(EpicsList);
