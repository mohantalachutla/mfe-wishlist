import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_TYPES } from '../../constants';
import { hideModal, modalName } from '../../reducers/modal';
import Modal from '../base/Modal';
import WishlistForm from '../WishlistForm';

const GlobalModal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state[modalName] ?? {});
  const {
    display = false,
    dismissible = true,
    type = MODAL_TYPES.DEFAULT,
    data,
  } = modal;

  const Component = getModalByType(type);
  return (
    <Modal
      id={modalName}
      dismissible={dismissible}
      show={display}
      onClose={() => dispatch(hideModal())}
      size="md"
    >
      <Render Component={Component} data={data} />
    </Modal>
  );
};

const getModalByType = (type) => {
  switch (type) {
    //add more modals
    case MODAL_TYPES.NEW_WISHLIST:
      return WishlistForm;
    //default
    case MODAL_TYPES.DEFAULT:
    default:
      return DefaultComponent;
  }
};

const Render = ({ Component, data }) => {
  if (_.isString(data)) {
    return (
      <Modal.Body>
        <Component> {data} </Component>
      </Modal.Body>
    );
  }
  if (_.isObject(data)) {
    return (
      <React.Fragment>
        {Component?.Header && (
          <Modal.Header>
            <Component.Header {...data} />
          </Modal.Header>
        )}
        {Component && (
          <Modal.Body>
            <Component {...data} />
          </Modal.Body>
        )}
        {Component?.Footer && (
          <Modal.Footer>
            <Component.Footer {...data} />
          </Modal.Footer>
        )}
      </React.Fragment>
    );
  }
  console.error('GlobalModal: Invalid modal data');
  return null;
};

const DefaultComponent = ({ children, ...props }) => {
  return <pre {...props}>{children}</pre>;
};

export default GlobalModal;
