import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from './theme-toggle';

const setup = () => {
  const utils = render(<ThemeToggle />);
  const toggle = utils.getByLabelText('Dark mode');
  // by default, document is light
  utils.container.classList.add('light');
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

  it('toggles document.body class', async () => {
    const { toggle, container } = setup();
    // mock function called by gatsby-plugin-dark-theme
    // eslint-disable-next-line no-underscore-dangle
    global.__setPreferredTheme = jest.fn(() => {
      container.classList.toggle('light');
      container.classList.toggle('dark');
    });

    fireEvent.click(toggle);
    expect(container).toHaveClass('dark');
    expect(container).not.toHaveClass('light');

    // check second click changes class to "light"
    fireEvent.click(toggle);
    expect(container).toHaveClass('light');
    expect(container).not.toHaveClass('dark');
  });
});
