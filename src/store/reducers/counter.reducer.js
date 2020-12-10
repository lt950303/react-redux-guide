import { handleActions as createReducer } from 'redux-actions'
import { decrement, increment, increment_async } from '../actions/counter.action'


// 默认 state
let initialSate = {
  count: 0
}

const handleIncrement = (state, action) => ({count: state.count + action.payload})
const handleDecrement = (state, action) => ({count: state.count - action.payload})

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement,
  // [increment_async]: handleIncrementAsync
}, initialSate)
