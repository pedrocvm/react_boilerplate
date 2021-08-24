import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Main />);
  });
});
