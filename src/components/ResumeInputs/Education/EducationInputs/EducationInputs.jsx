import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

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
        setShowForm(false)
        setCurrentEducation(null);
    };

    return (
        <div className="education-container">
            <label htmlFor="school-name">School Name
                <input type="text" id="school-name" value={schoolName} onChange={handleSchoolName} />
            </label>
            <label htmlFor="degree">Degree/Field of Study
                <input type="text" id="degree" value={degree} onChange={handleDegree} />
            </label>
            <label htmlFor="start-date">Start Date
                <input type="date" id="start-date" value={startDate} onChange={handleStartDate} />
            </label>
            <label htmlFor="end-date">End Date
                <input type="date" id="end-date" value={endDate} onChange={handleEndDate} />
            </label>
            <div className="btn-container">
                <button onClick={clearForms}>Cancel</button>
                <button onClick={saveEducation}>Save</button>
            </div>
        </div>
    );
};

export default EducationInputs;
