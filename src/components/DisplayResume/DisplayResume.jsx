import './DisplayResume.scss'
import emailImg from '../../assets/email.png'
import phoneNumberImg from '../../assets/phoneNumber.png'
import addressImg from '../../assets/address.png'

const DisplayResume = ({ personalDetails, education, experience }) => {
    return (
        <div className="resume-container">
            <h1>{personalDetails.fullName}</h1>
            <div className="contacts-header">
                <div className="contacts-container">
                    {personalDetails.email && <img src={emailImg} alt='email image'></img>}
                    <p>{personalDetails.email}</p>
                </div>
                <div className="contacts-container">
                    {personalDetails.phoneNumber && <img src={phoneNumberImg} alt='phone number image'></img>}
                    <p>{personalDetails.phoneNumber}</p>
                </div>
                <div className="contacts-container">
                    {personalDetails.address && <img src={addressImg} alt='address image'></img>}
                    <p>{personalDetails.address}</p>
                </div>
            </div>

            {education.length > 0 && (
                <div className='educations-container'>
                    <h2>Education</h2>
                    <div className="line-break"></div>
                    {education.map(edu => (
                        <div className="education-container" key={edu.id}>
                            <div className="top">
                                <h3>{edu.schoolName}</h3>
                                <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                            </div>
                            <p>{edu.degree}</p>
                        </div>
                    ))}
                </div>
            )}

            {experience.length > 0 && (
                <div className="experiences-container">
                    <h2>Experiences</h2>
                    <div className="line-break"></div>
                    {experience.map(exp => (
                        <div className="experience-container" key={exp.id}>
                            <div className="top">
                                <div className="flex">
                                    <h3>{exp.positionTitle}</h3>
                                    <p>{`${exp.startDate} - ${exp.endDate}`}</p>
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
    );
}

export default DisplayResume;