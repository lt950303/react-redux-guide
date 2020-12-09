import { HIDEMODAL, SHOWMODAL } from "../const/modal.const";

// 默认 state
let initialSate = {
  visible: false
}


export default (state = initialSate, action) => {
  switch (action.type) {
    case SHOWMODAL:
      return { 
        ...state,
        visible: true
      }
      break;
    case HIDEMODAL:
      return { 
        ...state,
        visible: false
      }
      break;
    default:
      return state
      break;
  }
}