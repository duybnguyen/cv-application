
import { useState } from "react"
import ResumeInputs from "./components/ResumeInputs/ResumeInputs"


const App = () => {
  const personalDetailsInfo = useState({})
  const educationInfo = useState([])
  const experienceInfo = useState([])
  return (
    <div className="app-container">
      <ResumeInputs />
    </div>
  )
}

export default App