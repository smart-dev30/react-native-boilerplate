import { all, call, select, put, takeLatest } from 'redux-saga/effects'

import assign from 'lodash/assign'
import filter from 'lodash/filter'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import omit from 'lodash/omit'
import transform from 'lodash/transform'
import unary from 'lodash/unary'
import zipObject from 'lodash/zipObject'

import { DICTIONARIES } from 'constants/api'

import { getUnloadedList } from 'store/selectors/dictionaries'

import {
  DictionariesCreators,
  DictionariesTypes,
} from 'store/actions/dictionaries'

const getRequesterList = (api, dictionaryTypes) => {
  const REQUESTS = {
    [DICTIONARIES.ethnicities]: api.dictionaries.loadEthnicities,
    [DICTIONARIES.militaryServiceTypes]:
      api.dictionaries.loadMilitaryServiceTypes,
    [DICTIONARIES.usStates]: api.dictionaries.loadUSStates,
  }

  const getRequester = dictionaryType => REQUESTS[dictionaryType]

  const dicList = filter(dictionaryTypes, getRequester)
  const reqList = map(dicList, getRequester)

  return {
    dic: dicList,
    req: reqList,
  }
}

export function* loadDictionaries(api, { dictionaryList }) {
  const list = yield select(getUnloadedList, dictionaryList)
  const { req, dic } = yield call(getRequesterList, api, list)

  const responseList = yield all(map(req, unary(call)))
  const result = zipObject(dic, responseList)

  const dictionaries = mapValues(result, response => response.meta.data)
  const entities = transform(
    result,
    (acc, response) => {
      assign(acc, omit(response.data, 'meta'))
    },
    {},
  )

  yield put(
    DictionariesCreators.loadDictionariesSuccess(dictionaries, entities),
  )
}

export default function* main(api) {
  yield all([
    takeLatest(
      DictionariesTypes.LOAD_DICTIONARIES_REQUEST,
      loadDictionaries,
      api,
    ),
  ])
}
