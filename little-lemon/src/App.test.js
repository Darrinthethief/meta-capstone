import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon Hompage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});
