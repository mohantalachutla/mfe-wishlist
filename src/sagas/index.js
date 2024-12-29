import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import wishlistSaga from './wishlistSaga';

export const rootSaga = function* () {
  yield all([helloSaga(), wishlistSaga()]);
};

export default rootSaga;
