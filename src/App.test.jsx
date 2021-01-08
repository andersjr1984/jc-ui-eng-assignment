import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import store from './app/store';
import App from './App';
import theme from './app/theme';

// would typically mock axios so tests won't have errors when ran without server.

const renderContainer = () =>
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );

test('renders learn react link', () => {
  const { getByText } = renderContainer();

  expect(getByText(/Jump Cloud/i)).toBeInTheDocument();
});
