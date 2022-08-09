import { Header } from './components/Header/header';
import React, { useContext, useEffect, useState } from 'react';
import './components/Hero/hero.css';
import SinglePage from './pages/SinglePage/SinglePage';
import { Routes, Route } from 'react-router-dom';
import { Test } from './pages/Test/Test';
import { ThemeContext } from './Context/ThemeContext';

function App() {
	const {theme} = useContext(ThemeContext)
	return (
		<div className={`Theme ${theme}`}>
			<Header />
			<Routes>
				<Route path='/' element={<Test />} />
				<Route path='/Singlepage/:id' element={<SinglePage />} />
			</Routes>
		</div>
	);
}

export default App;
