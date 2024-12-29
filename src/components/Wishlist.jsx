import React from 'react';
import PropTypes from 'prop-types';
import Card from './base/Card';
import Badge from './base/Badge';
import useNavigate from '../hooks/useNavigate';
// eslint-disable-next-line @eslint-react/no-unstable-default-props
export function Wishlist({ name, _id, description, items = [], image }) {
  const navigate = useNavigate();
  const clickHandler = (event) => {
    event.preventDefault();
    navigate(`/${_id}`);
  };
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      key={_id}
      style={{ width: '100%' }}
    >
      <a
        href="#"
        className="w-full md:w-2/3 sm:w-full no-underline"
        onClick={clickHandler}
      >
        <Card className="relative w-full" imgAlt={name} imgSrc={image}>
          <div className="w-full flex flex-col justify-between gap-4">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <Badge>{items.length}</Badge>
            <div className="w-full flex items-center justify-around gap-x-4">
              <pre>{description}</pre>
            </div>
          </div>
        </Card>
      </a>
    </div>
  );
}

export default Wishlist;

Wishlist.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};
