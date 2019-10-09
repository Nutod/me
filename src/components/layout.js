import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../lib/colors";
import Header from "./header";
import "./layout.css";
// import { months } from "../lib/months";

const Layout = ({ children }) => (
 <StaticQuery
  query={graphql`
   query SiteTitleQuery {
    site {
     siteMetadata {
      title
     }
    }
   }
  `}
  render={data => (
   <ThemeProvider theme={theme}>
    <>
     <Header siteTitle={data.site.siteMetadata.title} />

     <main>{children}</main>
    </>
   </ThemeProvider>
  )}
 />
);

Layout.propTypes = {
 children: PropTypes.node.isRequired
};

export default Layout;
