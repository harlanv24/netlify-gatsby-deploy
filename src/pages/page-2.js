import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkbox from "../components/Checkbox"





const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Please check all of the companies that you work for:</p>
    <div>
    <label>
      <Checkbox/>
      Uber
      </label>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
