import React from "react"
import { Link } from "gatsby"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about";
import Header from "../components/header";
import Project from "../components/project";
const IndexPage = () => (
  <Layout>
    <About />
    <Project />
  </Layout>
)

export default IndexPage
