import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './saga/root.saga'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'

// 中间件执行顺序就是 参数注册顺序
// const middlewares = applyMiddleware(logger, test, thunk)
const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)

// 1.创建store  第二个store默认值是可选参数
export const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)
