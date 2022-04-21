import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button to have style red', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue'})
  expect(button).toHaveStyle({backgroundColor: 'red'})
});

test('button to have style blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
});

test('button to have text red when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(button);
  expect(button).toHaveTextContent('Change to red')
});

test('button to be enabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toBeEnabled()
});

test('checkbox to be unchecked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  expect(checkbox).not.toBeChecked()
});


test('button should be disabled when clicked on checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toBeEnabled()
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
});


test('button should have style gray when clicked on checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
});