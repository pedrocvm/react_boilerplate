import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

const props = {};

describe('<Home />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Home {...props} />);
  });
});
