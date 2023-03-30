import React from 'react';
import { Navbar, Hero, Section1, About, Section3, Section4, Section5 } from './components';
import Footer from './components/footer';

function App() {
	return (
		<div className="relative flex flex-col w-full">
			<Navbar />

			{/* main content */}
			<div className="w-full pt-16 mx-auto bg-white-bg">
				<Hero />
				<Section1 />
				<About />
				<Section3 />
				<Section4 />
				<Section5 />
			</div>
			<Footer />
		</div>
	);
}

export default App;
