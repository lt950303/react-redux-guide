import { takeEvery, put, delay} from 'redux-saga/effects'
import { increment } from '../actions/counter.action'
import { INCREMENT_ASYNC } from '../const/counter.const'

function* increment_async_func (action) {
  yield delay(1500)
  yield put(increment(action.payload))
}

export default function* counterSaga () {
  yield takeEvery(INCREMENT_ASYNC, increment_async_func)
  // 多个异步action 就接着写
  // yield takeEvery(SHOW_MODAL_ASYNC, show_modal_aysnc_func)
}