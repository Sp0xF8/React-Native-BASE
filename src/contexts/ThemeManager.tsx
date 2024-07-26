import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';



interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {}
})

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const device_theme = useColorScheme()


  const [theme, setTheme] = useState<'light' | 'dark'>(device_theme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme, ThemeContext };