import React from 'react';

import { destinasi } from '../constant';

function Section4() {
	return (
		<div className="w-full pt-8 pb-8 bg-white-bg md:pt-0 md:pb-16">
			<div className="container px-4 mx-auto space-y-8 md:space-y-16">
				<div className="flex flex-col items-start w-full space-y-4 md:flex-row">
					<h2 className="text-text-heading w-full md:w-[40%] font-second font-black text-[1rem] md:text-[28px]">
						Kota paling populer{' '}
						<br className="hidden md:block" /> Kota paling
						dicari
					</h2>

					<p className="text-text-paragraph w-full md:w-1/2 text-[0.75rem] leading-6 md:text-[1rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{destinasi.map((dest) => {
						return (
							<div
								key={dest.title}
								className={`bg-black/60 relative flex items-center justify-center w-full aspect-square`}
							>
								<img
									src={dest.image}
									className="object-cover w-full"
									alt=""
								/>
								<div className="absolute text-center text-white bottom-4">
									<h3 className="font-second text-[1rem] md:text-[20px] font-black">
										{dest.title}
									</h3>
									<p className="text-[14px] md:text-[16px]">
										{dest.jumlah}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Section4;
