import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders gif and text', () => {
  render(<Home />);
  const gifElement = screen.getByAltText(/let him cook/i);
  const textElement = screen.getByText(/en proceso, no me estreses/i);
  expect(textElement).toBeInTheDocument();
  expect(gifElement).toBeInTheDocument();
});
