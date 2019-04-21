import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JobList from "../components/joblist"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Please check all of the companies that you work for:</p>
    <div>
  <JobList/>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
