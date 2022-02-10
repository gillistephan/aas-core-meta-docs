import React from "react";

export default function DetermineHeader({ hLevel, hText }) {
	switch (hLevel) {
		case "##":
			return <h2>{hText}</h2>;
		case "###":
			return <h3>{hText}</h3>;
		case "####":
			return <h4>{hText}</h4>;
		case "#####":
			return <h4>{hText}</h4>;
		default:
			return null;
	}
}
