import { takeEvery, put, delay} from 'redux-saga/effects'
import { show } from '../actions/modal.action'
import { SHOW_MODAL_ASYNC } from '../const/modal.const'

function* show_modal_aysnc_func () {
  yield delay(1000)
  yield put(show())
}

export default function* modalSaga () {
  yield takeEvery(SHOW_MODAL_ASYNC, show_modal_aysnc_func)
}