import recompact from 'recompact'
import rxjsObservableConfig from  'recompact/rxjsObservableConfig'
recompact.setConfig({ observablesKey: 'observables' })
recompact.setObservableConfig(rxjsObservableConfig)
