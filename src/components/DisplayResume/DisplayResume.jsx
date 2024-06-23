const DisplayResume = (personalDetails, education, experience) => {
    return (
        <div className="resume-container">
            <div className="personal-details-container">
                <h1>{personalDetails.fullName}</h1>
                <div className="contacts-header">
                    <p>{personalDetails.email}</p>
                    <p>{personalDetails.phoneNumber}</p>
                    <p>{personalDetails.address}</p>
                </div>
            </div>


            {education && (
                <div className="educations-container">
                    <h2>Education</h2>
                    <div className="line-break"></div>
                    {education.map(edu => (
                        <div className="education-container" key={edu.id}>
                            <div className="top">
                                <h3>{edu.schoolName}</h3>
                                <p>`{edu.startDate} - {edu.endDate}``</p>
                            </div>
                            <p>{edu.degree}</p>
                        </div>
                    ))}
                </div>
            )}

            {experience && (
                <div className="experiences-container">
                    <h2>Experiences</h2>
                    <div className="line-break"></div>
                    {experience.map(exp => (
                        <div className="experience-container" key={exp.id}>
                            <div className="top">
                                <div className="flex">
                                    <h3>{exp.positionTitle}</h3>
                                    <p>`{exp.startDate} - {exp.endDate}`</p>
                                </div>
                                <div className="flex">
                                    <p>{exp.companyName}</p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DisplayResume