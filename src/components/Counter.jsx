import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../store/actions/counter.action'

function Counter ({count, increment, decrement, increment_async}) {
  console.log('--Counter--');
  return <div>
    <button onClick={ increment_async.bind(null ,1000) }>+</button>
    <span>{count}</span>
    <button onClick={ () => decrement(10) }>-</button>
  </div>
}

const mapStateToProps = state => ({
  count: state.counter.count
})

console.log(CounterActions.increment);
// bindActionCreators将 action 变成一个 dispatch({type: 'decrement'}) 方法
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
