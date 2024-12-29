import React from 'react';
import PropTypes from 'prop-types';
import Input from './base/Input';
import { Button } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { createNewWishlistAction } from '../actions';

export function WishlistForm() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createNewWishlistAction({
        name,
        description,
      })
    );
  };
  return (
    <div
      className="relative w-full flex flex-row justify-center items-center"
      style={{ width: '100%' }}
    >
      <form className="w-full md:w-2/3 sm:w-full" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          helperText="Wishlist Name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full"
          required
        />
        <Input
          type="text"
          name="description"
          helperText="Description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Create
        </Button>
      </form>
    </div>
  );
}
WishlistForm.Header = ({ name, displayName }) => {
  return <div>{displayName || name}</div>;
};

export default WishlistForm;

WishlistForm.prototypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
