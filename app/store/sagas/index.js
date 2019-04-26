import { all, fork } from 'redux-saga/effects'

import APIService from 'services/api'

import app from './app'
import auth from './auth'
import dictionaries from './dictionaries'
import locale from './locale'
import session from './session'
import uploader from './uploader'
import viewer from './viewer'

export default function* main(store) {
  // NOTE: The API we use is only used from Sagas, so we create it here and pass
  //       along to the sagas which need it.
  const api = APIService.create(store)

  yield all([
    fork(app),
    fork(auth, api),
    fork(dictionaries, api),
    fork(locale),
    fork(session),
    fork(uploader, api),
    fork(viewer, api),
  ])
}
