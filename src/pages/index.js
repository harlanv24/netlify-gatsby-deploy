import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to the Gig Worker Aggregator</h1>
    <p>Introducing a tool to improve your experience as a gig worker</p>
    <p>Gig Worker Aggregator will help you organize a busy schedule,</p>
    <p>allowing you to focus on the things that are important</p>
    <p>rather than making you deal with different apps, payrates, and other headaches</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Click here to find out if GWA is right for you</Link>
    <p></p>
    <Link to="/about/">Click here to visit our about page</Link>
  </Layout>
)

export default IndexPage
