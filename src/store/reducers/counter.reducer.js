import { DECREMENT, INCREMENT } from "../const/counter.const";


// 默认 state
let initalSate = {
  count: 0
}
// 2.创建reducer
export default (state = initalSate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { 
        ...state,
        count: state.count + action.payload
      }
      break;
    case DECREMENT:
      return { 
        ...state,
        count: state.count - action.payload
      }
      break;
    default:
      return state
      break;
  }
}
