import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders Some link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go Qbits/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  // wwReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  // wwReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});