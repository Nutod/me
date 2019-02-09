import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO
			title="Home"
			keywords={[
				`react`,
				`product design`,
				`development`,
				`javascript`,
				`es6`,
				`esnext`
			]}
		/>
		<h1>Hi people</h1>
		<p>This site is under construction</p>
		<p>We're launching soon</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
	</Layout>
);

export default IndexPage;
