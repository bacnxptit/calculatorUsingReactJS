import { render, screen } from '@testing-library/react';
//import App from './App';
import todoApp  from './todoApp';

test('renders learn react link', () => {
  render(<todoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
