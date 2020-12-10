import { HIDEMODAL, SHOWMODAL, SHOW_MODAL_ASYNC } from "../const/modal.const"

export const show = () => ({type: SHOWMODAL})
export const hide = () => ({type: HIDEMODAL})


export const show_modal_aysnc = () => ({type: SHOW_MODAL_ASYNC})