import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom' // toBeInTheDocument 메소드를 쓰기 위해
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText('hello world');
  expect(element).toBeInTheDocument();
});
