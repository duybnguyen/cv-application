import { useState } from "react";
import './Education.scss';

const Education = () => {
    const [show, setShow] = useState(false);
    const [educationList, setEducationList] = useState([]);

    const toggleShow = () => {
        setShow(prevShow => !prevShow);
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
                    {educationList && (
                        <div className="educations-container">
                            {educationList.map((edu, index) => (
                                <div key={index} className="education-container">
                                    <h3>{edu.name}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                    <button>+ Education</button>
                </>
            )}
        </div>
    );
};

export default Education;
