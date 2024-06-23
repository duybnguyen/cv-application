import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

const ExperienceInputs = ({ toggleShowForm, saveExperienceList, currentExperience }) => {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        if (currentExperience) {
            setPositionTitle(currentExperience.positionTitle || '');
            setCompanyName(currentExperience.companyName || '');
            setStartDate(currentExperience.startDate || '');
            setEndDate(currentExperience.endDate || '');
            setLocation(currentExperience.location || '');
            setDescription(currentExperience.description || '');
        }
    }, [currentExperience]);

    const handleCompanyName = e => setCompanyName(e.target.value);
    const handlePositionTitle = e => setPositionTitle(e.target.value);
    const handleStartDate = e => setStartDate(e.target.value);
    const handleEndDate = e => setEndDate(e.target.value);
    const handleLocation = e => setLocation(e.target.value);
    const handleDescription = e => setDescription(e.target.value);

    const clearForms = () => {
        setCompanyName('');
        setPositionTitle('');
        setStartDate('');
        setEndDate('');
        setLocation('');
        setDescription('');
        toggleShowForm();
    };

    const saveExperience = () => {
        saveExperienceList({
            companyName,
            positionTitle,
            startDate,
            endDate,
            location,
            description,
            id: currentExperience ? currentExperience.id : uuid()
        });
        clearForms();
        toggleShowForm();
    };

    return (
        <div className="experience-container">
            <label htmlFor="company-name">Company Name
                <input type="text" id="company-name" value={companyName} onChange={handleCompanyName} />
            </label>
            <label htmlFor="position-title">Position Title
                <input type="text" id="position-title" value={positionTitle} onChange={handlePositionTitle} />
            </label>
            <label htmlFor="start-date">Start Date
                <input type="date" id="start-date" value={startDate} onChange={handleStartDate} />
            </label>
            <label htmlFor="end-date">End Date
                <input type="date" id="end-date" value={endDate} onChange={handleEndDate} />
            </label>
            <label htmlFor="location">Location
                <input type="text" id="location" value={location} onChange={handleLocation} />
            </label>
            <label htmlFor="description">Description
                <input type="text-area" id="description" value={description} onChange={handleDescription} />
            </label>
            <div className="btn-container">
                <button onClick={clearForms}>Cancel</button>
                <button onClick={saveExperience}>Save</button>
            </div>
        </div>
    );
};

export default ExperienceInputs;
