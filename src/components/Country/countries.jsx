import React from 'react'
import './countries.css';

const Countries = (props) => {
	return (
		<li className='countries__item'>
			<img width={264} height={160} src={props.country} alt='germany flag' />
			<div className='countries__body'>
				<h3 className='countries__subheader'>{props.name}</h3>
				<p className='countries__population'>Population: {props.population}</p>
				<p className='countries__region'>Region: {props.region}</p>
				<p className='countries__capital'>Capital: {props.capital}</p>
			</div>
		</li>
	);
};

export { Countries };
