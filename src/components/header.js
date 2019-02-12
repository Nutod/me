import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { HeaderWrapper, LogoWrapper } from "./styles/Header";
import Logo from "./logo";

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<div />
		<LogoWrapper>
			<Link to="/">
				<div style={{ width: "3.5rem" }}>
					<Logo />
				</div>
			</Link>
		</LogoWrapper>
		<div />
	</HeaderWrapper>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
