import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from 'pages';

test('Home', () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
  expect(screen.queryByText('Hello')).toBeInTheDocument();
});
