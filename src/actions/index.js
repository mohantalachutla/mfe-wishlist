import { createAction } from '@reduxjs/toolkit';

export const helloAction = createAction('hello/request', (payload) => ({
  payload,
}));

export const fetchWishlistAction = createAction(
  'wishlist/fetchWishlist/request',
  (payload) => ({
    payload,
  })
);

export const orderProductAction = createAction(
  'wishlist/orderProduct/request',
  (payload) => ({
    payload,
  })
);

export const addToCartAction = createAction(
  'wishlist/addToCart/request',
  (payload) => ({
    payload,
  })
);

export const removeFromWishlistAction = createAction(
  'wishlist/removeFromWishlist/request',
  (payload) => ({
    payload,
  })
);

export const createNewWishlistAction = createAction(
  'wishlist/createNewWishlistAction/request',
  (payload) => ({
    payload,
  })
);
