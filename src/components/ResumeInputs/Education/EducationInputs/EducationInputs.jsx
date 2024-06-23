import { useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';


const EducationInputs = ({toggleShowForm, saveEducationList, currentEducation}) => {
    const [schoolName, setSchoolName] = useState('')
    const [degree, setDegree] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSchoolName = e => setSchoolName(e.target.value)
    const handleDegree = e => setDegree(e.target.value)
    const handleStartDate = e => setStartDate(e.target.value)
    const handleEndDate = e => setEndDate(e.target.value)

    useEffect(() => {
        if (currentEducation) {
            setSchoolName(currentEducation.schoolName || '');
            setDegree(currentEducation.degree || '');
            setStartDate(currentEducation.startDate || '');
            setEndDate(currentEducation.endDate || '');
        }
    }, [currentEducation]);

    const saveEducation = () => {
        saveEducationList({
            schoolName,
            degree,
            startDate,
            endDate,
            id: currentEducation ? currentEducation.id : uuid()
        });
        clearForms();
        toggleShowForm()
    };

    
    
    
    const clearForms = () => {
        setSchoolName('')
        setDegree('')
        setStartDate('')
        setEndDate('')
        toggleShowForm()
    }

    return (
        <div className="education-container">
            <label htmlFor="school-name">School Name
                <input type="text" id="school-name" value={schoolName} onChange={e => handleSchoolName(e)}/>
            </label>
            <label htmlFor="degree">Degree/Field of Study
                <input type="text" id="degee" value={degree} onChange={e => handleDegree(e)} />
            </label>
            <label htmlFor="start-date">Degree/Field of Study
                <input type="date" id="start-date" value={startDate} onChange={e => handleStartDate(e)} />
            </label>
            <label htmlFor="end-date">
                <input type="date" id="end-date" value={endDate} onChange={e => handleEndDate(e)} />
            </label>
            <div className="btn-container">
                <button onClick={() => clearForms()}>Cancel</button>
                <button onClick={saveEducation}>Save</button>
            </div>
        </div>
    )
}

export default EducationInputs