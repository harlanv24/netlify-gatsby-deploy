import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkbox from "../components/Checkbox"
import TextField from "../components/TextField"

class SecondPage extends React.Component {

handleSubmit = event => {
  event.preventDefault()
  alert('Thank you! Your response has been submitted.')
}
    render() {
    return (
      <Layout>
        <SEO title="Page Two"/>
      <form onSubmit={this.handleSubmit}>
    <p>Please check all of the companies that you work for:</p>
    <div>
    <label>
      <Checkbox/>
      Uber
      </label>
     </div>
     <div>
    <label>
      <Checkbox/>
      Lyft
      </label>
     </div>
     <div>
    <label>
      <Checkbox/>
      Amazon Flex
      </label>
     </div>
     <div>
    <label>
      <Checkbox/>
      DoorDash
      </label>
     </div>
     <div>
    <label>
      <Checkbox/>
      GrubHub
      </label>
     </div>
     <div>
    <label>
      <Checkbox/>
      UberEats
      </label>
     </div>
     <div>
      <Checkbox/>     
      <TextField/>
     </div>
     <button type="submit">Submit</button>
     </form>
     </Layout>
     )
     }
}
<Link to="/">Go back to the homepage</Link>
export default SecondPage;


