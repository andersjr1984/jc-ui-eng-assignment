import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const renderContainer = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

test('renders learn react link', () => {
  const { getByText } = renderContainer();

  expect(getByText(/learn/i)).toBeInTheDocument();
});
