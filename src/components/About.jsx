import React from 'react';

import { benefit } from '../constant';

function About() {
	return (
		<div className="w-full pt-8 pb-8 bg-bg-benefit md:pt-16 md:pb-48">
			<div className="container px-4 mx-auto space-y-8 md:space-y-16">
				<div className="flex flex-col items-start w-full space-y-4 md:flex-row">
					<h2 className="text-text-heading w-full md:w-[40%] font-second font-black text-[1rem] md:text-[28px]">
						Kata mereka <br className="hidden md:block" /> ini
						keunggulan kami
					</h2>

					<p className="text-text-paragraph w-full md:w-1/2 text-[0.75rem] leading-6 md:text-[1rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					{benefit.map((data) => {
						return (
							<div
								key={data.title}
								className="p-4 space-y-4 bg-white md:p-6 rounded-xl"
							>
								<div className="p-2 bg-bg-benefit w-fit aspect-square rounded-xl">
									<img
										src={data.icon}
										alt=""
									/>
								</div>
								<div className="space-y-2">
									<h3 className="font-second text-text-subheading font-black text-[1rem] md:text-[20px]">
										{data.title}
									</h3>
									<p className="text-[12px] md:text-[14px] text-text-paragraph">
										{data.desc}
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

export default About;
