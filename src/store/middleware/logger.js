
// middleware 中间件模板写法
function middlewareTemplate (store) {
  return (next) => {
    return action => {

    }
  }
}

export default store => next => action => {
  console.group();
  console.log(action);
  console.groupEnd()
  next(action)
}