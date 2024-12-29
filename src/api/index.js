import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};

export const getWishlist = ({ name, type, subtype, status }) => {
  return httpClient.post('/api/wishlist/browse', {
    name,
    type,
    subtype,
    status,
  });
};

export const orderProducts = ({ items, address } = {}) => {
  return httpClient.post('/api/order', {
    items,
    address,
  });
};

export const addToCart = ({ items, archivedItems } = {}) => {
  return httpClient.post('/api/cart', {
    items,
    archivedItems,
  });
};

export const removeFromWishlist = ({ wishlistId, productId } = {}) => {
  return httpClient.delete(`/api/wishlist/${wishlistId}/${productId}`);
};

export const createNewWishlist = ({ name, description, items } = {}) => {
  return httpClient.post('/api/wishlist', {
    name,
    description,
    items,
  });
};
