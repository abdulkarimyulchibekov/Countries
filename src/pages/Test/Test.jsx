import { useContext, useEffect, useState } from 'react';
import { Countries } from '../../components/Country/countries';
import { ThemeContext } from '../../Context/ThemeContext';

export function Test() {
	const [countries, setCountries] = useState([]);
	const [value, setValue] = useState('');
	const [select, setSelect] = useState('');
	const {theme} = useContext(ThemeContext);
	useEffect(() => {
		if (select.length) {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		} else if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		} else {
			fetch('https://restcountries.com/v3.1/all')
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		}
	}, [value, select]);

	return (
		<>
			<main>
				<section className='site-hero'>
					<div className='container'>
						<div className='hero__inner'>
							<input
								name='contry__search'
								type='text'
								placeholder='Search for a country…'
								className={`hero__input ${theme}`}
								onKeyUp={(evt) => {
									if (evt.code === 'Enter') {
										setValue(evt.target.value);
									}
								}}
							/>
							<select
							className={`select ${theme}`}
								onChange={(evt) => {
									setSelect(evt.target.value);
								}}
								defaultValue={'0'}
								name='regions'>
								<option disabled value='0'>
									Filter by Region
								</option>
								<option value={'Africa'}>Africa</option>
								<option value={'America'}>America</option>
								<option value={'Asia'}>Asia</option>
								<option value={'Europe'}>Europe</option>
								<option value={'Oceania'}>Oceania</option>
							</select>
						</div>
					</div>
				</section>
				<section className='site-countries'>
					<div className='container'>
						<div className='countries__inner'>
							<ul className='countries__list'>
								{countries.length &&
									countries.map((e) => (
										<Countries
											key={e.name.official}
											name={e.name.common}
											population={e.population}
											region={e.continents}
											capital={e.capital}
											country={e.flags.png}
										/>
									))}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
