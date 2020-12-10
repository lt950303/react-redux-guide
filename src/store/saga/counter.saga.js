import { takeEvery, put, delay} from 'redux-saga/effects'
import { increment, increment_async } from '../actions/counter.action'

function* increment_async_func (action) {
  yield delay(1500)
  yield put(increment(action.payload))
}

export default function* counterSaga () {
  yield takeEvery(increment_async, increment_async_func)
  // 多个异步action 就接着写
  // yield takeEvery(SHOW_MODAL_ASYNC, show_modal_aysnc_func)
}