import { handleActions as createReducer } from 'redux-actions'
import { hide, show } from '../actions/modal.action'
// 默认 state
let initialSate = {
  visible: false
}

const handleShow = (state, action) => ({visible: true})
const handleHide = (state, action) => ({visible: false})

export default createReducer({
  [show]: handleShow,
  [hide]: handleHide,
  // [increment_async]: handleIncrementAsync
}, initialSate)