import { useState } from "react";
import DisplayResume from "./components/DisplayResume/DisplayResume";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import './App.scss'
const App = () => {
  const [personalDetailsInfo, setPersonalDetailsInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const saveDisplayPersonal = (obj) => setPersonalDetailsInfo(obj);

  const saveDisplayEducation = (obj) => {
    setEducationInfo((prevEducationInfo) => {
      const existingEdu = prevEducationInfo.find((edu) => edu.id === obj.id);
      if (existingEdu) {
        return prevEducationInfo.map((edu) =>
          edu.id === obj.id ? obj : edu
        );
      } else {
        return [...prevEducationInfo, obj];
      }
    });
  };

  const saveDisplayExperience = (obj) => {
    setExperienceInfo((prevExperienceInfo) => {
      const existingExp = prevExperienceInfo.find((exp) => exp.id === obj.id);
      if (existingExp) {
        return prevExperienceInfo.map((exp) =>
          exp.id === obj.id ? obj : exp
        );
      } else {
        return [...prevExperienceInfo, obj];
      }
    });
  };

  const deleteDisplayEducation = id => {
    const filteredEducation = educationInfo.filter(edu => edu.id !== id)
    setEducationInfo(filteredEducation)
  }

 const deleteDisplayExperience = id => {
    const filteredExperience = experienceInfo.filter(exp => exp.id !== id)
    setExperienceInfo(filteredExperience)
    
  }

  return (
    <div className="app-container">
      <div className="resume-inputs-container">
        <PersonalDetails saveDisplayPersonal={saveDisplayPersonal} />
        <Education 
          saveDisplayEducation={saveDisplayEducation}
          deleteDisplayEducation={deleteDisplayEducation} />
        <Experience 
          saveDisplayExperience={saveDisplayExperience}
          deleteDisplayExperience={deleteDisplayExperience} />
      </div>
      <div className="display-resume-container">
        <DisplayResume
          personalDetails={personalDetailsInfo}
          education={educationInfo}
          experience={experienceInfo}
        />

      </div>
    </div>
  );
};

export default App;
