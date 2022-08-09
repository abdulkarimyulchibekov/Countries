import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './countries.css';
import { ThemeContext } from '../../Context/ThemeContext';

const Countries = (props) => {
	const {theme} = useContext(ThemeContext)
	return (
		<li className={`countries__item ${theme}`}>
			<img width={264} height={160} src={props.country} alt='germany flag' />
			<div className={`countries__body ${theme}`}>
				<h3 className='countries__subheader'>{props.name}</h3>
				<p className='countries__population'>Population: {props.population}</p>
				<p className='countries__region'>Region: {props.region}</p>
				<p className='countries__capital'>Capital: {props.capital}</p>
				<Link to={`/Singlepage/${props.name}`}>More</Link>
			</div>
		</li>
	);
};

export { Countries };
