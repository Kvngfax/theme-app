import React, { createContext, useState, useContext } from 'react';

// 1. Create a ThemeContext object
export const ThemeContext = createContext();

// 2. Implement the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');  // By default, it's set to light theme

  // Toggle function to switch between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook to make it easier to access theme from any component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
