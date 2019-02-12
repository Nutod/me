import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { HeaderWrapper } from "./styles/Header";
import Logo from "./logo";

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`
			}}
		>
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`
				}}
			>
				<div style={{ width: "3.5rem" }}>
					<Logo />
				</div>
			</Link>
		</div>
	</HeaderWrapper>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
