"use client"
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";

function Navbar() {
	const handleReload = () => {
		window.location.reload()
	};

	return (
		<div className="text-red-400 text-xl py-3 bg-[#232323]">
			<div className="g__container">
				<Image src={logo} height={45} width={200} className="cursor-pointer" onClick={handleReload} alt="" />
			</div>
		</div>
	);
}

export default Navbar;
