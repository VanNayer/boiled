import React, {Component} from 'react';
import NewEpicForm from './NewEpicForm.js';
import EpicsList from './EpicsList.js';
import recompact from 'recompact';
import Rx from 'rxjs';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{'Let\'s boil the next technical epic'}</h1>
        <NewEpicForm />
        <EpicsList  />
      </div>
    );
  }
}
App.propTypes = {};
export default recompact.compose(
  recompact.withObs(() => {
    const firstLoad$ = Rx.Observable.fromPromise($.getJSON('epics.json'));
    const input$ = new Rx.BehaviorSubject('');
    const addEpic$ = new Rx.Subject();
    const epics$ = addEpic$
      .withLatestFrom(input$)
      .switchMap(([, input]) => (
        fetch((`/epics.json?epic[name]=${input}`), {
          method: 'POST',
          headers: {'ContentType': 'application/json; charset=utf-8'},
          body: input,
        }).then(response => response.json().then(json => json))
      ))
      .startWith([]).merge(firstLoad$);
    return {
      input$,
      addEpic$,
      epics$,
    };
  }),
)(App);
