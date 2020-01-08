import { put, takeEvery } from 'redux-saga/effects';

// promise will resolve after [x] milliseconds
const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
    console.log('Hello Sagas!')
  } 

// only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
  }


