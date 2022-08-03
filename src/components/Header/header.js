import './header.css';
import moon from '../../assets/images/moon.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<p className='header__text'>Where in the world?</p>
					<div className='header__box'>
						<img className='header__img' src={moon} />
						<p className='header__desc'>Dark Mode</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
