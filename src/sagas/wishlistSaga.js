import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  getWishlist,
  orderProducts,
  addToCart,
  removeFromWishlist,
} from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { wishlistSuccess, wishlistFailure } from '../reducers/wishlist';
import { showAlert } from '../reducers/modal';
import {
  addToCartAction,
  fetchWishlistAction,
  orderProductAction,
  removeFromWishlistAction,
} from '../actions';
import { ALERT_TYPES } from '../constants';

const fetchWishlistSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(getWishlist, payload);
    yield put(wishlistSuccess(data));
  } catch (error) {
    yield put(wishlistFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const orderProductsSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(orderProducts, payload);
    const { _id } = data;
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Order has been placed with id ${_id}`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Order could not be placed',
      })
    );
  }
  yield put(loadingOff());
};

const addToCartSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    yield call(addToCart, payload);
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Added to cart`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Product could not be added to cart',
      })
    );
  }
  yield put(loadingOff());
};

const removeFromWishlistSagaHandler = function* ({
  payload: { wishlistId, productId },
}) {
  yield put(loadingOn());
  try {
    yield call(removeFromWishlist, { wishlistId, productId });
    const { wishlists = [] } = yield select((state) => state.wishlist);
    const selectedIndex = wishlists.findIndex(
      (wishlist) => wishlist._id === wishlistId
    );
    const selectedWishlist = wishlists[selectedIndex];
    const products = (selectedWishlist.items || []).filter(
      (p) => p._id !== productId
    );
    selectedWishlist.items = products;
    wishlists[selectedIndex] = selectedWishlist;
    yield put(wishlistSuccess(wishlists));
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Removed from wishlist`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Product could not be removed from wishlist',
      })
    );
  }
  yield put(loadingOff());
};

const wishlistSaga = function* () {
  yield takeLatest(fetchWishlistAction.type, fetchWishlistSagaHandler);
  yield takeLatest(orderProductAction.type, orderProductsSagaHandler);
  yield takeLatest(addToCartAction.type, addToCartSagaHandler);
  yield takeLatest(
    removeFromWishlistAction.type,
    removeFromWishlistSagaHandler
  );
};

export default wishlistSaga;
