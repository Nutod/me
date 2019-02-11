import React from "react";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export default function Date() {
	return (
		<>
			{months[new Date().getMonth()]}, {new Date().getFullYear()}
			<p>Oladotun Aluko</p>
		</>
	);
}
