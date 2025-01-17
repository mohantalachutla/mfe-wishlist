import { Provider } from 'react-redux';
import store from '../../store';
import { GlobalLoader } from './GlobalLoader';
import ErrorBoundary from './ErrorBoundary';
import GlobalModal from './GlobalModal';
import GlobalAlert from './GlobalAlert';
import Noop from './Noop';

const AppWrapper = ({ children, AdditionalWrapper = Noop }) => {
  return (
    <div id="app-wrapper">
      <ErrorBoundary>
        <Provider store={store}>
          <GlobalLoader />
          <GlobalModal />
          <GlobalAlert />
          <AdditionalWrapper>{children}</AdditionalWrapper>
        </Provider>
      </ErrorBoundary>
    </div>
  );
};

export default AppWrapper;

export const withAppWrapper = (Component, AdditionalWrapper) => (props) => (
  <AppWrapper AdditionalWrapper={AdditionalWrapper}>
    <Component {...props} />
  </AppWrapper>
);
