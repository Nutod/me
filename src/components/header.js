import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
// import { HeaderWrapper, LogoWrapper } from "./styles/Header";
// import Logo from "./logo";

const Header = ({ siteTitle }) => (
	<HeaderWrapper>

	</HeaderWrapper>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
