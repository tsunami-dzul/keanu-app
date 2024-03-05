import { all, fork } from 'redux-saga/effects';
import { watchGetPicture } from './keanu/keanuSaga';

const rootSaga = function* () {
  yield all([fork(watchGetPicture)]);
};

export default rootSaga;
