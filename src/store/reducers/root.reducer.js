import { combineReducers } from 'redux'
import CounterReducer from './counter.reducer'
import ModalReducer from './modal.reducer'

// 最后得到的结构：  {counter: { count: 0}, modal: {visible: false}}
export default combineReducers({
  counter: CounterReducer,
  modal: ModalReducer
})