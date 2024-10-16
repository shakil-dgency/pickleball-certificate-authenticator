"use client"
import React from "react";
import Lottie from "lottie-react";
import check from "../../../public/IsverifiedOk/check.json"

function Hero() {
	return (
		<div className="w-full py-[100px] sm:py-[160px] bg-[url('/IsverifiedOk/verified_hero.png')] bg-no-repeat bg-cover ">
			<div className="g__mobile-container  max-w-[750px] mx-auto text-center ">
				<div className="flex justify-center mb-6">
					<Lottie loop={true} animationData={check} className="h-[150px] w-[150px]" />
				</div>
				<h1>Signature Verified</h1>
				<p className="text-[#b0b0b0] mt-2.5 text-base md:text-lg">
					Verify the authenticity of your autographed item. Simply enter the serial number provided by Pickleball Certified Authentic in the box below
					to confirm its legitimacy.
				</p>
			</div>
		</div>
	);
}

export default Hero;
