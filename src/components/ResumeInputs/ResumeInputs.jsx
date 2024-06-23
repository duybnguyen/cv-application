
import PersonalDetails from "./PersonalDetails/PersonalDetails"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"
const ResumeInputs = () => {
    return (
        <div className="resume-inputs-container">
            <PersonalDetails />
            <Education />
            <Experience />
        </div>
    )
}

export default ResumeInputs
