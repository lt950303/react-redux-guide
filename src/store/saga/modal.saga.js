import { takeEvery, put, delay} from 'redux-saga/effects'
import { show, show_modal_aysnc } from '../actions/modal.action'

function* show_modal_aysnc_func () {
  yield delay(1000)
  yield put(show())
}

export default function* modalSaga () {
  yield takeEvery(show_modal_aysnc, show_modal_aysnc_func)
}