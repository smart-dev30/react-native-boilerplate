import { all, takeLatest, call, put } from 'redux-saga/effects'

import { NavigationActions } from 'react-navigation'

import { app, auth } from 'constants/routeNames'

import NavigationService from 'services/navigation'

import { AuthCreators, AuthTypes } from 'store/actions/auth'

function* signIn(api, { email, password, resolve }) {
  const response = yield call(api.auth.signIn, {
    email,
    password,
  })

  if (response.ok) {
    yield put(
      AuthCreators.signInSuccess(
        response.data.access,
        response.data.refresh,
        response.data.accessExpiresAt,
      ),
    )
  } else {
    yield put(AuthCreators.signInFailure(response))
  }

  yield call(resolve, response)
}

function* signUp(api, { email, password, token, resolve }) {
  const response = yield call(api.auth.signUp, {
    email,
    password,
    token,
  })

  if (response.ok) {
    yield put(AuthCreators.signUpSuccess(email, password, resolve))
  } else {
    yield put(AuthCreators.signUpFailure(response))
  }

  yield call(resolve, response)
}

function* logOut() {
  yield call(
    NavigationService.dispatch,
    NavigationActions.navigate({ routeName: app.progress }),
  )

  yield put(AuthCreators.logOutSuccess())

  yield call(
    NavigationService.dispatch,
    NavigationActions.navigate({ routeName: auth.signIn }),
  )
}

function* resetPassword(api, { email, resolve }) {
  const response = yield call(api.auth.resetPassword, { email })

  if (response.ok) {
    yield put(AuthCreators.resetPasswordSuccess())
  } else {
    yield put(AuthCreators.resetPasswordFailure(response))
  }

  yield call(resolve, response)
}

export default function* main(api) {
  yield all([
    takeLatest(
      [AuthTypes.SIGN_IN_REQUEST, AuthTypes.SIGN_UP_SUCCESS],
      signIn,
      api,
    ),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, api),
    takeLatest(AuthTypes.LOG_OUT_REQUEST, logOut),
    takeLatest(AuthTypes.RESET_PASSWORD_REQUEST, resetPassword, api),
  ])
}
