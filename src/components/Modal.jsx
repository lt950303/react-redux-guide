import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalAction from '../store/actions/modal.action'

function Modal ({ visible, show, hide }) {
  const styles = {
    width: 200,
    height: 200,
    backgroundColor: 'pink',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    display: visible ? 'block': 'none'
  }
  console.log('--Modal--');
  return <div>
    <button onClick={ show }>显示</button>
    <button onClick={ hide }>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  visible: state.modal.visible
})
const mapDispatchToProps = dispatch => bindActionCreators(modalAction,  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)