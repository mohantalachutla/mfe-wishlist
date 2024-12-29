import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/base/Container';
import { Wishlist } from '../../components/Wishlist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { fetchWishlistAction } from '../../actions';
import { Button } from 'flowbite-react';
import { showModal } from '../../reducers/modal';
import { MODAL_TYPES } from '../../constants';
const WishlistPage = ({ products = [] } = props) => {
  const dispatch = useDispatch();
  const { wishlists } = useSelector((state) => state.wishlist);
  const handleNewWishlist = (event) => {
    event.preventDefault();
    dispatch(
      showModal({
        type: MODAL_TYPES.NEW_WISHLIST,
        data: {
          displayName: 'New Wishlist',
        },
      })
    );
  };
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchWishlistAction({}));
    }
  }, [dispatch]);
  return (
    <Container size="md">
      {wishlists.length === 0 && (
        <div className="alert alert-info" role="alert">
          You have no wishlists
        </div>
      )}
      {wishlists.map((wishlist) => (
        <Wishlist key={wishlist._id} {...wishlist} />
      ))}
      <Button onClick={handleNewWishlist}>New Wishlist</Button>
    </Container>
  );
};
export default withStoreWrapper(WishlistPage);

WishlistPage.propTypes = {
  products: PropTypes.array,
};
