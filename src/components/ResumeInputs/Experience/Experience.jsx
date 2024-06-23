import { useState } from "react";
import ExperienceInputs from "./ExperienceInputs/ExperienceInputs";
import "./Experience.scss"

const Experience = () => {
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [experienceList, setExperienceList] = useState([]);
    const [currentExperience, setCurrentExperience] = useState(null);

    const toggleShow = () => {
        setShow(prev => !prev);
    };

    const toggleShowForm = () => {
        setShowForm(prev => !prev);
    };

    const saveExperienceList = (obj) => {
        if (currentExperience) {
            setExperienceList(prevExperienceList => 
                prevExperienceList.map(exp => 
                    exp.id === currentExperience.id ? obj : exp
                )
            );
            setCurrentExperience(null);
        } else {
            setExperienceList(prevExperienceList => [
                ...prevExperienceList,
                obj
            ]);
        }
        toggleShowForm();
    };

    const deleteExperience = (id, e) => {
        e.stopPropagation()
        const filteredExp = experienceList.filter(edu => edu.id !== id);
        setExperienceList(filteredExp);
    };

    const editExperience = (exp) => {
        setCurrentExperience(exp);
        toggleShowForm();
    };

    return (
        <div className="show-container">
            <div 
                className="show-toggle"
                onClick={toggleShow}>
                <h2>Experience</h2>
            </div>

            {show && (
                <>
                    {showForm ? (
                        <ExperienceInputs 
                            toggleShowForm={toggleShowForm}
                            saveExperienceList={saveExperienceList}
                            currentExperience={currentExperience}
                        />
                    ) : (
                        <>
                            {experienceList.length > 0 && (
                                <div className="experiences-container">
                                    {experienceList.map(exp => (
                                        <div key={exp.id} className="experience-container">
                                            <h3 onClick={() => editExperience(exp)}>{exp.companyName}</h3>
                                            
                                            <button onClick={(e) => deleteExperience(exp.id, e)}>Delete</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button onClick={toggleShowForm}>+ Experience</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Experience;
