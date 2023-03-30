import React from 'react';

function Hero() {
	return (
		<div className="w-full h-[338px] md:h-[500px] lg:h-[750px] xl:h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
			<div className="flex items-center justify-center w-full h-full bg-black/60 ">
				<div className="container px-4 mx-auto ">
					<div className="w-3/4 mx-auto space-y-2 text-center text-white md:space-y-4">
						<h1 className="font-second font-black text-[1rem] md:text-[36px]">
							Mau Staycation Murah Tanpa Ribet?
						</h1>
						<h3 className=" text-[0.75rem] md:text-[18px] w-3/4 mx-auto">
							Kami bantu kamu mendapatkan tempat
							staycation paling pas sama impian kamu
						</h3>
					</div>

					<form action="#" className="flex w-full mt-8 md:mt-16">
						<div className="w-[65%] relative mx-auto">
							<input
								className="w-full h-16 px-4 pt-4 pb-16 border-none rounded-lg placeholder:text-text-placeholder md:pt-2 md:pb-2 focus:outline-none"
								type="text"
								name="seacrh"
								id="search"
								placeholder='Ketik "Yogyakarta"'
							/>

							<button
								className="absolute  md:w-fit px-4 py-2 font-bold rounded cursor-pointer max-md:bottom-2 max-md:left-2 right-2 md:top-3  bg-bg-btn text-text-btn text-[0.5rem] md:text-[1rem]"
								type="submit"
							>
								Cari Tempat
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Hero;
