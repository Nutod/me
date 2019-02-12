import React from "react";
import { HeadingThree, HeroHeader } from "../../styled-assets/Headers";
import { HeroWrapper, HeroBackground } from "../../styled-assets/Wrapper";
import { Button } from "../../styled-assets/Button";
import "./Hero.css";
import Resume from "../../assets/Résume.pdf";

export default function Hero() {
	return (
		<HeroWrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Oladotun Aluko</HeroHeader>
				<p style={{ marginTop: "2.7rem" }}>
					<Button href={Resume} download="Oladotun Aluko Résume">
						Download Resume
					</Button>
				</p>
			</div>
			<HeroBackground />
		</HeroWrapper>
	);
}
