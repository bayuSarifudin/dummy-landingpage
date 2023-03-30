import React, { useState } from 'react';

import { faq } from '../constant';

import { arrow } from '../assets/icons';

function Section5() {
	const [dropdown, setDropdown] = useState('');

	return (
		<div className="container flex flex-col items-start justify-between px-4 py-8 mx-auto space-y-4 md:py-16 md:flex-row">
			<div className="space-y-4 md:space-y-8 w-full md:w-[45%]">
				<div className="text-text-heading font-second font-black text-[1rem] md:text-[28px]">
					<h2>Yang sering Netizen</h2>
					<h2>tanyai...</h2>
				</div>

				<div className="text-text-paragraph space-y-4 text-[0.75rem] leading-8 md:text-[1rem]">
					{faq.map((ask) => {
						return (
							<div
								key={ask.title}
								onClick={() =>
									setDropdown(ask.title)
								}
								className="w-full cursor-pointer"
							>
								<div className="flex flex-row items-center gap-4 font-black text-text-subheading">
									<span
										className={
											dropdown ==
											ask.title
												? 'rotate-90'
												: ''
										}
									>
										<img
											src={arrow}
											alt=""
										/>
									</span>

									<h3>{ask.title}</h3>
								</div>

								<div
									className={`${
										dropdown ==
										ask.title
											? 'block'
											: 'hidden'
									} pl-10`}
								>
									{ask.answer}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="w-full rounded-xl text-white px-12 pt-8 pb-12 bg-gradient-to-r from-red/80 to-text-heading md:w-[40%] space-y-8">
				<h3 className="font-black font-second text-[18px] md:text-[28px]">
					Gratis tiket liburan untuk 100 orang nih, kamu mau?
				</h3>

				<div className="space-y-4">
					<div className="flex flex-col gap-y-2">
						<label htmlFor="ktp" className="text-[14px]">
							Nama Asli sesuai KTP
						</label>
						<input
							className="p-4 text-black border-none rounded-lg outline-none placeholder:text-text-placeholder"
							type="text"
							name="ktp"
							id="ktp"
							placeholder='Misal "Dharma Rahardyan"'
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="hp" className="text-[14px]">
							No. Hp kamu
						</label>
						<input
							className="p-4 text-black border-none rounded-lg outline-none placeholder:text-text-placeholder"
							type="text"
							name="hp"
							id="hp"
							placeholder='Misal "081234567890"'
						/>
					</div>

					<button
						className="w-full py-4 font-black rounded bg-bg-btn text-text-btn"
						type="submit"
					>
						SAYA MAU TIKET GRATIS
					</button>
				</div>
			</div>
		</div>
	);
}

export default Section5;
