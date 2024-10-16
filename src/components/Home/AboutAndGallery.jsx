import Image from "next/image";
import React from "react";
import gallery1 from "../../../public/home/gallery1.png";
import product from "../../../public/home/gallery1.png";

function AboutAndGallery() {
	return (
		<div className="   relative ">
			<div className="absolute inset-0 bg-[url('/home/aboutBG.png')] bg-no-repeat bg-cover opacity-60"></div>
			<div className="g__container flex flex-col md:flex-row items-center gap-6 sm:gap-10 pt-16">
				<div className="flex-1">
					<h2>About Us</h2>
					<p className="pt-[25px] pb-[20px]">
						At Pickleball Certified Authentic, we are passionate about preserving the integrity of pickleball memorabilia. Founded by dedicated
						pickleball enthusiasts and experts, we understand the value that genuine pickleball memorabilia holds for players, collectors and fans
						alike.
					</p>
					<p className=" pb-[20px]">
						Our mission is to provide a reliable and trustworthy service for verifying the authenticity of pickleball memorabilia. We work directly
						with the athletes to obtain the pickleball memorabilia and certify the items immediately.
					</p>
					<p className=" pb-[20px]">
						We believe in fostering a community of trust and transparency within the pickleball world. Each certified item receives a unique serial
						number, allowing collectors to easily verify authenticity online. Our commitment to excellence means that you cann showcase or sell your
						pickleball memorabilia with confidence, knowing that it has been thoroughly vetted by our team.
					</p>
					<p className=" pb-[20px]">
						When you obtain a pickleball memorabilia item that has a Pickleball Certified Authentic tamper evident security hologram, you know your
						investment is protected and authentic.
					</p>
				</div>
				<div className="flex-1 max-w-[500px]">
					<Image src={product} height={600} width={500} className=" h-[600px] w-auto object-cover" alt="" />
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-10 py-[120px] ">
				<Image src={gallery1} height={300} width={460} className="w-full h-full object-cover" alt="" />
				<Image src={gallery1} height={600} width={500} className="w-full" alt="" />
				<Image src={gallery1} height={600} width={500} className="w-full" alt="" />
				<Image src={gallery1} height={600} width={500} className="w-full" alt="" />
				<Image src={gallery1} height={600} width={500} className="w-full" alt="" />
				<Image src={gallery1} height={600} width={500} className="w-full" alt="" />
			</div>
			<div className="h-[60px] w-full bg-gradient-to-b from-white to-transparent absolute -top-0"></div>
		</div>
	);
}

export default AboutAndGallery;
