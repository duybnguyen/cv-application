import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import './EducationInputs.scss'
const EducationInputs = ({ setShowForm, saveEducationList, currentEducation, saveDisplayEducation, setCurrentEducation }) => {
    const [schoolName, setSchoolName] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (currentEducation) {
            setSchoolName(currentEducation.schoolName || '');
            setDegree(currentEducation.degree || '');
            setStartDate(currentEducation.startDate || '');
            setEndDate(currentEducation.endDate || '');
        }
    }, [currentEducation]);

    const handleSchoolName = (e) => setSchoolName(e.target.value);
    const handleDegree = (e) => setDegree(e.target.value);
    const handleStartDate = (e) => setStartDate(e.target.value);
    const handleEndDate = (e) => setEndDate(e.target.value);

    const saveEducation = () => {
        const educationData = {
            schoolName,
            degree,
            startDate,
            endDate,
            id: currentEducation ? currentEducation.id : uuid(),
        };
        saveEducationList(educationData);
        saveDisplayEducation(educationData);
        clearForms();
        setShowForm(false);
    };

    const clearForms = () => {
        setSchoolName('');
        setDegree('');
        setStartDate('');
        setEndDate('');
        setShowForm(false);
        setCurrentEducation(null);
    };

    return (
        <div className="education-container">
            <label htmlFor="school-name">School Name
                <input type="text" id="school-name" value={schoolName} onChange={handleSchoolName} required />
            </label>
            <label htmlFor="degree">Degree/Field of Study
                <input type="text" id="degree" value={degree} onChange={handleDegree} required />
            </label>

            <div className="date-container">
                <label htmlFor="start-date">Start Date
                    <input type="text" id="start-date" value={startDate} onChange={handleStartDate} required />
                </label>
                <label htmlFor="end-date">End Date
                    <input type="text" id="end-date" value={endDate} onChange={handleEndDate} required />
                </label>
            </div>

            <div className="btn-container">
                <button onClick={clearForms} className="cancel">Cancel</button>
                <button onClick={saveEducation}>Save</button>
            </div>
        </div>
    );
};

export default EducationInputs;
