import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Title from 'components/Title';

test('Title', () => {
  const { container } = render(<Title>Title</Title>);

  expect(container).toMatchSnapshot();
  expect(screen.queryByText('Title')).toBeInTheDocument();
});
