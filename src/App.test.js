import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

beforeEach(() => {
  render(<App />)
})

describe('Test App', () => {
  test('should show app', () => {
    const h1Elem = screen.getByAltText('test');

    expect(h1Elem, 'test')
  })
})
