import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../store/actions/counter.action'

function Counter ({count, increment, decrement, incrementAsync2, incrementSync}) {
  console.log('--Counter--');
  return <div>
    <button onClick={ () => incrementAsync2(3) }>+</button>
    <span>{count}</span>
    <button onClick={ () => decrement(5) }>-</button>
  </div>
}

const mapStateToProps = state => ({
  count: state.counter.count
})

console.log(CounterActions.increment);
// bindActionCreators将 action 变成一个 dispatch({type: 'decrement'}) 方法
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(CounterActions, dispatch),
  // 这样写其实也能实现异步
  incrementAsync(payload){
    setTimeout(()=>{
      dispatch({type: 'increment', payload: payload})
    }, 2000)
  },
  incrementAsync2(payload){
    // 没有 thunk 中间件的话 这样写法会报错
    // 报错： Actions must be plain objects.
    dispatch((dispatch)=>{
      setTimeout(()=>{
        dispatch({type: 'increment', payload: payload})
      }, 2000)
    })
    
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
