export default store => next => action => {
  console.log('test---触发');
  next(action)
}