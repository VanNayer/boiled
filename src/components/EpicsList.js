import React, {Component} from 'react';
import {Observable} from 'rxjs';
import $ from 'jquery';

class EpicsList extends Component {
  state = {epics: []};


  componentWillMount() {
    const requests$ = Observable.of('load');
    const responses$ = requests$.flatMap(requestUrl => {
      return Observable.fromPromise($.getJSON(requestUrl));
    });

    responses$.subscribe(response => {
      this.setState({epics: response.epics});
    });
  }


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
