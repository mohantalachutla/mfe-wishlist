import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Container from '../../components/base/Container';
import { Product } from '../../components/Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStoreWrapper } from 'components/common/StoreWrapper';
import { fetchWishlistAction } from '../../actions';
const ProductPage = ({ products = [] } = props) => {
  const { wishlistId } = useParams();
  const dispatch = useDispatch();
  const { wishlists } = useSelector((state) => state.wishlist || []);
  const { items: productList = products } =
    wishlists.filter((w) => w._id === wishlistId)[0] || {};
  useEffect(() => {
    if (productList.length === 0) {
      dispatch(fetchWishlistAction({}));
    }
  }, [dispatch]);
  return (
    <Container size="md">
      {productList.length === 0 && (
        <div className="alert alert-info" role="alert">
          No products found
        </div>
      )}
      {productList.map((product, index) => (
        <Product
          // eslint-disable-next-line @eslint-react/no-array-index-key
          key={product._id + index}
          {...product}
          wishlistId={wishlistId}
          dispatch={dispatch}
        />
      ))}
    </Container>
  );
};
export default withStoreWrapper(ProductPage);

ProductPage.propTypes = {
  products: PropTypes.array,
};
