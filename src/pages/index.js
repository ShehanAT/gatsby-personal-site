import React from "react"
import Layout from "../components/layout"
import About from "../components/about";
import Header from "../components/header";
import Work from "../components/work";
import Navbar from "../components/navbar";
import {Helmet} from "react-helmet";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";
const IndexPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Shehan Atuk</title>
    </Helmet>
    <Header />
    <div className="text-content">
    <Navbar />
    <About />
    <Work />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  </Layout>
)

export default IndexPage
