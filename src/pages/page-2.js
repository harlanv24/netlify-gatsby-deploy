import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReactDOM from 'react-dom';




const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
