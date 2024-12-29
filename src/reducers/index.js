import helloReducer from './hello';
import loaderReducer from './loader';
import modalReducer from './modal';
import authReducer from './auth';
import wishlistReducer from './wishlist';
import { withProjectName } from '../utils/config';

export default {
  hello: helloReducer,
  [withProjectName('loader')]: loaderReducer,
  [withProjectName('modal')]: modalReducer,
  auth: authReducer,
  wishlist: wishlistReducer,
};
