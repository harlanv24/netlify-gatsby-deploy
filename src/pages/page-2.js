import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Is GWA the right app for you?</h1>
    <p>First, think about your answers to the following questions:</p>
    <p>Do you work multiple jobs between different companies like Uber, Lyft, Amazon Flex, and more</p>
    <p>Do you want to be compensated as much as possible for your time?</p>
    <p>Do you struggle with planning your average workday between so many jobs?</p>
    <p>Would you be interested in receiving benefits for your work at your jobs?</p>
    <p>Do you find it difficult to aggregate information between your jobs in order to file taxes?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
