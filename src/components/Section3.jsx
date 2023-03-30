import React from 'react';

import { checked, uncheck } from '../assets/icons';

function Section3() {
	return (
		<div className="relative hidden w-full bg-white-bg md:block">
			<div className="container px-4 py-8 mx-auto bg-white border shadow rounded-xl md:-translate-y-32 md:py-16">
				<table className="w-[80%] mx-auto ">
					<tr className="font-second text-[20px]font-black text-text-subheading">
						<th></th>
						<th className="pb-4">Sama kami</th>
						<th className="pb-4">Sama yang lain</th>
					</tr>
					<tr className="border-b text-text-paragraph">
						<td className="py-4">Gratis Biaya Konsultasi</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={checked} alt="" />
							</div>
						</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={uncheck} alt="" />
							</div>
						</td>
					</tr>
					<tr className="border-b text-text-paragraph">
						<td className="py-4">Refund Kapanpun</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={checked} alt="" />
							</div>
						</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={uncheck} alt="" />
							</div>
						</td>
					</tr>
					<tr className="border-b text-text-paragraph">
						<td className="py-4">Biaya Pengantaran</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={checked} alt="" />
							</div>
						</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={uncheck} alt="" />
							</div>
						</td>
					</tr>
					<tr className="text-text-paragraph">
						<td className="py-4">Gratis Local Guide</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={checked} alt="" />
							</div>
						</td>
						<td>
							<div className="flex items-center justify-center w-full">
								<img src={uncheck} alt="" />
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Section3;
