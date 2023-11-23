import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        setDarkTheme(true);
    };

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        setDarkTheme(false);
    };

    const value = {
        darkTheme,
        setDarkMode,
        setLightMode,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };
export default ThemeProvider;
