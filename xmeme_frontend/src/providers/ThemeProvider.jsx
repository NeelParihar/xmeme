import React, { createContext,useState } from 'react';
import useDarkMode from 'hooks/useDarkMode';

export const ThemeContext = createContext('light');

export default ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [reload, setReload] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        reload,
        setReload
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
