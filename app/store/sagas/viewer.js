import { all, put, call, takeLatest } from 'redux-saga/effects'

import { ViewerCreators, ViewerTypes } from 'store/actions/viewer'

function* loadViewer(api) {
  const response = yield call(api.viewer.loadViewer)

  if (response.ok) {
    yield put(ViewerCreators.loadViewerSuccess(response))
  } else {
    yield put(ViewerCreators.loadViewerFailure(response))
  }
}

export default function* main(api) {
  yield all([takeLatest(ViewerTypes.LOAD_VIEWER_REQUEST, loadViewer, api)])
}
