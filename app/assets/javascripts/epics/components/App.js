import React from 'react'
import NewEpicForm from './form/NewEpicForm'
import EpicsList from './list/EpicsList'
import recompact from 'recompact'
import Rx from 'rxjs'
import $ from 'jquery'
import { postAndParseJson } from '../helpers/fetchApi'

export default recompact.compose(
  recompact.withObs(() => {
    const firstLoad$ = Rx.Observable.fromPromise($.getJSON('epics.json'))
    const input$ = new Rx.BehaviorSubject('')

    const requestVoteForEpic$ = new Rx.Subject()
    const responseVoteForEpic$ = requestVoteForEpic$
      .flatMap(id => postAndParseJson(`/epics/${id}/vote_up.json`))

    const requestAddEpic$ = new Rx.Subject()
    const responseAddEpic$ = requestAddEpic$
      .withLatestFrom(input$)
      .switchMap(([, input]) => postAndParseJson(`/epics.json?epic[name]=${input}`))
      .share()
      .startWith([])

    const epics$ = Rx.Observable.merge(firstLoad$, responseAddEpic$, responseVoteForEpic$)
    return {
      input$,
      requestAddEpic$,
      requestVoteForEpic$,
      responseAddEpic$,
      epics$,
    }
  }),
)(() =>
  <div className="pt-3">
    <h1>{'Let\'s boil the next technical epic'}</h1>
    <NewEpicForm />
    <EpicsList />
  </div>,
)
