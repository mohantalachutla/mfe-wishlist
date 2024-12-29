import React from 'react';
import PropTypes from 'prop-types';
import Card from './base/Card';
import Button from './base/Button';
import Rating from './base/Rating';
import { ShoppingCartIcon, HeartIcon } from '../icons';
import {
  addToCartAction,
  orderProductAction,
  removeFromWishlistAction,
} from '../actions';
export function Product({
  wishlistId,
  name,
  _id,
  description,
  price,
  image,
  rating,
  status = 'instock',
  dispatch,
}) {
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      key={_id}
      style={{ width: '100%' }}
    >
      <Card className="relative w-full" imgAlt={name} imgSrc={image}>
        <div className="w-full flex flex-col justify-between gap-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="w-full flex items-center justify-around gap-x-4">
            <Rating rating={rating} total={5} />
            <HeartIcon
              size={32}
              color="red"
              onClick={() => {
                dispatch(
                  removeFromWishlistAction({
                    wishlistId,
                    productId: _id,
                  })
                );
              }}
            />
          </div>
          <div className="w-full flex items-center justify-around gap-x-4">
            <div className="inline text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </div>
            <div className="inline text-sm font-medium  text-gray-500 dark:text-white">
              {status}
            </div>
          </div>
          <div className="w-full flex items-center justify-around gap-x-4">
            <Button
              onClick={() => {
                dispatch(
                  orderProductAction({
                    items: [_id],
                    address: 'Some address',
                  })
                );
              }}
            >
              Order Now
            </Button>
            <Button
              onClick={() => {
                dispatch(
                  addToCartAction({
                    items: [_id],
                  })
                );
              }}
            >
              <ShoppingCartIcon className="mr-2 h-32 w-32" />
              Add to cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Product;

Product.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};
