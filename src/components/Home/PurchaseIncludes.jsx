import Image from "next/image";
import React from "react";
import eye from "../../../public/home/eye.svg";

function PurchaseIncludes() {
	return (
		<div className="g__container pt-[80px] md:pt-[120px] pb-[50px] md:pb-[70px]">
			<h2 className="text-[#212222] max-w-[660px] mx-auto text-center">Purchase of a Pickleball Certified Authentic Includes</h2>
			<div className="mt-[40px] flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-5 max-w-[1000px] mx-auto">
				<div className="text-center flex flex-col items-center max-w-[260px]">
					<Image src={eye} height={45} width={60} className="" alt="" />
					<p className="font-barlow py-2.5 font-[600] text-[20px]">Witnessing</p>
                    <p className="">Pickleball Certified Authentic works directly with the athletes to obtain the item and/or autographs.</p>
				</div>
				<div className="text-center flex flex-col items-center max-w-[260px]">
					<Image src={eye} height={45} width={60} className="" alt="" />
					<p className="font-barlow py-2.5 font-[600] text-[20px]">Authenticity</p>
                    <p className="">Pickleball Certified Authentic affixes a tamper evident security hologram to protect the value of the certified item.</p>
				</div>
				<div className="text-center flex flex-col items-center max-w-[260px]">
					<Image src={eye} height={45} width={60} className="" alt="" />
					<p className="font-barlow py-2.5 font-[600] text-[20px]">Security</p>
                    <p className="">Verify the authenticity of the item. Simply enter the serial number to confirm authenticity to make sure you have an authentic item.</p>
				</div>
			</div>
           
		</div>
	);
}

export default PurchaseIncludes;
