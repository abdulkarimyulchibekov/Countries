import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Shape from '../../assets/images/Shape.svg';
import './singlepage.css';

function SinglePage() {
	const { id } = useParams();
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${id}`)
			.then((res) => res.json())
			.then((data) => setData(...data))
			.catch((err) => console.log(err));
	}, []);

	const navigate = useNavigate();
	console.log(data);
	return (
		<>
			<div className='container'>
				<div className='single-page'>
					<button onClick={() => navigate(-1)} className='single-page__button'>
						<img className='single-page__icon' src={Shape} alt='' />
						<span>Back</span>
					</button>
					<div className='single-page__body'>
						<img
							className='single-page__img'
							width={560}
							height={401}
							src={data.flags?.svg}
							alt=''
						/>
						<div className='single-page__main'>
							<div className='single-page__top'>
								<div className='single-page__right'>
									<h2 className='single-page__header'>{data?.name?.common}</h2>
									<p className='single-page__native'>
										<span>Native name</span>{' '}
										{
											data?.name?.nativeName[
												Object.keys(data.name.nativeName)[0]
											].official
										}
									</p>
									<p className='simgle-page__population'>
										<span>Population:</span> {data.population}
									</p>
									<p className='single-page__region'>
										<span>Region:</span> {data.region}
									</p>
									<p className='single-page__subregion'>
										<span>Sub region:</span> {data.subregion}
									</p>
									<p className='single-page__capital'>
										<span>Capital:</span> {data.capital}
									</p>
								</div>
								{/* <div className='single-page__left'>
									<p className="single-page__domain">
										Top Level Domain: {" "}
										{data.tld}
									</p>
									<p className="single-page__currency">
										Currencies: {" "}
										{data?.languages[Object.keys(data?.languages)].name}
									</p>
								</div> */}
							</div>
							<div className='single-page__bottom'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SinglePage;
