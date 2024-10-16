"use client"
import React from "react";
import Lottie from "lottie-react";
import alert from "../../../public/IsverifiedFaild/alert.json"

function HeroFailed() {
	return (
		<div className="w-full py-[100px] sm:py-[160px] bg-[url('/IsverifiedFaild/verification_failed.png')] bg-no-repeat bg-cover ">
			<div className="g__mobile-container max-w-[850px] mx-auto text-center ">
				<div className="flex justify-center mb-3 -mt-5">
					
					<Lottie loop={true} animationData={alert} className="h-[150px] w-[150px]" />
				</div>
				<h1>Signature verification failed</h1>
				<p className="text-[#b0b0b0] mt-2.5 text-base md:text-lg">Please make sure you have entered a valid serial number and try again.</p>
			</div>
		</div>
	);
}

export default HeroFailed;
