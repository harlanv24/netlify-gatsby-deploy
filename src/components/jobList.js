import Checkbox from "../components/Checkbox"
import TextField from "../components/TextField"
import React from "react"

class JobList extends React.Component {

handleSubmit = event => {
  event.preventDefault()
  alert('Thank you! Your response has been submitted.')
}
    render() {
    return (
      <form name="joblist" method="POST" data-netlify="true">
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
     )
     }
}

export default JobList;


