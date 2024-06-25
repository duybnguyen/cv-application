import { useState } from "react";
import ExperienceInputs from "./ExperienceInputs/ExperienceInputs";
import downArrow from '../../assets/down.png'
import experienceImg from '../../assets/experience.png'
import trashCanImg from '../../assets/trashCan.png'
import "./Experience.scss"

const Experience = ({ saveDisplayExperience, deleteDisplayExperience }) => {
    const [show, setShow] = useState(false);
    const [imgToggle, setImgToggle] = useState(true)
    const [showForm, setShowForm] = useState(false);
    const [experienceList, setExperienceList] = useState([]);
    const [currentExperience, setCurrentExperience] = useState(null);

    const toggleShow = () => {
        setShow(prev => !prev);
        setImgToggle(prev => !prev)
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
        deleteDisplayExperience(id)
    };

    const editExperience = (exp) => {
        setCurrentExperience(exp);
        toggleShowForm();
    };

    return (
        <div className="experience-show-container">
            <div 
                className="show-toggle"
                onClick={toggleShow}>
                <img src={experienceImg} alt="experience image" />
                <h2>Experience</h2>
                <img src={downArrow} alt="down arrow" className={imgToggle ? 'arrow unrotate' : 'arrow rotate'} />
            </div>

            {show && (
                <>
                    {showForm ? (
                        <ExperienceInputs 
                            setShowForm={setShowForm}
                            saveExperienceList={saveExperienceList}
                            currentExperience={currentExperience}
                            saveDisplayExperience={saveDisplayExperience}
                        />
                    ) : (
                        <>
                                <div className="experiences-container">
                                    {experienceList.map(exp => (
                                        <div key={exp.id} className="experience-container" onClick={() => editExperience(exp)}>
                                            <h3>{exp.companyName}</h3>
                                            <img src={trashCanImg} alt='delete experience' className="delete" onClick={(e) => deleteExperience(exp.id, e)}/>
                                        </div>
                                    ))}
                                    <button onClick={toggleShowForm} className="add-experience">+ Experience</button>
                                </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Experience;
