import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../pages/about'

test('renders About page', () => {
  const { getByText } = render(<About />);
  const headingElement = getByText(/About Page/i);
  const paragraphElement = getByText(/This is the About page./i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
