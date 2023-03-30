import React from 'react';
import { image1S1, image2S1, image3S1 } from '../assets/images';

function Section1() {
	return (
		<div className="container flex flex-col items-center justify-between px-4 py-8 mx-auto space-y-8 md:py-16 md:flex-row">
			<div className="grid grid-flow-col grid-rows-2 gap-3 w-full md:w-[45%]">
				<img className="h-full row-span-2" src={image1S1} alt="" />
				<img src={image2S1} alt="" />
				<img src={image3S1} alt="" />
			</div>

			<div className="w-full md:w-[45%] space-y-8">
				<div className="text-text-heading font-second font-black text-[1rem] md:text-[28px]">
					<h2>Kami sudah membantu 1.000++ orang staycation.</h2>
					<h2>Kamu mau nyoba?</h2>
				</div>

				<p className="text-text-paragraph text-[0.75rem] leading-8 md:text-[1rem]">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s,
				</p>
			</div>
		</div>
	);
}

export default Section1;
