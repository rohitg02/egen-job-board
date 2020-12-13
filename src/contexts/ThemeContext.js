import React from 'react';
import light from '../themes/light.js';

const ThemeContext = React.createContext(
  {
    ...light,
    toggleTheme: () => {}
  }
);
export default ThemeContext;
