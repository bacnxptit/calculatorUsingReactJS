import { render, screen } from '@testing-library/react';
//import App from './App';
import TodoApp  from './todoApp';

test('renders learn react link', () => {
  render(<TodoApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
