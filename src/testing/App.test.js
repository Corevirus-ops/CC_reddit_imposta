import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../app/App';
import userSliceReducer from '../features/Auth/userSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      user: userSliceReducer,
    },
  });
};

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  test('renders TopBar component', () => {
    render(
      <Provider store={store}>

          <App />

      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument(); // TopBar has class PageHeader
  });

  test('renders Home component for root path', () => {
    render(
      <Provider store={store}>

          <App />

      </Provider>
    );
    expect(screen.getByTestId('home-component')).toBeInTheDocument(); // Assumes Home has data-testid="home-component"
  });

  test('renders CreatePost component for post path', () => {
    render(
      <Provider store={store}>

          <App />

      </Provider>
    );
    expect(screen.getByTestId('create-post-component')).toBeInTheDocument(); // Assumes CreatePost has data-testid="create-post-component"
  });
});