import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';

test('button to have style MediumVioletRed', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue'})
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})
});

test('button to have style MidnightBlue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
});

test('button to have text MediumVioletRed when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  fireEvent.click(button);
  expect(button).toHaveTextContent('Change to Medium Violet Red')
});

test('button to be enabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
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
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toBeEnabled()
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
});


test('button should have style gray when clicked on checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'Gray' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
  fireEvent.click(button) 
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
});



describe('Test replaceCamelCaseWithSpaces',()=>{
  test('works with no inner capital letters',()=>{
    expect(replaceCamelCaseWithSpaces('Gray')).toBe('Gray')
  })
  test('works with two capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works with no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})