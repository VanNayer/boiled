import React, {Component} from 'react';

class EpicsList extends Component {
  state = {epics: []};
  render() {
    return (
      <ul>
        {
          this.state.epics.map(epic =>
            <li key={epic}>{epic}</li>
          )
        }
      </ul>
    );
  }
}
export default EpicsList;
