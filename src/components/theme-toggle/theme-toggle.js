import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label htmlFor="themeToggle">
          <input
            id="themeToggle"
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          {' '}
          Dark mode
        </label>
      )}
    </ThemeToggler>
  );
}

export default ThemeToggle;
