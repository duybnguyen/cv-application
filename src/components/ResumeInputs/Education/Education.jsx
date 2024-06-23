import { useState } from "react";
import EducationInputs from "./EducationInputs/EducationInputs";
import './Education.scss';

const Education = () => {
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [educationList, setEducationList] = useState([]);
    const [currentEducation, setCurrentEducation] = useState(null);

    const toggleShow = () => {
        setShow(prev => !prev);
    };

    const toggleShowForm = () => {
        setShowForm(prev => !prev);
    };

    const saveEducationList = (obj) => {
        if (currentEducation) {
            setEducationList(prevEducationList => 
                prevEducationList.map(edu => 
                    edu.id === currentEducation.id ? obj : edu
                )
            );
            setCurrentEducation(null);
        } else {
            setEducationList(prevEducationList => [
                ...prevEducationList,
                obj
            ]);
        }
        toggleShowForm();
    };

    const deleteEducation = (id, e) => {
        e.stopPropagation()
        const filteredEdu = educationList.filter(edu => edu.id !== id);
        setEducationList(filteredEdu);
    };

    const editEducation = (edu) => {
        setCurrentEducation(edu);
        toggleShowForm();
    };

    return (
        <div className="show-container">
            <div 
                className="show-toggle"
                onClick={toggleShow}>
                <h2>Education</h2>
            </div>

            {show && (
                <>
                    {showForm ? (
                        <EducationInputs 
                            toggleShowForm={toggleShowForm}
                            saveEducationList={saveEducationList}
                            currentEducation={currentEducation}
                        />
                    ) : (
                        <>
                            {educationList.length > 0 && (
                                <div className="educations-container">
                                    {educationList.map(edu => (
                                        <div key={edu.id} className="education-container">
                                            <h3 onClick={() => editEducation(edu)}>{edu.schoolName}</h3>
                                            
                                            <button onClick={(e) => deleteEducation(edu.id, e)}>Delete</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button onClick={toggleShowForm}>+ Education</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Education;
