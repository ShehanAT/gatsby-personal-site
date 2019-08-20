import React from "react"
import Layout from "../components/layout"
import About from "../components/about";
import Header from "../components/header";
import Work from "../components/work";
import Navbar from "../components/navbar";
import {Helmet} from "react-helmet";
import Testimonials from "../components/testimonials";
const IndexPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Shehan Atuk</title>
    </Helmet>
    <Header />
    <Navbar />
    <About />
    <Work />
    <Testimonials />
  </Layout>
)

export default IndexPage
