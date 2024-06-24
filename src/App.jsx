import { useState } from "react";
import ResumeInputs from "./components/ResumeInputs/ResumeInputs";
import DisplayResume from "./components/DisplayResume/DisplayResume";

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

  return (
    <div className="app-container">
      <ResumeInputs
        saveDisplayPersonal={saveDisplayPersonal}
        saveDisplayEducation={saveDisplayEducation}
        saveDisplayExperience={saveDisplayExperience}
      />
      <DisplayResume
        personalDetails={personalDetailsInfo}
        education={educationInfo}
        experience={experienceInfo}
      />
    </div>
  );
};

export default App;
