import React, { Component } from 'react'
import NewEpicForm from './form/NewEpicForm'
import EpicsList from './list/EpicsList'
import recompact from 'recompact'
import Rx from 'rxjs'
import $ from 'jquery'

class App extends Component {
  render() {
    return (
      <div className="pt-3">
        <h1>{'Let\'s boil the next technical epic'}</h1>
        <NewEpicForm />
        <EpicsList />
      </div>
    )
  }
}
App.propTypes = {}
export default recompact.compose(
  recompact.withObs(() => {
    const firstLoad$ = Rx.Observable.fromPromise($.getJSON('epics.json'))
    const input$ = new Rx.BehaviorSubject('')
    const requestAddEpic$ = new Rx.Subject()
    const responseAddEpic$ = requestAddEpic$
      .withLatestFrom(input$)
      .switchMap(([, input]) => (
        fetch((`/epics.json?epic[name]=${input}`), {
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            ContentType: 'application/json; charset=utf-8',
          },
        }).then((response) => {
          input$.next('')
          return response.json().then(json => json)
        })
      ))
      .startWith([])
    const epics$ = Rx.Observable.merge(responseAddEpic$, firstLoad$)
    return {
      input$,
      requestAddEpic$,
      epics$,
    }
  }),
)(App)
