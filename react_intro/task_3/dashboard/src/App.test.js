import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  render(<App />);
  const appHeader = screen.getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  render(<App />);
  const appBody = screen.getByTestId('app-body');
  expect(appBody).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  render(<App />);
  const appFooter = screen.getByTestId('app-footer');
  expect(appFooter).toBeInTheDocument();
});
