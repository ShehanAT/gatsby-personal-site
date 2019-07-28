import React from "react"
import { Link } from "gatsby"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about";
import Header from "../components/header";

const IndexPage = () => (
  <Layout>
    <About />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
