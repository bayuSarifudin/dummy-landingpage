import React, { useState } from 'react';
import { burgerMenu, close } from '../assets/icons';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const toggle = () => {
		setSidebar(!sidebar);
	};

	return (
		<div className="fixed top-0 z-50 w-full bg-white-bg">
			<div className="bg-white-bg container mx-auto px-4 py-[18px] text-text-subheading  w-full flex items-center justify-between">
				<h1 className="font-black text-[12px] font-second">
					STAYCATIONMURAH
				</h1>

				<div className="flex-row text-[14px] items-center hidden gap-8 font-sans md:flex">
					<ul className="flex flex-row items-center gap-8">
						<li className="cursor-pointer">Tentang Kami</li>
						<li className="cursor-pointer">Benefit</li>
						<li className="cursor-pointer">Testimonial</li>
					</ul>

					<button className="px-4 py-2 font-bold rounded cursor-pointer bg-bg-btn text-text-btn">
						Daftar
					</button>
				</div>

				<div className="block cursor-pointer md:hidden">
					<img onClick={toggle} src={burgerMenu} alt="burger menu" />
				</div>
			</div>

			{/* sidebar */}
			<div
				className={`${
					sidebar ? 'right-0' : 'right-[-100%]'
				} absolute flex flex-col items-center bg-white z-50 gap-8 p-8 font-sans rounded top-10 w-fit`}
			>
				<ul className="flex flex-col items-center gap-8">
					<li onClick={toggle} className="cursor-pointer">
						Tentang Kami
					</li>
					<li onClick={toggle} className="cursor-pointer">
						Benefit
					</li>
					<li onClick={toggle} className="cursor-pointer">
						Testimonial
					</li>
				</ul>

				<button className="px-4 py-2 font-bold rounded cursor-pointer bg-bg-btn text-text-btn">
					Daftar
				</button>
			</div>
		</div>
	);
}

export default Navbar;
