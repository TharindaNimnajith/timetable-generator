import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {AppContainer as ReactHotAppContainer} from 'react-hot-loader'
import {configuredStore, history} from './store'
import './app.global.css'

const store = configuredStore()

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer

document.addEventListener('DOMContentLoaded', () => {
  const Root = require('./containers/Root').default
  render(
    <AppContainer>
      <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root')
  )
})
