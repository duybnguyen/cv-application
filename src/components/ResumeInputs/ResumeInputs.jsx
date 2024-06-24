
import PersonalDetails from "./PersonalDetails/PersonalDetails"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"
const ResumeInputs = ({saveDisplayPersonal, saveDisplayEducation, saveDisplayExperience}) => {
    return (
        <div className="resume-inputs-container">
            <PersonalDetails saveDisplayPersonal={saveDisplayPersonal}/>
            <Education saveDisplayEducation={saveDisplayEducation}/>
            <Experience saveDisplayExperience={saveDisplayExperience}/>
        </div>
    )
}

export default ResumeInputs
