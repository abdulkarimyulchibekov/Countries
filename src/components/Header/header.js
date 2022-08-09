import './header.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';

const Header = () => {
	const {theme, setTheme} = useContext(ThemeContext);
	return (
		<header className={`header ${theme}`}>
			<div className='container'>
				<div className='header__inner'>
					<p className={`header__text ${theme}`}>Where in the world?</p>
					<select defaultValue={theme} onChange={(evt) => setTheme(evt.target.value)} className={`header__box ${theme}`}>
						<option className='header__desc'>Dark</option>
						<option className='header__desc'>Light</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export { Header };
