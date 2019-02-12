import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { HeaderWrapper } from "./styles/Header";

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
				color: "crimson"
			}}
		>
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`
				}}
			/>
			{siteTitle}
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
