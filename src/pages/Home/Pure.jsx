import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/base/Container';
import Row from '../../components/base/Row';
import Col from '../../components/base/Col';
import { Wishlist } from '../../components/Wishlist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { fetchWishlistAction } from '../../actions';
const WishlistPage = ({ products = [] } = props) => {
  const dispatch = useDispatch();
  const { wishlists } = useSelector((state) => state.wishlist);
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
    </Container>
  );
};
export default withStoreWrapper(WishlistPage);

WishlistPage.propTypes = {
  products: PropTypes.array,
};
