import React from 'react';
import { render } from '@testing-library/react';
import ThemeToggle from './theme-toggle';

const setup = () => {
  const utils = render(<ThemeToggle />);
  const toggle = utils.getByLabelText('Dark mode');
  return {
    toggle,
    ...utils,
  };
};

describe('ThemeToggle', () => {
  it('renders an input', async () => {
    const { toggle } = setup();
    expect(toggle).not.toBeNull();
  });
});
