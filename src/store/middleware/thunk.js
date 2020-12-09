// redux 本身功能流中 dispatch 只能是个对象才行
// error:  Actions must be plain objects. Use custom middleware for async actions.
// 本 thunk 就是用来解决 redux 中异步问题

export default ({dispatch}) => next => action => {
  // 1. 当前中间件函数不关心你想执行什么异步操作， 只是关心你执行的是不是异步操作
  // 2. 如果你执行的是异步操作， 你触发的action时候， 给我传递一个函数， 如果是同步操作就直接传递一个action
  // 3. 异步操作代码要写在传递进来的函数中 
  // 4. 当前这个者中间件函数在调用你传递进来的函数时， 要将dispatch方法传递过去
  if(typeof action === 'function'){
    // 一定要 return 来阻止程序向下执行
    return action(dispatch)
  }

  next(action)
}