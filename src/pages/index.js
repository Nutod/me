import React from "react";
import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/tmp/Hero/Hero";
import Experience from "../components/tmp/Experience/Experience";
import SideProjects from "../components/tmp/SideProjects/SideProjects";
import Footer from "../components/tmp/Footer/Footer";

// TODO: Complete the SEO Component prop fllling
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
    <Hero />
  </Layout>
);

export default IndexPage;
