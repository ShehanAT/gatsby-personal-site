import React from "react"
import Layout from "../components/layout"
import About from "../components/about";
import Header from "../components/header";
import Project from "../components/project";
import Navbar from "../components/navbar";
import {Helmet} from "react-helmet";
const IndexPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Shehan Atuk</title>
    </Helmet>
    <Header />
    <Navbar />
    <About />
    <Project />
  </Layout>
)

export default IndexPage
