import { useState } from "react";
import EducationInputs from "./EducationInputs/EducationInputs";
import downArrow from '../../assets/down.png'
import educationImg from '../../assets/education.png'
import trashCanImg from '../../assets/trashCan.png'
import './Education.scss';

const Education = ({ saveDisplayEducation, deleteDisplayEducation }) => {
    const [show, setShow] = useState(false);
    const [imgToggle, setImgToggle] = useState(false)
    const [showForm, setShowForm] = useState(false);
    const [educationList, setEducationList] = useState([]);
    const [currentEducation, setCurrentEducation] = useState(null);

    const toggleShow = () => {
        setShow(prev => !prev);
        setImgToggle(prev => !prev)
        setShowForm(false)

    };

    const toggleShowForm = () => {
        setShowForm(prev => !prev)
    }


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
        deleteDisplayEducation(id)
    };

    const editEducation = (edu) => {
        setCurrentEducation(edu);
        toggleShowForm();
    };

    return (
        <div className="education-show-container">
            <div 
                className="show-toggle"
                onClick={toggleShow}>
                <img src={educationImg} alt="education image" />
                <h2>Education</h2>
                <img src={downArrow} className={imgToggle ? 'arrow rotate' : 'arrow unrotate'} alt="down arrow" />
            </div>

            {show && (
                <>
                    {showForm ? (
                        <EducationInputs 
                            setShowForm={setShowForm}
                            saveEducationList={saveEducationList}
                            currentEducation={currentEducation}
                            saveDisplayEducation={saveDisplayEducation}
                            setCurrentEducation={setCurrentEducation}
                            
                        />
                    ) : (
                        <>
                            <div className="educations-container">
                                {educationList.map(edu => (
                                    <div key={edu.id} className="education-container" onClick={() => editEducation(edu)}>
                                        <h3>{edu.schoolName}</h3>
                                        <img src={trashCanImg} alt="trash can image" onClick={(e) => deleteEducation(edu.id, e)} className="delete"></img>
                                    </div>
                                ))}
                                <button onClick={() => setShowForm(true)} className="add-education normal">+ Education</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Education;
