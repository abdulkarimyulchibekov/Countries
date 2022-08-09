import { useEffect } from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const localData = localStorage.getItem('theme');
	const [theme, setTheme] = useState(localData || 'light');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
