import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { HeaderWrapper } from "./styles/Header";
import Logo from "./logo";

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<Link to="/">
			<div style={{ width: "3.5rem" }}>
				<Logo />
			</div>
		</Link>
	</HeaderWrapper>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
